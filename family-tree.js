/*
  Beyond Avalon — Jones core family tree renderer.
  Reads window.FAMILY_TREE_DATA ({meta, nodes, links}) and draws a generational
  tree with d3: manual slot layout, pan/zoom, click-to-inspect detail panel,
  confidence-styled links (same vocabulary as the FAN graph), search, and
  toggles for uncertain links and the manumitted-individuals cluster.
*/
(function () {
  "use strict";

  var DATA = window.FAMILY_TREE_DATA;
  var wrap = document.getElementById("family-tree");
  if (!DATA || !wrap || typeof d3 === "undefined") {
    if (wrap) wrap.innerHTML = "<p>Family tree data or the d3 library failed to load.</p>";
    console.warn("Family tree: data, container, or d3 missing — cannot render.");
    return;
  }

  var GROUP_STYLE = {
    jones:            { fill: "#F3EDE2", stroke: "#8A3A22", label: "Jones line" },
    spouse:           { fill: "#ffffff", stroke: "#33513E", label: "Married into the Jones line" },
    ancestor:         { fill: "#F7F1E6", stroke: "#8A7C6C", label: "Grandparent generation" },
    descendant:       { fill: "#FBF7EF", stroke: "#b07a3f", label: "Descendant (Perkins / Donnell)" },
    manumitted:       { fill: "#fdf2f2", stroke: "#a31621", label: "Manumitted Dec 1820 — named individual" },
    unresolved_person:{ fill: "#f4f4f4", stroke: "#8a8a8a", dash: "5,4", label: "Unresolved identity" },
    ghost:            { fill: "#fafafa", stroke: "#a31621", dash: "3,4", label: "Do-not-merge safeguard" }
  };
  var CONF_STYLE = {
    confirmed_primary:   { color: "#1a1a1a", dash: null,  width: 1.8, label: "confirmed primary — citable" },
    confirmed_secondary: { color: "#5b7fa6", dash: null,  width: 1.5, label: "confirmed secondary — citable" },
    lead:                { color: "#c96a12", dash: "7,5", width: 1.5, label: "lead — hypothesis, not fact" },
    unresolved:          { color: "#8a8a8a", dash: "7,5", width: 1.3, label: "unresolved — hypothesis, not fact" },
    do_not_merge:        { color: "#a31621", dash: "2,5", width: 2.6, label: "do-not-merge — identity safeguard" }
  };

  var nodes = DATA.nodes.map(function (n) { return Object.assign({}, n); });
  var nodeById = {};
  nodes.forEach(function (n) { nodeById[n.id] = n; });

  // ---- Manual generational slot layout ----
  // Each generation is an ordered list of units; a unit is one person or a couple.
  var GEN = [
    [["john-jones-sr"], ["frances-barber"], ["nelson-anderson"], ["frances-jackson-anderson"]],
    [["lewellen-jones", "mary-anderson-jones"]],
    [["john-n-s-jones", "eliza-ann-haywood"], ["alexander-p-jones"], ["frances-am-jones-perkins", "benjamin-perkins"]],
    [["mary-louisa-jones-1"],
     ["maria-louisa-jones", "jws-donnell"],
     ["john-haywood-jones", "sallie-maria-collier"],
     ["octavia-isabella-jones", "william-a-adair"],
     ["almira-marcella-jones", "alfred-s-dearing"],
     ["alexander-t-jones"],
     ["antonina-severa-jones"],
     ["cessaria-julia-jones"],
     ["paul-l-jones", "lucie-a-thomson"],
     ["walter-blackstone-jones", "emmet-s-malone"],
     ["antonina-s-jones", "william-a-hansell"],
     ["spotswood-adair-jones"],
     ["apj-unnamed-son"],
     ["alexander-spotswood-perkins"],
     ["maria-latitia-perkins"],
     ["washington-lafayette-perkins"]],
    [["eliza-haywood-donnell"], ["nannie-smith-donnell"], ["marcella-donnell-carney"],
     ["octavia-donnell-carney"], ["jws-donnell-jr"], ["pauline-walter-donnell"],
     ["john-haywood-donnell"], ["robert-smith-donnell"], ["maria-louisa-donnell"],
     ["susan-tanner-donnell"]]
  ];
  var SLOT_W = 196, ROW_H = 168, BOX_W = 176, BOX_H = 62;

  var cursor, gi, ui, unit, id;
  var mariaUnitX = 0;
  for (gi = 0; gi < GEN.length; gi++) {
    // Generation 4 (Donnell children) is centered under the Maria/JWS couple.
    if (gi === 4) {
      var totalW = GEN[gi].length * SLOT_W;
      cursor = mariaUnitX - totalW / 2;
    } else {
      cursor = 0;
    }
    for (ui = 0; ui < GEN[gi].length; ui++) {
      unit = GEN[gi][ui];
      for (var k = 0; k < unit.length; k++) {
        id = unit[k];
        if (!nodeById[id]) { console.warn("Family tree: unknown node id " + id); continue; }
        nodeById[id].x = cursor + SLOT_W / 2;
        nodeById[id].y = gi * ROW_H + 60;
        nodeById[id].gen = gi;
        cursor += SLOT_W;
      }
      if (gi === 3 && unit[0] === "maria-louisa-jones") mariaUnitX = cursor - SLOT_W; // couple center
    }
  }

  // Manumitted cluster: vertical stack to the right of the tree, near generations 2-3.
  var clusterIds = ["elizabeth-enslaved", "evelina-enslaved", "ann-enslaved", "shandy-wesley-jones"];
  var maxX = d3.max(nodes, function (n) { return n.x || 0; });
  clusterIds.forEach(function (cid, i) {
    nodeById[cid].x = maxX + 320;
    nodeById[cid].y = 2 * ROW_H + 60 + i * 96;
    nodeById[cid].cluster = true;
  });
  // Ghost node: left of Lewellen.
  nodeById["lewellen-bedford-ghost"].x = -300;
  nodeById["lewellen-bedford-ghost"].y = 1 * ROW_H + 60;
  nodeById["lewellen-bedford-ghost"].cluster = true;

  // Normalize so min x >= 60.
  var minX = d3.min(nodes, function (n) { return n.x; });
  nodes.forEach(function (n) { n.x = n.x - minX + 60; });
  var treeW = d3.max(nodes, function (n) { return n.x; }) + 160;
  var treeH = 4 * ROW_H + 60 + 120;

  // Spouse map from S-links.
  var spouseOf = {};
  DATA.links.forEach(function (e) {
    if (e.relationship === "spouse_of") { spouseOf[e.source] = e.target; spouseOf[e.target] = e.source; }
  });

  function coupleMid(a, b) { return { x: (a.x + b.x) / 2, y: a.y }; }

  function elbowPath(x1, y1, x2, y2) {
    var my = (y1 + y2) / 2;
    return "M" + x1 + "," + (y1 + BOX_H / 2) +
           "V" + my + "H" + x2 + "V" + (y2 - BOX_H / 2);
  }
  function curvePath(x1, y1, x2, y2, bend) {
    var mx = (x1 + x2) / 2 + (bend || 0);
    return "M" + x1 + "," + y1 + "Q" + mx + "," + ((y1 + y2) / 2) + " " + x2 + "," + y2;
  }

  // ---- SVG ----
  var width = wrap.clientWidth || 1100;
  var height = Math.max(600, Math.min(780, Math.round(width * 0.62)));
  var svg = d3.select(wrap).append("svg")
    .attr("width", "100%").attr("height", height)
    .attr("role", "img")
    .attr("aria-label", "Interactive Jones core family tree");
  var g = svg.append("g");
  var zoom = d3.zoom().scaleExtent([0.2, 3]).on("zoom", function (event) {
    g.attr("transform", event.transform);
  });
  svg.call(zoom);
  function fitView() {
    var s = Math.min(width / treeW, height / treeH, 1);
    var tx = (width - treeW * s) / 2, ty = (height - treeH * s) / 2;
    svg.transition().duration(450).call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(s));
  }

  // ---- Links ----
  // Group parent_of links by target to merge two-parent couples into one elbow.
  var parentLinks = DATA.links.filter(function (e) { return e.relationship === "parent_of"; });
  var byTarget = {};
  parentLinks.forEach(function (e) {
    (byTarget[e.target] = byTarget[e.target] || []).push(e);
  });
  var drawLinks = [];
  Object.keys(byTarget).forEach(function (t) {
    var arr = byTarget[t];
    if (arr.length === 2 && spouseOf[arr[0].source] === arr[1].source) {
      var a = nodeById[arr[0].source], b = nodeById[arr[1].source];
      var mid = coupleMid(a, b);
      drawLinks.push({ x1: mid.x, y1: mid.y, x2: nodeById[t].x, y2: nodeById[t].y,
        confidence: arr[0].confidence, kind: "elbow", data: arr[0] });
    } else {
      arr.forEach(function (e) {
        drawLinks.push({ x1: nodeById[e.source].x, y1: nodeById[e.source].y,
          x2: nodeById[e.target].x, y2: nodeById[e.target].y,
          confidence: e.confidence, kind: "elbow", data: e });
      });
    }
  });
  DATA.links.forEach(function (e) {
    if (e.relationship === "spouse_of") {
      var a = nodeById[e.source], b = nodeById[e.target];
      drawLinks.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, confidence: e.confidence, kind: "spouse", data: e });
    } else if (e.relationship === "manumitted_by") {
      var s = nodeById[e.source], t = nodeById[e.target];
      drawLinks.push({ x1: s.x + BOX_W / 2, y1: s.y, x2: t.x - BOX_W / 2, y2: t.y,
        confidence: e.confidence, kind: "curve", data: e, tag: "manumitted" });
    } else if (e.relationship === "associated_with") {
      var s2 = nodeById[e.source], t2 = nodeById[e.target];
      drawLinks.push({ x1: s2.x, y1: s2.y, x2: t2.x, y2: t2.y,
        confidence: e.confidence, kind: "curve", data: e, tag: "uncertain" });
    } else if (e.relationship === "not_the_same_person") {
      var s3 = nodeById[e.source], t3 = nodeById[e.target];
      drawLinks.push({ x1: s3.x - BOX_W / 2, y1: s3.y, x2: t3.x + BOX_W / 2, y2: t3.y,
        confidence: e.confidence, kind: "curve", data: e, tag: "safeguard" });
    }
  });

  var linkLayer = g.append("g").attr("class", "t-links");
  var linkSel = linkLayer.selectAll("path").data(drawLinks).enter().append("path")
    .attr("d", function (d) {
      if (d.kind === "elbow") return elbowPath(d.x1, d.y1, d.x2, d.y2);
      if (d.kind === "spouse") {
        return "M" + (d.x1 + BOX_W / 2 + 4) + "," + (d.y1 - 3) +
               "L" + (d.x2 - BOX_W / 2 - 4) + "," + (d.y2 - 3) +
               "M" + (d.x1 + BOX_W / 2 + 4) + "," + (d.y1 + 3) +
               "L" + (d.x2 - BOX_W / 2 - 4) + "," + (d.y2 + 3);
      }
      return curvePath(d.x1, d.y1, d.x2, d.y2, 60);
    })
    .attr("stroke", function (d) { return CONF_STYLE[d.confidence].color; })
    .attr("stroke-width", function (d) { return d.kind === "spouse" ? 1.2 : CONF_STYLE[d.confidence].width; })
    .attr("fill", "none")
    .attr("stroke-dasharray", function (d) { return CONF_STYLE[d.confidence].dash; })
    .attr("data-conf", function (d) { return d.confidence; })
    .attr("data-tag", function (d) { return d.tag || ""; })
    .append("title").text(function (d) {
      var e = d.data;
      return nodeById[e.source].label + " —" + e.relationship.replace(/_/g, " ") + "→ " +
             nodeById[e.target].label + " (" + e.confidence + ")";
    });

  // ---- Nodes ----
  function wrapLabel(label) {
    if (label.length <= 24) return [label];
    var words = label.split(" "), lines = [""], li = 0;
    words.forEach(function (w) {
      if ((lines[li] + " " + w).trim().length > 24 && lines[li]) { li++; lines[li] = ""; }
      lines[li] = (lines[li] + " " + w).trim();
    });
    return lines.slice(0, 2);
  }
  var nodeLayer = g.append("g").attr("class", "t-nodes");
  var nodeSel = nodeLayer.selectAll("g").data(nodes).enter().append("g")
    .attr("class", "t-node")
    .attr("transform", function (d) { return "translate(" + (d.x - BOX_W / 2) + "," + (d.y - BOX_H / 2) + ")"; })
    .attr("data-id", function (d) { return d.id; })
    .attr("data-tag", function (d) { return d.cluster ? "manumitted" : ""; })
    .style("cursor", "pointer")
    .on("click", function (event, d) { showDetail(d); highlight(d); });

  nodeSel.append("rect")
    .attr("width", BOX_W).attr("height", BOX_H).attr("rx", 8)
    .attr("fill", function (d) { return GROUP_STYLE[d.group].fill; })
    .attr("stroke", function (d) { return GROUP_STYLE[d.group].stroke; })
    .attr("stroke-width", function (d) { return d.group === "jones" ? 2.2 : 1.6; })
    .attr("stroke-dasharray", function (d) { return GROUP_STYLE[d.group].dash || null; })
    .attr("opacity", function (d) { return d.group === "ghost" ? 0.75 : 1; });
  nodeSel.each(function (d) {
    var s = d3.select(this), lines = wrapLabel(d.label);
    lines.forEach(function (ln, i) {
      s.append("text")
        .attr("x", BOX_W / 2).attr("y", lines.length === 1 ? 24 : 18 + i * 15)
        .attr("text-anchor", "middle")
        .attr("font-size", 12.5).attr("font-weight", 600)
        .attr("fill", "#2B2420").text(ln);
    });
    if (d.dates) s.append("text")
      .attr("x", BOX_W / 2).attr("y", lines.length === 1 ? 42 : 48)
      .attr("text-anchor", "middle").attr("font-size", 10.5)
      .attr("fill", "#5B4F44").text(d.dates.length > 40 ? d.dates.slice(0, 40) + "…" : d.dates);
    if (d.confidence === "lead" || d.confidence === "unresolved" || d.confidence === "do_not_merge") {
      s.append("circle").attr("cx", BOX_W - 12).attr("cy", 12).attr("r", 6)
        .attr("fill", CONF_STYLE[d.confidence].color).attr("opacity", 0.85)
        .append("title").text(CONF_STYLE[d.confidence].label);
    }
  });

  // ---- Detail panel ----
  var detail = document.getElementById("tree-detail");
  function confBadge(c) { return '<span class="conf conf-' + c + '">' + c.replace(/_/g, " ") + "</span>"; }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function showDetail(d) {
    if (!detail) return;
    var rels = DATA.links.filter(function (e) { return e.source === d.id || e.target === d.id; });
    var relHtml = rels.map(function (e) {
      var other = e.source === d.id ? nodeById[e.target] : nodeById[e.source];
      var dir = e.source === d.id ? "→" : "←";
      return '<li>' + dir + " <strong>" + esc(other.label) + "</strong><br><span class=\"src\">" +
        esc(e.relationship.replace(/_/g, " ")) + (e.date ? " · " + esc(e.date) : "") + " " +
        confBadge(e.confidence) + "</span></li>";
    }).join("");
    detail.innerHTML =
      '<h3>' + esc(d.label) + "</h3>" +
      '<p class="detail-type">' + esc(GROUP_STYLE[d.group].label) + " " + confBadge(d.confidence) + "</p>" +
      (d.dates ? "<p><strong>" + esc(d.dates) + "</strong></p>" : "") +
      (d.db1_rows && d.db1_rows.length ? '<p class="src">DB1 rows: ' + d.db1_rows.join(", ") + "</p>" : "") +
      (d.notes ? "<p>" + esc(d.notes) + "</p>" : "") +
      (relHtml ? '<h4>Relationships</h4><ul class="detail-edges">' + relHtml + "</ul>" : "");
  }
  function highlight(d) {
    nodeSel.select("rect").attr("stroke-width", function (n) { return n.group === "jones" ? 2.2 : 1.6; });
    d3.select(nodeSel.nodes()[nodes.indexOf(d)]).select("rect").attr("stroke-width", 3.5);
  }

  // ---- Controls ----
  function applyToggles() {
    var showUncertain = document.getElementById("toggle-uncertain").checked;
    var showManumitted = document.getElementById("toggle-manumitted").checked;
    linkLayer.selectAll("path")
      .style("display", function (d) {
        if (d.tag === "manumitted" && !showManumitted) return "none";
        if ((d.confidence === "lead" || d.confidence === "unresolved") && !showUncertain) return "none";
        return null;
      });
    nodeLayer.selectAll("g")
      .style("display", function (d) {
        if (d.cluster && d.group === "manumitted" && !showManumitted) return "none";
        return null;
      });
  }
  ["toggle-uncertain", "toggle-manumitted"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("change", applyToggles);
  });
  var zin = document.getElementById("tree-zoom-in"), zout = document.getElementById("tree-zoom-out"),
      zreset = document.getElementById("tree-zoom-reset");
  if (zin) zin.addEventListener("click", function () { svg.transition().duration(250).call(zoom.scaleBy, 1.3); });
  if (zout) zout.addEventListener("click", function () { svg.transition().duration(250).call(zoom.scaleBy, 0.77); });
  if (zreset) zreset.addEventListener("click", fitView);

  // ---- Search ----
  var searchInput = document.getElementById("tree-search");
  var resultsBox = document.getElementById("tree-search-results");
  function centerOn(d) {
    var s = 1.1;
    var tx = width / 2 - d.x * s, ty = height / 2 - d.y * s;
    svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(s));
    showDetail(d); highlight(d);
  }
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var q = searchInput.value.trim().toLowerCase();
      if (!resultsBox) return;
      if (q.length < 2) { resultsBox.innerHTML = ""; return; }
      var hits = nodes.filter(function (n) { return n.label.toLowerCase().indexOf(q) !== -1; }).slice(0, 8);
      resultsBox.innerHTML = hits.length
        ? hits.map(function (n, i) { return '<li><button data-i="' + i + '">' + esc(n.label) + ' <span class="hit-type">' + esc(GROUP_STYLE[n.group].label) + "</span></button></li>"; }).join("")
        : '<li class="no-hit">No matches.</li>';
      resultsBox.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          centerOn(hits[+b.getAttribute("data-i")]);
          resultsBox.innerHTML = ""; searchInput.value = "";
        });
      });
    });
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var q = searchInput.value.trim().toLowerCase();
        var hit = nodes.find(function (n) { return n.label.toLowerCase().indexOf(q) !== -1; });
        if (hit) { centerOn(hit); if (resultsBox) resultsBox.innerHTML = ""; }
      }
    });
  }

  // Default detail: Lewellen.
  showDetail(nodeById["lewellen-jones"]);
  fitView();
})();
