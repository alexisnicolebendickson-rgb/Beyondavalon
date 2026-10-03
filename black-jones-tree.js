/*
  Beyond Avalon — Black Jones family tree renderer (v1).
  Left-to-right THEMATIC layout: bands are clusters (anchors, 1805 deed,
  Anderson's people, Columbus & Reuben, Marshall & Nancy, 1870 households,
  1880 traces, Plato & Haywood, testimony & the missing) — NOT generations.
  Manual slot layout, pan/zoom, click-to-inspect detail panel, collapsible
  branches, confidence-styled links (same vocabulary as the core tree),
  search, and toggles for uncertain links and do-not-merge safeguards.

  DATA (window.BLACK_JONES_TREE_DATA) is read-only here — presentation only.
*/
(function () {
  "use strict";

  var DATA = window.BLACK_JONES_TREE_DATA;
  var wrap = document.getElementById("black-jones-tree");
  if (!DATA || !wrap || typeof d3 === "undefined") {
    if (wrap) wrap.innerHTML = "<p>Family tree data or the d3 library failed to load.</p>";
    console.warn("Black Jones tree: data, container, or d3 missing — cannot render.");
    return;
  }

  // ---- Style vocabularies (same confidence vocabulary as the core tree) ----
  var GROUP_STYLE = {
    anchor:           { fill: "#F7F1E6", stroke: "#8A7C6C", label: "Jones-network anchor (see core tree)" },
    enslaved:         { fill: "#fdf2f2", stroke: "#a31621", label: "Enslaved — named individual" },
    freedperson:      { fill: "#F3EDE2", stroke: "#33513E", label: "Freedperson — named individual" },
    voter:            { fill: "#FBF7EF", stroke: "#b07a3f", label: "1867 voter — named individual" },
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
  var EMPH_GROUPS = { freedperson: 1, enslaved: 1 };

  var nodes = DATA.nodes.map(function (n) { return Object.assign({}, n); });
  var nodeById = {};
  nodes.forEach(function (n) { nodeById[n.id] = n; });

  // ---- Relationship indexes ----
  var parentsOf = {}, childrenOf = {}, spouseOf = {};
  DATA.links.forEach(function (e) {
    if (e.relationship === "parent_of") {
      (parentsOf[e.target] = parentsOf[e.target] || []).push(e.source);
      (childrenOf[e.source] = childrenOf[e.source] || []).push(e.target);
    } else if (e.relationship === "spouse_of") {
      spouseOf[e.source] = e.target; spouseOf[e.target] = e.source;
    }
  });

  // ---- Collapse state ----
  var collapsed = {};
  var hiddenSet = {};
  function computeHidden() {
    hiddenSet = {};
    nodes.forEach(function (n) {
      var seen = {}, stack = (parentsOf[n.id] || []).slice(), hide = false;
      while (stack.length && !hide) {
        var p = stack.pop();
        if (seen[p]) continue; seen[p] = true;
        if (collapsed[p]) { hide = true; break; }
        (parentsOf[p] || []).forEach(function (g) { stack.push(g); });
      }
      if (hide) hiddenSet[n.id] = true;
    });
  }
  function isHidden(id) { return !!hiddenSet[id]; }
  function expandAncestors(id) {
    var seen = {}, stack = (parentsOf[id] || []).slice(), changed = false;
    while (stack.length) {
      var p = stack.pop();
      if (seen[p]) continue; seen[p] = true;
      if (collapsed[p]) { delete collapsed[p]; changed = true; }
      (parentsOf[p] || []).forEach(function (g) { stack.push(g); });
    }
    return changed;
  }

  // ---- Manual left-to-right band layout ----
  // Bands are thematic clusters (not generations). Units stack vertically.
  var BANDS = [
    { label: "Network anchors", units: [
      ["lewellen-anchor"], ["frances-anchor"], ["apj-anchor"],
      ["nelson-anderson-anchor"], ["george-t-jones"], ["haywood-planter"] ] },
    { label: "1805 deed of gift", units: [
      ["macon-1805"], ["ben-1805"], ["mary-ann-1805"], ["edeline-1805"],
      ["philedsy-1805"], ["judith-1805"], ["meriah-1805"], ["big-will-1805"],
      ["sarah-1805"], ["delphia-1805"], ["anthony-1805"], ["polly-1805"],
      ["elizabeth-1820"] ] },
    { label: "Anderson's people, 1819\u201320", units: [
      ["william-kenny"], ["isaac-kenny"], ["sylvia-kenney"], ["rook-kenney"],
      ["sylvia-son-unnamed"], ["milly-cook"], ["lindsay-bonapartte"] ] },
    { label: "Columbus & Reuben Jones", units: [
      ["turner-moore"], ["eliza-jones-1861"],
      ["columbus-jones", "tomietta-jones"], ["turner-jones-brother"],
      ["linzey-jones"], ["columbus-linzey-ghost"],
      ["reuben-jones", "mollie-richardson"], ["simon-reuben"],
      ["emily-jones"], ["shandy-wesley-jones"] ] },
    { label: "Marshall & Nancy Jones", units: [
      ["marshall-jones", "nancy-jones"], ["zachariah-jones"] ] },
    { label: "1870 households", units: [
      ["martha-jones-1870a"], ["martha-jones-1870b"], ["martha-jones-1870c"],
      ["martha-jones-1870d"], ["lucinda-jones-1870", "prince-jones"],
      ["lucinda-jones-1870-white"], ["willie-jones-1870"],
      ["william-terrill", "lelia-terrill"], ["mary-terrill-1870"],
      ["john-terrill-1870"], ["tom-terrell-1865"] ] },
    { label: "1880 traces", units: [
      ["martha-jones-1880a"], ["martha-jones-1880b"], ["martha-jones-1880c"],
      ["lucinda-jones-1880"], ["lucinda-jones-1880-white"],
      ["william-jones-1880"], ["mary-terrell-1880"], ["john-terrell-1880"] ] },
    { label: "Plato Jones & the Haywood name", units: [
      ["thomas-jones-pf", "mahala-jones-pm"], ["plato-jones", "lizzie-garrett"],
      ["barrett-haywood"], ["cooper-haywood"], ["erby-haywood"],
      ["henderson-haywood"], ["lewis-haywood"], ["william-haywood-v"],
      ["willis-haywood"], ["patton-haywood"] ] },
    { label: "Testimony & the missing", units: [
      ["wilson-jones-scc"], ["robert-criner"],
      ["diana-terrell"], ["holiday-jones"] ] }
  ];
  var MARGIN_X = 40, MARGIN_TOP = 64;
  var COL_W = 250, ROW_H = 124, BOX_W = 210, BOX_H = 64;

  var treeW = 0, treeH = 0;
  function layout() {
    computeHidden();
    var bi, ui, k, id, unit, cursor, maxUnits = 0;
    for (bi = 0; bi < BANDS.length; bi++) {
      cursor = MARGIN_TOP;
      var band = BANDS[bi];
      for (ui = 0; ui < band.units.length; ui++) {
        unit = band.units[ui];
        for (k = 0; k < unit.length; k++) {
          id = unit[k];
          if (!nodeById[id]) { console.warn("Black Jones tree: unknown node id " + id); continue; }
          if (isHidden(id)) continue;
          nodeById[id].x = MARGIN_X + bi * COL_W + COL_W / 2;
          nodeById[id].y = cursor + ROW_H / 2;
          nodeById[id].band = bi;
          cursor += ROW_H;
        }
      }
      if (band.units.length > maxUnits) maxUnits = band.units.length;
    }
    treeW = MARGIN_X * 2 + BANDS.length * COL_W;
    treeH = MARGIN_TOP + maxUnits * ROW_H + 60;
  }

  // ---- Orthogonal link paths ----
  function elbowH(x1, y1, x2, y2) {
    if (Math.abs(y1 - y2) < 1) return "M" + x1 + "," + y1 + "H" + x2;
    if (Math.abs(x1 - x2) < 1) return "M" + x1 + "," + y1 + "V" + y2;
    var mx = (x1 + x2) / 2;
    return "M" + x1 + "," + y1 + "H" + mx + "V" + y2 + "H" + x2;
  }
  function safeguardBow(s, t) {   // short curve bulging right of the band
    var x1 = s.x + BOX_W / 2, x2 = t.x + BOX_W / 2;
    var mx = Math.max(x1, x2) + 44;
    return "M" + x1 + "," + s.y + " C" + mx + "," + s.y + " " + mx + "," + t.y + " " + x2 + "," + t.y;
  }
  function linkKey(e) { return e.source + "|" + e.target + "|" + e.relationship; }

  function computeDrawLinks() {
    var out = [];
    var byTarget = {};
    DATA.links.forEach(function (e) {
      if (e.relationship !== "parent_of") return;
      if (isHidden(e.source) || isHidden(e.target)) return;
      (byTarget[e.target] = byTarget[e.target] || []).push(e);
    });
    Object.keys(byTarget).forEach(function (t) {
      var arr = byTarget[t], child = nodeById[t];
      var x2 = child.x - BOX_W / 2, y2 = child.y;
      if (arr.length === 2 && spouseOf[arr[0].source] === arr[1].source) {
        var a = nodeById[arr[0].source], b = nodeById[arr[1].source];
        out.push({ key: linkKey(arr[0]) + "+couple", kind: "elbow",
          d: elbowH(a.x + BOX_W / 2, (a.y + b.y) / 2, x2, y2),
          confidence: arr[0].confidence, tag: "", data: arr[0] });
      } else {
        arr.forEach(function (e) {
          var p = nodeById[e.source];
          out.push({ key: linkKey(e), kind: "elbow",
            d: elbowH(p.x + BOX_W / 2, p.y, x2, y2),
            confidence: e.confidence, tag: "", data: e });
        });
      }
    });
    DATA.links.forEach(function (e) {
      if (isHidden(e.source) || isHidden(e.target)) return;
      var s = nodeById[e.source], t = nodeById[e.target];
      if (e.relationship === "spouse_of") {
        var top = s.y < t.y ? s : t, bot = s.y < t.y ? t : s, x = s.x;
        out.push({ key: linkKey(e), kind: "spouse",
          d: "M" + (x - 5) + "," + (top.y + BOX_H / 2 + 3) + "V" + (bot.y - BOX_H / 2 - 3) +
             "M" + (x + 5) + "," + (top.y + BOX_H / 2 + 3) + "V" + (bot.y - BOX_H / 2 - 3),
          confidence: e.confidence, tag: "", data: e });
      } else if (e.relationship === "not_the_same_person") {
        out.push({ key: linkKey(e), kind: "safeguard",
          d: safeguardBow(s, t),
          confidence: e.confidence, tag: "safeguard", data: e });
      } else if (e.relationship !== "parent_of") {
        // deed_of_gift, transferred_to, enslaved_by, emancipated_by,
        // associated_with, possibly_same_as — all routed as elbows,
        // styled by confidence.
        var tag = (e.relationship === "associated_with" || e.relationship === "possibly_same_as") ? "uncertain" : "";
        out.push({ key: linkKey(e), kind: "elbow",
          d: elbowH(s.x + BOX_W / 2, s.y, t.x - BOX_W / 2, t.y),
          confidence: e.confidence, tag: tag, data: e });
      }
    });
    return out;
  }

  // ---- SVG ----
  var width = wrap.clientWidth || 1100;
  var height = Math.max(Math.round(window.innerHeight * 0.72), 560);
  var svg = d3.select(wrap).append("svg")
    .attr("width", "100%").attr("height", height)
    .attr("role", "img")
    .attr("aria-label", "Interactive Black Jones family tree");
  var g = svg.append("g");
  var zoom = d3.zoom().scaleExtent([0.2, 3]).on("zoom", function (event) {
    g.attr("transform", event.transform);
  });
  svg.call(zoom);

  // Band labels above each column.
  var labelLayer = g.append("g").attr("class", "t-bands");
  function paintBandLabels() {
    var sel = labelLayer.selectAll("text").data(BANDS);
    sel.enter().append("text")
      .attr("x", function (d, i) { return MARGIN_X + i * COL_W + COL_W / 2; })
      .attr("y", MARGIN_TOP - 28)
      .attr("text-anchor", "middle")
      .attr("font-size", "13px").attr("font-weight", "700")
      .attr("fill", "#8A3A22")
      .text(function (d) { return d.label; });
  }

  function fitView() {
    var s = Math.min(width / treeW, height / treeH, 1);
    var tx = (width - treeW * s) / 2, ty = (height - treeH * s) / 2;
    svg.transition().duration(450).call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(s));
  }
  function focusNode(d, scale) {
    var s = scale || 1;
    var tx = width / 2 - d.x * s, ty = height / 2 - d.y * s;
    svg.call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(s));
  }

  // ---- Links layer (below nodes) ----
  var linkLayer = g.append("g").attr("class", "t-links");
  function paintLink(sel) {
    sel.attr("fill", "none")
      .attr("pointer-events", "none")
      .attr("stroke", function (d) { return CONF_STYLE[d.confidence].color; })
      .attr("stroke-width", function (d) { return d.kind === "spouse" ? 1.2 : CONF_STYLE[d.confidence].width; })
      .attr("stroke-dasharray", function (d) { return CONF_STYLE[d.confidence].dash; })
      .attr("data-conf", function (d) { return d.confidence; })
      .attr("data-tag", function (d) { return d.tag || ""; });
    sel.append("title").text(function (d) {
      var e = d.data;
      return nodeById[e.source].label + " \u2014" + e.relationship.replace(/_/g, " ") + "\u2192 " +
             nodeById[e.target].label + " (" + e.confidence + ")";
    });
    return sel;
  }

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
  var nodeSel = nodeLayer.selectAll("g.t-node").data(nodes).enter().append("g")
    .attr("class", "t-node")
    .attr("data-id", function (d) { return d.id; })
    .style("cursor", "pointer")
    .attr("pointer-events", "all")
    .on("click", function (event, d) { showDetail(d); highlight(d); });

  nodeSel.append("rect")
    .attr("width", BOX_W).attr("height", BOX_H).attr("rx", 8)
    .attr("fill", function (d) { return GROUP_STYLE[d.group].fill; })
    .attr("stroke", function (d) { return GROUP_STYLE[d.group].stroke; })
    .attr("stroke-width", function (d) { return EMPH_GROUPS[d.group] ? 2.2 : 1.6; })
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
      .attr("fill", "#5B4F44").text(d.dates.length > 40 ? d.dates.slice(0, 40) + "\u2026" : d.dates);
    if (d.confidence === "lead" || d.confidence === "unresolved" || d.confidence === "do_not_merge") {
      s.append("circle").attr("cx", BOX_W - 12).attr("cy", 12).attr("r", 6)
        .attr("fill", CONF_STYLE[d.confidence].color).attr("opacity", 0.85)
        .append("title").text(CONF_STYLE[d.confidence].label);
    }
    var hasKids = childrenOf[d.id] && childrenOf[d.id].length > 0;
    var chev = s.append("g").attr("class", "chev")
      .attr("transform", "translate(" + (BOX_W + 2) + "," + (BOX_H / 2) + ")")
      .style("display", hasKids ? null : "none")
      .attr("pointer-events", "all");
    chev.append("circle").attr("r", 11)
      .attr("fill", "#fffdf8").attr("stroke", "#8A3A22").attr("stroke-width", 1.5);
    chev.append("text").attr("text-anchor", "middle").attr("dy", "0.35em")
      .attr("font-size", "13px").attr("font-weight", "700").attr("fill", "#8A3A22")
      .text("\u25be");
    chev.on("click", function (event) {
      event.stopPropagation();
      collapsed[d.id] = !collapsed[d.id];
      refresh(true);
    });
  });

  // ---- Detail panel ----
  var detailBody = document.getElementById("tree-detail-body");
  var detailClose = document.getElementById("tree-detail-close");
  function confBadge(c) { return '<span class="conf conf-' + c + '">' + c.replace(/_/g, " ") + "</span>"; }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function detailPlaceholder() {
    if (!detailBody) return;
    detailBody.innerHTML = "<h3>Person details</h3>" +
      '<p style="color:var(--color-text-muted); font-size:var(--text-sm);">' +
      "Click any person in the tree to see dates, confidence levels, and sources.</p>";
  }
  function showDetail(d) {
    if (!detailBody) return;
    var rels = DATA.links.filter(function (e) { return e.source === d.id || e.target === d.id; });
    var relHtml = rels.map(function (e) {
      var other = e.source === d.id ? nodeById[e.target] : nodeById[e.source];
      var dir = e.source === d.id ? "\u2192" : "\u2190";
      return '<li>' + dir + " <strong>" + esc(other.label) + "</strong><br><span class=\"src\">" +
        esc(e.relationship.replace(/_/g, " ")) + (e.date ? " \u00b7 " + esc(e.date) : "") + " " +
        confBadge(e.confidence) + "</span></li>";
    }).join("");
    detailBody.innerHTML =
      '<h3>' + esc(d.label) + "</h3>" +
      '<p class="detail-type">' + esc(GROUP_STYLE[d.group].label) + " " + confBadge(d.confidence) + "</p>" +
      (d.dates ? "<p><strong>" + esc(d.dates) + "</strong></p>" : "") +
      (d.db1_rows && d.db1_rows.length ? '<p class="src">DB1 rows: ' + d.db1_rows.join(", ") + "</p>" : "") +
      (d.db2_leads && d.db2_leads.length ? '<p class="src">DB2 leads: ' + d.db2_leads.join(", ") + "</p>" : "") +
      (d.notes ? "<p>" + esc(d.notes) + "</p>" : "") +
      (relHtml ? '<h4>Relationships</h4><ul class="detail-edges">' + relHtml + "</ul>" : "");
  }
  function highlight(d) {
    nodeSel.select("rect").attr("stroke-width", function (n) { return EMPH_GROUPS[n.group] ? 2.2 : 1.6; });
    d3.select(nodeSel.nodes()[nodes.indexOf(d)]).select("rect").attr("stroke-width", 3.5);
  }
  if (detailClose) detailClose.addEventListener("click", function () {
    detailPlaceholder();
    nodeSel.select("rect").attr("stroke-width", function (n) { return EMPH_GROUPS[n.group] ? 2.2 : 1.6; });
  });

  // ---- Controls ----
  function applyToggles() {
    var showUncertain = document.getElementById("toggle-uncertain").checked;
    var showSafeguards = document.getElementById("toggle-safeguards").checked;
    linkLayer.selectAll("path")
      .style("display", function (d) {
        if (d.tag === "safeguard" && !showSafeguards) return "none";
        if ((d.confidence === "lead" || d.confidence === "unresolved") && !showUncertain) return "none";
        return null;
      });
    nodeLayer.selectAll("g.t-node")
      .style("display", function (d) {
        if (isHidden(d.id)) return "none";
        if (d.group === "ghost" && !showSafeguards) return "none";
        return null;
      });
  }
  ["toggle-uncertain", "toggle-safeguards"].forEach(function (id) {
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
    if (expandAncestors(d.id)) refresh(true);
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

  // ---- Refresh: re-layout + reposition + rejoin links ----
  function refresh(animate) {
    layout();
    var drawLinks = computeDrawLinks();
    var nt = animate === false ? nodeSel : nodeSel.transition().duration(350);
    nodeSel.style("display", function (d) { return isHidden(d.id) ? "none" : null; });
    nt.attr("transform", function (d) { return "translate(" + (d.x - BOX_W / 2) + "," + (d.y - BOX_H / 2) + ")"; });
    nodeSel.select(".chev text").text(function (d) { return collapsed[d.id] ? "\u25b8" : "\u25be"; });
    var paths = linkLayer.selectAll("path").data(drawLinks, function (d) { return d.key; });
    paths.exit().remove();
    var enter = paintLink(paths.enter().append("path"));
    paths = enter.merge(paths);
    if (animate === false) paths.attr("d", function (d) { return d.d; });
    else paths.transition().duration(350).attr("d", function (d) { return d.d; });
    applyToggles();
  }

  // ---- Init: Reuben Jones centered at readable scale; Reset shows full tree ----
  paintBandLabels();
  refresh(false);
  var focus0 = nodeById["reuben-jones"];
  showDetail(focus0); highlight(focus0);
  focusNode(focus0, 1);
})();
