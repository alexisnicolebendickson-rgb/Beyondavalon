/*
  Beyond Avalon — FAN Graph interactive network renderer
  Reads window.FAN_GRAPH_DATA ({nodes, edges}) and draws a D3 force-directed
  graph with drag, zoom/pan, click-to-inspect, hover neighborhood highlight,
  confidence filters, and name search. Visual encoding matches the published
  static diagram and the FAN-GRAPH-SCHEMA confidence vocabulary.
*/
(function () {
  "use strict";

  var DATA = window.FAN_GRAPH_DATA;
  var wrap = document.getElementById("fan-graph");
  if (!DATA || !wrap || typeof d3 === "undefined") {
    console.warn("FAN graph: data, container, or d3 missing — cannot render.");
    return;
  }

  var GROUP_COLORS = {
    enslaved:    "#a31621",
    person:      "#2e6da4",
    event:       "#c98a12",
    place:       "#2e7d32",
    estate:      "#6a3fa0",
    institution: "#5d6d7e"
  };
  var GROUP_LABELS = {
    enslaved: "Person — enslaved",
    person: "Person",
    event: "Event",
    place: "Place",
    estate: "Estate",
    institution: "Institution"
  };
  var CONF_STYLE = {
    confirmed_primary:   { color: "#1a1a1a", dash: null,      width: 1.6, label: "confirmed_primary — citable" },
    confirmed_secondary: { color: "#5b7fa6", dash: null,      width: 1.4, label: "confirmed_secondary — citable" },
    lead:                { color: "#c96a12", dash: "7,5",     width: 1.5, label: "lead — hypothesis, not fact" },
    unresolved:          { color: "#8a8a8a", dash: "7,5",     width: 1.3, label: "unresolved — hypothesis, not fact" },
    do_not_merge:        { color: "#a31621", dash: "2,5",     width: 2.6, label: "do_not_merge — identity safeguard" }
  };
  var CONF_ORDER = ["confirmed_primary", "confirmed_secondary", "lead", "unresolved", "do_not_merge"];

  var nodes = DATA.nodes.map(function (n) { return Object.assign({}, n); });
  var nodeById = {};
  nodes.forEach(function (n) { nodeById[n.id] = n; });
  var links = DATA.edges.map(function (e) {
    return {
      id: e.id, source: nodeById[e.source], target: nodeById[e.target],
      relationship: e.relationship, confidence: e.confidence,
      date: e.date, date_note: e.date_note, source_document: e.source_document,
      db1_row: e.db1_row, notes: e.notes
    };
  });

  // degree for sizing
  nodes.forEach(function (n) { n.degree = 0; });
  links.forEach(function (l) { l.source.degree++; l.target.degree++; });

  // parallel-link curvature (antiparallel duplicate rows, e.g. spouse_of both ways)
  var pairCount = {};
  links.forEach(function (l) {
    var k = [l.source.id, l.target.id].sort().join("|");
    pairCount[k] = (pairCount[k] || 0) + 1;
    l.pairIndex = pairCount[k] - 1;
    l.pairTotal = 0;
  });
  links.forEach(function (l) {
    var k = [l.source.id, l.target.id].sort().join("|");
    l.pairTotal = pairCount[k];
  });

  var width = wrap.clientWidth || 1100;
  var height = Math.max(560, Math.min(760, Math.round(width * 0.62)));

  var svg = d3.select(wrap).append("svg")
    .attr("width", "100%").attr("height", height)
    .attr("role", "img")
    .attr("aria-label", "Interactive FAN graph: 84 nodes, 100 edges");
  var g = svg.append("g");

  svg.call(d3.zoom().scaleExtent([0.25, 4]).on("zoom", function (event) {
    g.attr("transform", event.transform);
  }));

  var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(function (d) { return d.id; }).distance(130).strength(0.7))
    .force("charge", d3.forceManyBody().strength(-420))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius(function (d) { return 14 + Math.sqrt(d.degree) * 4; }));

  function linkPath(d) {
    var x1 = d.source.x, y1 = d.source.y, x2 = d.target.x, y2 = d.target.y;
    if (d.pairTotal < 2) return "M" + x1 + "," + y1 + "L" + x2 + "," + y2;
    var dx = x2 - x1, dy = y2 - y1;
    var dr = Math.sqrt(dx * dx + dy * dy) * (d.pairIndex === 0 ? 0.35 : -0.35);
    return "M" + x1 + "," + y1 + "A" + dr + "," + dr + " 0 0,1 " + x2 + "," + y2;
  }

  var link = g.append("g").attr("class", "links")
    .selectAll("path").data(links).enter().append("path")
    .attr("stroke", function (d) { return CONF_STYLE[d.confidence].color; })
    .attr("stroke-width", function (d) { return CONF_STYLE[d.confidence].width; })
    .attr("fill", "none")
    .attr("stroke-dasharray", function (d) { return CONF_STYLE[d.confidence].dash; })
    .attr("data-conf", function (d) { return d.confidence; })
    .append("title").text(function (d) {
      return d.id + ": " + d.source.label + " —" + d.relationship + "→ " + d.target.label +
        " (" + d.confidence + ")";
    });

  var linkSel = g.select(".links").selectAll("path");

  var node = g.append("g").attr("class", "nodes")
    .selectAll("g").data(nodes).enter().append("g")
    .attr("class", "node")
    .call(d3.drag()
      .on("start", function (event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
      })
      .on("drag", function (event, d) { d.fx = event.x; d.fy = event.y; })
      .on("end", function (event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null; d.fy = null;
      }));

  node.append("circle")
    .attr("r", function (d) { return 7 + Math.sqrt(d.degree) * 3.2; })
    .attr("fill", function (d) { return GROUP_COLORS[d.group] || "#888"; })
    .attr("stroke", "#fff").attr("stroke-width", 1.5);

  node.append("text")
    .attr("dx", 11).attr("dy", 4)
    .text(function (d) { return d.label; })
    .attr("font-size", "11px").attr("fill", "#2b2b2b")
    .attr("paint-order", "stroke").attr("stroke", "#faf9f6")
    .attr("stroke-width", 3).attr("pointer-events", "none");

  var nodeSel = g.select(".nodes").selectAll("g.node");

  // ---- detail panel ----
  var panel = document.getElementById("fan-detail");
  var panelBody = document.getElementById("fan-detail-body");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showDetail(n) {
    var conns = links.filter(function (l) { return l.source === n || l.target === n; });
    var html = "<h3>" + esc(n.label) + "</h3>" +
      "<p class=\"detail-type\"><span class=\"swatch\" style=\"background:" +
      (GROUP_COLORS[n.group] || "#888") + "\"></span>" + esc(GROUP_LABELS[n.group] || n.type) +
      " · " + n.degree + " connection" + (n.degree === 1 ? "" : "s") + "</p>" +
      "<ul class=\"detail-edges\">";
    conns.forEach(function (l) {
      var other = l.source === n ? l.target : l.source;
      var dir = l.source === n ? "→" : "←";
      html += "<li><strong>" + esc(other.label) + "</strong> " + dir + " <em>" +
        esc(l.relationship.replace(/_/g, " ")) + "</em><br>" +
        "<span class=\"conf conf-" + esc(l.confidence) + "\">" + esc(l.confidence) + "</span>" +
        (l.date ? " · " + esc(l.date) : "") +
        (l.id ? " · " + esc(l.id) : "") +
        (l.source_document ? "<br><span class=\"src\">" + esc(l.source_document) + "</span>" : "") +
        (l.notes ? "<br><span class=\"src\">" + esc(l.notes) + "</span>" : "") +
        "</li>";
    });
    html += "</ul>";
    panelBody.innerHTML = html;
    panel.classList.add("open");
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  node.on("click", function (event, d) { showDetail(d); });

  // ---- hover neighborhood highlight ----
  var neighborOf = {};
  links.forEach(function (l) {
    (neighborOf[l.source.id] = neighborOf[l.source.id] || {})[l.target.id] = 1;
    (neighborOf[l.target.id] = neighborOf[l.target.id] || {})[l.source.id] = 1;
  });

  node.on("mouseover", function (event, d) {
    var keep = neighborOf[d.id] || {};
    nodeSel.style("opacity", function (o) { return (o === d || keep[o.id]) ? 1 : 0.12; });
    linkSel.style("opacity", function (l) {
      return (l.source === d || l.target === d) ? 1 : 0.06;
    });
  }).on("mouseout", function () {
    nodeSel.style("opacity", 1);
    linkSel.style("opacity", 1);
    applyFilters();
  });

  // ---- confidence filters ----
  var activeConf = {};
  CONF_ORDER.forEach(function (c) { activeConf[c] = true; });

  function applyFilters() {
    linkSel.style("display", function (l) { return activeConf[l.confidence] ? null : "none"; });
    var visibleNode = {};
    links.forEach(function (l) {
      if (activeConf[l.confidence]) { visibleNode[l.source.id] = 1; visibleNode[l.target.id] = 1; }
    });
    nodeSel.style("opacity", function (n) { return visibleNode[n.id] ? 1 : 0.15; });
  }

  document.querySelectorAll("#fan-filters input[type=checkbox]").forEach(function (box) {
    box.addEventListener("change", function () {
      activeConf[box.value] = box.checked;
      applyFilters();
    });
  });

  // ---- search ----
  var searchInput = document.getElementById("fan-search");
  var searchResults = document.getElementById("fan-search-results");
  searchInput.addEventListener("input", function () {
    var q = searchInput.value.trim().toLowerCase();
    if (q.length < 2) { searchResults.innerHTML = ""; searchResults.hidden = true; return; }
    var hits = nodes.filter(function (n) { return n.label.toLowerCase().indexOf(q) !== -1; }).slice(0, 8);
    if (!hits.length) {
      searchResults.innerHTML = "<li class=\"no-hit\">No matches.</li>";
    } else {
      searchResults.innerHTML = hits.map(function (n) {
        return "<li><button type=\"button\" data-node=\"" + esc(n.id) + "\">" +
          esc(n.label) + " <span class=\"hit-type\">" + esc(GROUP_LABELS[n.group] || n.type) + "</span></button></li>";
      }).join("");
    }
    searchResults.hidden = false;
  });
  searchResults.addEventListener("click", function (event) {
    var btn = event.target.closest("button[data-node]");
    if (!btn) return;
    var n = nodeById[btn.getAttribute("data-node")];
    searchResults.hidden = true;
    searchInput.value = n.label;
    // flash-highlight the node
    nodeSel.style("opacity", function (o) { return o === n ? 1 : 0.15; });
    linkSel.style("opacity", function (l) {
      return (l.source === n || l.target === n) ? 1 : 0.06;
    });
    setTimeout(applyFilters, 2600);
    showDetail(n);
  });

  // ---- legend (built from the same encoding tables) ----
  var legend = document.getElementById("fan-legend");
  var lh = "<div class=\"legend-group\"><strong>Nodes</strong><ul>";
  Object.keys(GROUP_COLORS).forEach(function (gr) {
    lh += "<li><span class=\"swatch\" style=\"background:" + GROUP_COLORS[gr] + "\"></span>" +
      esc(GROUP_LABELS[gr]) + "</li>";
  });
  lh += "</ul></div><div class=\"legend-group\"><strong>Edges</strong><ul>";
  CONF_ORDER.forEach(function (c) {
    var s = CONF_STYLE[c];
    lh += "<li><span class=\"edge-swatch\" style=\"border-top: " + s.width +
      "px " + (s.dash ? "dashed" : "solid") + " " + s.color + ";\"></span>" + esc(s.label) + "</li>";
  });
  lh += "</ul></div>";
  legend.innerHTML = lh;

  document.getElementById("fan-counts").textContent =
    nodes.length + " nodes · " + links.length + " edges";

  simulation.on("tick", function () {
    linkSel.attr("d", linkPath);
    nodeSel.attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
})();
