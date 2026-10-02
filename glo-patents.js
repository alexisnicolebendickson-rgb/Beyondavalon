/*
  Avalon Project — GLO Patent Map renderer (staged)
  Reads window.GLO_PATENTS_DATA and draws schematic PLSS township plats:
  6x6 section grids (standard PLSS numbering, north at top). Shaded
  quarter-sections mark patented aliquots; click or hover a shaded cell for
  patent detail (accession, date, authority). This is a schematic of the
  survey grid, not a geographic map — no coordinates are claimed.
*/
(function () {
  "use strict";

  var DATA = window.GLO_PATENTS_DATA;
  if (!DATA || !Array.isArray(DATA.patents)) {
    console.warn("GLO patent map: GLO_PATENTS_DATA not found — map cannot render.");
    return;
  }

  /* Standard PLSS township section numbering, north at top. */
  var SECTION_ROWS = [
    [6, 5, 4, 3, 2, 1],
    [7, 8, 9, 10, 11, 12],
    [18, 17, 16, 15, 14, 13],
    [19, 20, 21, 22, 23, 24],
    [30, 29, 28, 27, 26, 25],
    [31, 32, 33, 34, 35, 36]
  ];

  var CELL = 64;
  var GAP = 5;

  var groupsById = {};
  DATA.groups.forEach(function (g) { groupsById[g.id] = g; });

  /* Quarter-position within a cell, in quarter-cell units. */
  function aliquotRect(aliquot, x, y) {
    var h = CELL / 2;
    switch (aliquot) {
      case "NW": return { x: x, y: y, w: h, h: h };
      case "NE": return { x: x + h, y: y, w: h, h: h };
      case "SW": return { x: x, y: y + h, w: h, h: h };
      case "SE": return { x: x + h, y: y + h, w: h, h: h };
      case "E½NW": return { x: x + CELL / 4, y: y, w: CELL / 4, h: h };
      default: return { x: x, y: y, w: CELL, h: CELL };
    }
  }

  var SVG_NS = "http://www.w3.org/2000/svg";

  function el(tag, attrs, parent) {
    var node = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(function (k) {
      node.setAttribute(k, attrs[k]);
    });
    if (parent) parent.appendChild(node);
    return node;
  }

  function esc(s) {
    var div = document.createElement("div");
    div.textContent = s == null ? "" : String(s);
    return div.innerHTML;
  }

  /* ---------- Detail panel ---------- */
  var detailPanel = document.getElementById("glo-detail-panel");
  var detailContent = document.getElementById("glo-detail-content");
  var detailClose = document.getElementById("glo-detail-close");

  function openDetail(patent) {
    if (!detailPanel || !detailContent) return;
    var group = groupsById[patent.group] || {};
    var html = "";
    html += "<h4>Accession " + esc(patent.accession) + "</h4>";
    html += '<span class="detail-tag" style="background:' + esc(group.color || "#8a3a22") + '22; color:' + esc(group.color || "#8a3a22") + ';">' + esc(group.label || "") + "</span>";
    html += "<p><strong>Patentees:</strong> " + esc(patent.patentees.join(" + ")) + (patent.patenteeNote ? " (" + esc(patent.patenteeNote) + ")" : "") + "</p>";
    html += "<p><strong>Date:</strong> " + esc(patent.date) + "<br /><strong>Location:</strong> Sec. " + esc(String(patent.section)) + " " + esc(patent.aliquot) + ", T" + esc(patent.township.slice(1, 2)) + "S R" + esc(patent.township.slice(5)) + " — Huntsville Meridian, Madison County, AL<br /><strong>Authority:</strong> " + esc(patent.authority) + "</p>";
    if (patent.acres) {
      html += "<p><strong>Acreage:</strong> " + esc(patent.acres) + " acres</p>";
    }
    if (patent.note) {
      html += "<p>" + esc(patent.note) + "</p>";
    }
    html += '<div class="detail-meta">Source: BLM GLO records, Huntsville Meridian (verified 2026-10-02). ' + esc(DATA.sourceNote) + "</div>";
    detailContent.innerHTML = html;
    detailPanel.hidden = false;
  }

  if (detailClose) {
    detailClose.addEventListener("click", function () {
      detailPanel.hidden = true;
    });
  }

  /* ---------- Township plat rendering ---------- */
  var platsHost = document.getElementById("glo-plats");
  if (!platsHost) return;

  DATA.townships.forEach(function (tw) {
    var figure = document.createElement("figure");
    figure.className = "glo-plat";
    figure.style.cssText =
      "background:var(--color-surface); border:1px solid var(--color-border); border-radius:var(--radius-lg); padding:var(--space-5); margin:0;";

    var caption = document.createElement("figcaption");
    caption.innerHTML =
      '<h3 style="margin:0 0 var(--space-1); font-size:var(--text-md);">' + esc(tw.title) + "</h3>" +
      '<p style="margin:0 0 var(--space-1); font-size:var(--text-sm); color:var(--color-text-muted);">' + esc(tw.subtitle) + "</p>" +
      '<p style="margin:0 0 var(--space-4); font-size:var(--text-xs); color:var(--color-text-faint); line-height:1.5;">' + esc(tw.note) + "</p>";
    figure.appendChild(caption);

    var gridW = 6 * CELL + 5 * GAP;
    var gridH = 6 * CELL + 5 * GAP;
    var svg = el("svg", {
      viewBox: "0 0 " + gridW + " " + gridH,
      width: "100%",
      "aria-label": "Schematic section plat for " + tw.title + " (not to geographic scale)"
    }, figure);
    svg.style.maxWidth = (gridW + 20) + "px";

    var twPatents = DATA.patents.filter(function (p) { return p.township === tw.id; });
    var bySection = {};
    twPatents.forEach(function (p) {
      (bySection[p.section] = bySection[p.section] || []).push(p);
    });

    SECTION_ROWS.forEach(function (row, r) {
      row.forEach(function (sec, c) {
        var x = c * (CELL + GAP);
        var y = r * (CELL + GAP);

        var cellRect = el("rect", {
          x: x, y: y, width: CELL, height: CELL, rx: 4,
          fill: "var(--color-surface-2)",
          stroke: "var(--color-border)",
          "stroke-width": 1
        }, svg);

        var label = el("text", {
          x: x + 5, y: y + 15,
          "font-size": 12,
          fill: "var(--color-text-faint)",
          "font-family": "inherit"
        }, svg);
        label.textContent = sec;

        (bySection[sec] || []).forEach(function (patent) {
          var group = groupsById[patent.group] || {};
          var q = aliquotRect(patent.aliquot, x, y);
          var shade = el("rect", {
            x: q.x + 1.5, y: q.y + 1.5, width: q.w - 3, height: q.h - 3, rx: 3,
            fill: group.color || "#8a3a22",
            "fill-opacity": 0.82,
            stroke: "#faf6ee",
            "stroke-width": 1,
            style: "cursor:pointer;"
          }, svg);
          shade.setAttribute("tabindex", "0");
          shade.setAttribute("role", "button");
          shade.setAttribute("aria-label",
            "Accession " + patent.accession + ", " + patent.patentees.join(" and ") +
            ", Section " + patent.section + " " + patent.aliquot);
          shade.addEventListener("click", function () { openDetail(patent); });
          shade.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDetail(patent); }
          });
          shade.addEventListener("mouseover", function () { shade.setAttribute("stroke-width", 2.5); });
          shade.addEventListener("mouseout", function () { shade.setAttribute("stroke-width", 1); });

          var t = el("text", {
            x: q.x + q.w / 2, y: q.y + q.h / 2 + 4,
            "text-anchor": "middle",
            "font-size": patent.aliquot === "E½NW" ? 9 : 10.5,
            "font-weight": 600,
            fill: "#faf6ee",
            "pointer-events": "none",
            "font-family": "inherit"
          }, svg);
          t.textContent = (group.shortLabel || (group.label || "").split("(")[0]).trim();
        });
      });
    });

    platsHost.appendChild(figure);
  });

  /* ---------- Legend ---------- */
  var legendHost = document.getElementById("glo-legend");
  if (legendHost) {
    DATA.groups.forEach(function (g) {
      var item = document.createElement("div");
      item.className = "tier-toggle";
      item.innerHTML =
        '<span class="tier-swatch" style="background:' + esc(g.color) + ';"></span>' +
        '<span>' + esc(g.label) + " — " + esc(g.note) + "</span>";
      legendHost.appendChild(item);
    });
  }

  /* ---------- Full patent table ---------- */
  var tableHost = document.getElementById("glo-patent-table");
  if (tableHost) {
    var html = '<table style="width:100%; border-collapse:collapse; font-size:var(--text-sm);">';
    html += "<thead><tr>" +
      ["Accession", "Date", "Patentees", "Section / township", "Authority"].map(function (h) {
        return '<th style="text-align:left; padding:var(--space-2) var(--space-3); border-bottom:2px solid var(--color-border);">' + h + "</th>";
      }).join("") + "</tr></thead><tbody>";
    DATA.patents.forEach(function (p) {
      html += "<tr>" +
        "<td style=\"padding:var(--space-2) var(--space-3); border-bottom:1px solid var(--color-border); font-weight:600;\">" + esc(p.accession) + "</td>" +
        "<td style=\"padding:var(--space-2) var(--space-3); border-bottom:1px solid var(--color-border);\">" + esc(p.date) + "</td>" +
        "<td style=\"padding:var(--space-2) var(--space-3); border-bottom:1px solid var(--color-border);\">" + esc(p.patentees.join(" + ")) + "</td>" +
        "<td style=\"padding:var(--space-2) var(--space-3); border-bottom:1px solid var(--color-border);\">Sec. " + esc(String(p.section)) + " " + esc(p.aliquot) + ", T" + esc(p.township.slice(1, 2)) + "S R" + esc(p.township.slice(5)) + "</td>" +
        "<td style=\"padding:var(--space-2) var(--space-3); border-bottom:1px solid var(--color-border);\">" + esc(p.authority) + "</td>" +
        "</tr>";
    });
    html += "</tbody></table>";
    tableHost.innerHTML = html;
  }
})();
