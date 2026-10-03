/*
  Beyond Avalon — Jones core family tree renderer (v2).
  Left-to-right generational layout: earliest generation at left, descendants
  flow right. Manual slot layout, pan/zoom, click-to-inspect detail panel,
  collapsible branches, confidence-styled links (same vocabulary as the FAN
  graph), search, and toggles for uncertain links and the manumitted-
  individuals cluster.

  DATA (window.FAMILY_TREE_DATA) is read-only here — presentation only.
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

  // ---- Style vocabularies (same as FAN graph; unchanged) ----
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
    // The Bedford ghost follows the Madison Lewellen.
    if (hiddenSet["lewellen-jones"]) hiddenSet["lewellen-bedford-ghost"] = true;
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

  // ---- Manual left-to-right slot layout ----
  // Generations are columns (left = earliest); units stack vertically.
  // A unit is one person or a married couple.
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
  var MARGIN_X = 40, MARGIN_TOP = 48;
  var COL_W = 250, ROW_H = 124, BOX_W = 210, BOX_H = 64;
  // Vertical routing channels in the gaps between generation columns.
  var boxL = function (g) { return MARGIN_X + g * COL_W + (COL_W - BOX_W) / 2; };
  var boxR = function (g) { return boxL(g) + BOX_W; };
  var CH_JNS   = (boxR(2) + boxL(3)) / 2;          // 790 — John N.S. manumission links
  var CH_APJ   = (boxR(3) + boxL(4)) / 2;          // 1040 — Alexander P. manumission links
  var CH_GAP01 = (boxR(0) + boxL(1)) / 2;          // 290 — left-side channel
  var CH_GHOST = CH_GAP01 - 8;                     // ghost safeguard route
  var CH_LWZ   = CH_GAP01 + 8;                     // Lewellen→Elizabeth hypothesis route
  var CLUSTER_IDS = ["elizabeth-enslaved", "evelina-enslaved", "ann-enslaved", "shandy-wesley-jones"];
  var GHOST_ID = "lewellen-bedford-ghost";

  var treeW = 0, treeH = 0;
  function layout() {
    computeHidden();
    var gi, ui, k, id, unit;
    for (gi = 0; gi < 4; gi++) {
      var cursor = MARGIN_TOP;
      for (ui = 0; ui < GEN[gi].length; ui++) {
        unit = GEN[gi][ui];
        for (k = 0; k < unit.length; k++) {
          id = unit[k];
          if (!nodeById[id]) { console.warn("Family tree: unknown node id " + id); continue; }
          if (isHidden(id)) continue;
          nodeById[id].x = MARGIN_X + gi * COL_W + COL_W / 2;
          nodeById[id].y = cursor + ROW_H / 2;
          nodeById[id].gen = gi;
          cursor += ROW_H;
        }
      }
    }
    // Generation 4 (Donnell children): top-aligned column.
    var cursor4 = MARGIN_TOP;
    for (ui = 0; ui < GEN[4].length; ui++) {
      unit = GEN[4][ui];
      for (k = 0; k < unit.length; k++) {
        id = unit[k];
        if (!nodeById[id] || isHidden(id)) continue;
        nodeById[id].x = MARGIN_X + 4 * COL_W + COL_W / 2;
        nodeById[id].y = cursor4 + ROW_H / 2;
        nodeById[id].gen = 4;
        cursor4 += ROW_H;
      }
    }
    // Ghost node: directly below the Lewellen couple; connector routed via the
    // left channel so it never crosses Mary's box.
    var lew = nodeById["lewellen-jones"], mary = nodeById["mary-anderson-jones"],
        gh = nodeById[GHOST_ID];
    var refY = isHidden(mary.id) ? lew.y : mary.y;
    gh.x = lew.x;
    gh.y = refY + ROW_H;
    gh.gen = 1; gh.cluster = true;
    // Manumitted cluster: horizontal row below everything, centered on gen-2.
    var maxY = MARGIN_TOP;
    nodes.forEach(function (n) {
      if (isHidden(n.id) || n.id === GHOST_ID || CLUSTER_IDS.indexOf(n.id) !== -1) return;
      if (typeof n.y === "number" && n.y > maxY) maxY = n.y;
    });
    if (!isHidden(GHOST_ID) && gh.y > maxY) maxY = gh.y;
    var cy = maxY + 150;
    var gap = 28, totalW = CLUSTER_IDS.length * BOX_W + (CLUSTER_IDS.length - 1) * gap;
    var startX = (MARGIN_X + 2 * COL_W + COL_W / 2) - totalW / 2;
    CLUSTER_IDS.forEach(function (cid, i) {
      var n = nodeById[cid];
      n.x = startX + i * (BOX_W + gap) + BOX_W / 2;
      n.y = cy; n.cluster = true; n.gen = "cluster";
    });
    treeW = MARGIN_X * 2 + 5 * COL_W;
    treeH = cy + BOX_H / 2 + 90;
  }

  // ---- Orthogonal link paths ----
  function elbowH(x1, y1, x2, y2) {           // horizontal-first (parent → child)
    if (Math.abs(y1 - y2) < 1) return "M" + x1 + "," + y1 + "H" + x2;
    if (Math.abs(x1 - x2) < 1) return "M" + x1 + "," + y1 + "V" + y2;
    var mx = (x1 + x2) / 2;
    return "M" + x1 + "," + y1 + "H" + mx + "V" + y2 + "H" + x2;
  }
  function chanRoute(x1, y1, x2, y2, ch) {    // via a vertical routing channel
    var my = y2 - 56;
    return "M" + x1 + "," + y1 + "H" + ch + "V" + my + "H" + x2 + "V" + y2;
  }
  function bow(x1, y1, x2, y2, lift) {        // short arc between neighbors
    var mx = (x1 + x2) / 2;
    return "M" + x1 + "," + y1 + "Q" + mx + "," + (Math.min(y1, y2) - (lift || 26)) + " " + x2 + "," + y2;
  }
  function linkKey(e) { return e.source + "|" + e.target + "|" + e.relationship; }

  function computeDrawLinks() {
    var out = [];
    // parent_of: merge two-parent couples into one elbow.
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
      } else if (e.relationship === "manumitted_by") {
        var ch = (s.id === "john-n-s-jones") ? CH_JNS : CH_APJ;
        out.push({ key: linkKey(e), kind: "chan",
          d: chanRoute(s.x, s.y + BOX_H / 2, t.x, t.y - BOX_H / 2, ch),
          confidence: e.confidence, tag: "manumitted", data: e });
      } else if (e.relationship === "associated_with") {
        var dd = (t.cluster && s.cluster)
          ? bow(s.x + BOX_W / 2, s.y, t.x - BOX_W / 2, t.y, 30)
          : chanRoute(s.x, s.y + BOX_H / 2, t.x, t.y - BOX_H / 2, CH_LWZ);
        out.push({ key: linkKey(e), kind: "chan",
          d: dd, confidence: e.confidence, tag: "uncertain", data: e });
      } else if (e.relationship === "not_the_same_person") {
        var lew = nodeById["lewellen-jones"], gh = nodeById[GHOST_ID];
        out.push({ key: linkKey(e), kind: "chan",
          d: "M" + (lew.x - BOX_W / 2) + "," + lew.y + "H" + CH_GHOST +
             "V" + gh.y + "H" + (gh.x - BOX_W / 2),
          confidence: e.confidence, tag: "safeguard", data: e });
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
      return nodeById[e.source].label + " —" + e.relationship.replace(/_/g, " ") + "→ " +
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
    // Collapse chevron: toggles this person's descendant branch.
    var hasKids = childrenOf[d.id] && childrenOf[d.id].length > 0;
    var chev = s.append("g").attr("class", "chev")
      .attr("transform", "translate(" + (BOX_W + 2) + "," + (BOX_H / 2) + ")")
      .style("display", hasKids ? null : "none")
      .attr("pointer-events", "all");
    chev.append("circle").attr("r", 11)
      .attr("fill", "#fffdf8").attr("stroke", "#8A3A22").attr("stroke-width", 1.5);
    chev.append("text").attr("text-anchor", "middle").attr("dy", "0.35em")
      .attr("font-size", "13px").attr("font-weight", "700").attr("fill", "#8A3A22")
      .text("▾");
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
      var dir = e.source === d.id ? "→" : "←";
      return '<li>' + dir + " <strong>" + esc(other.label) + "</strong><br><span class=\"src\">" +
        esc(e.relationship.replace(/_/g, " ")) + (e.date ? " · " + esc(e.date) : "") + " " +
        confBadge(e.confidence) + "</span></li>";
    }).join("");
    detailBody.innerHTML =
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
  if (detailClose) detailClose.addEventListener("click", function () {
    detailPlaceholder();
    nodeSel.select("rect").attr("stroke-width", function (n) { return n.group === "jones" ? 2.2 : 1.6; });
  });

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
    nodeLayer.selectAll("g.t-node")
      .style("display", function (d) {
        if (isHidden(d.id)) return "none";
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
    nodeSel.select(".chev text").text(function (d) { return collapsed[d.id] ? "▸" : "▾"; });
    var paths = linkLayer.selectAll("path").data(drawLinks, function (d) { return d.key; });
    paths.exit().remove();
    var enter = paintLink(paths.enter().append("path"));
    paths = enter.merge(paths);
    if (animate === false) paths.attr("d", function (d) { return d.d; });
    else paths.transition().duration(350).attr("d", function (d) { return d.d; });
    applyToggles();
  }

  // ---- Init: Lewellen centered at readable scale; Reset shows the full tree ----
  refresh(false);
  var lew0 = nodeById["lewellen-jones"];
  showDetail(lew0); highlight(lew0);
  focusNode(lew0, 1);
})();
