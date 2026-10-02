/*
  Avalon Project — Convict-Leasing Geography renderer (staged)
  Reads window.CONVICT_LEASING_DATA and renders a clearly-labeled
  SCHEMATIC, county-level layout — not a geographic map. No coordinates
  exist for these sites in the research files, and this page claims none.
  Mine-fatality names are LEADS, not proof of convict status.
*/
(function () {
  "use strict";

  var DATA = window.CONVICT_LEASING_DATA;
  if (!DATA) {
    console.warn("Convict-leasing map: CONVICT_LEASING_DATA not found — cannot render.");
    return;
  }

  var SVG_NS = "http://www.w3.org/2000/svg";

  function esc(s) {
    var div = document.createElement("div");
    div.textContent = s == null ? "" : String(s);
    return div.innerHTML;
  }

  function verdictLabel(verdict) {
    if (verdict === "verified") return "VERIFIED — event facts";
    if (verdict === "leads") return "LEADS — mine/company tie real; Madison link unproven";
    return verdict;
  }

  function verdictColor(verdict) {
    return verdict === "verified" ? "#3f5a41" : "#96721c";
  }

  /* ---------- Site cards ---------- */
  function siteCard(site) {
    var color = verdictColor(site.verdict);
    var facts = (site.facts || [])
      .map(function (f) { return "<li>" + esc(f) + "</li>"; })
      .join("");
    return (
      '<article style="border:1px solid var(--color-border); border-radius:var(--radius-lg); padding:var(--space-5); background:var(--color-surface); margin-bottom:var(--space-4);">' +
        "<h3 style=\"margin:0 0 var(--space-1); font-size:var(--text-md);\">" + esc(site.name) + "</h3>" +
        '<p style="margin:0 0 var(--space-2); font-size:var(--text-sm); color:var(--color-text-muted);">' +
          esc(site.company) + "<br />" + esc(site.location) + "</p>" +
        '<span class="detail-tag" style="display:inline-block; font-size:var(--text-xs); text-transform:uppercase; letter-spacing:0.04em; padding:2px 8px; border-radius:var(--radius-full); background:' + color + '22; color:' + color + '; font-weight:700; margin-bottom:var(--space-3);">Evidence: ' + esc(verdictLabel(site.verdict)) + "</span>" +
        '<p style="font-size:var(--text-xs); color:var(--color-text-faint); line-height:1.5; margin:0 0 var(--space-3);">' + esc(site.verdictNote) + "</p>" +
        '<ul style="margin:0 0 var(--space-3); padding-left:1.2em; font-size:var(--text-sm); color:var(--color-text-muted); line-height:1.6;">' + facts + "</ul>" +
        '<p style="margin:0 0 var(--space-2); font-size:var(--text-sm);"><strong>Open question:</strong> ' + esc(site.openQuestion) + "</p>" +
        '<p style="margin:0; font-size:var(--text-xs); color:var(--color-text-faint);">Source: ' + esc(site.citation) + "</p>" +
      "</article>"
    );
  }

  var sitesHost = document.getElementById("cl-sites");
  if (sitesHost) {
    sitesHost.innerHTML = DATA.jeffersonCounty.map(siteCard).join("");
  }

  /* ---------- Context cards ---------- */
  var contextHost = document.getElementById("cl-context");
  if (contextHost) {
    contextHost.innerHTML = DATA.context
      .map(function (c) {
        return (
          '<div class="gaps-list" style="gap:var(--space-1); margin-bottom:var(--space-4);">' +
            "<h4 style=\"margin:0;\">" + esc(c.title) + "</h4>" +
            "<p style=\"margin:4px 0;\">" + esc(c.detail) + "</p>" +
            "<p style=\"margin:4px 0; font-size:var(--text-xs); color:var(--color-text-faint);\">Source: " + esc(c.citation) + "</p>" +
          "</div>"
        );
      })
      .join("");
  }

  /* ---------- Madison County origin panel ---------- */
  var madisonHost = document.getElementById("cl-madison");
  if (madisonHost && DATA.madisonCounty) {
    madisonHost.innerHTML =
      "<h3 style=\"margin:0 0 var(--space-2); font-size:var(--text-md);\">" + esc(DATA.madisonCounty.title) + "</h3>" +
      "<p style=\"margin:0 0 var(--space-3); font-size:var(--text-sm); color:var(--color-text-muted); line-height:1.6;\">" + esc(DATA.madisonCounty.detail) + "</p>" +
      '<p style="margin:0; font-size:var(--text-xs); color:var(--color-text-faint);">Source: ' + esc(DATA.madisonCounty.citation) + "</p>";
  }

  /* ---------- Schematic county diagram ---------- */
  var diagramHost = document.getElementById("cl-diagram");
  if (diagramHost) {
    function svgEl(tag, attrs) {
      var node = document.createElementNS(SVG_NS, tag);
      Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
      return node;
    }

    var W = 760, H = 300;
    var svg = svgEl("svg", {
      viewBox: "0 0 " + W + " " + H,
      width: "100%",
      role: "img",
      "aria-label": "Schematic county-level diagram: Madison County (origin question) and Jefferson County (mine sites). Not to geographic scale; no coordinates claimed."
    });

    var banner = svgEl("text", { x: 20, y: 28, "font-size": 14, fill: "var(--color-text-faint)", "font-family": "inherit" });
    banner.textContent = "SCHEMATIC — county-level layout only. Not to scale. No coordinates claimed.";
    svg.appendChild(banner);

    function countyBox(x, y, w, h, name, label) {
      var g = svgEl("g", {});
      g.appendChild(svgEl("rect", {
        x: x, y: y, width: w, height: h, rx: 10,
        fill: "var(--color-surface)", stroke: "var(--color-border)", "stroke-width": 1.5
      }));
      var t = svgEl("text", { x: x + 14, y: y + 28, "font-size": 16, "font-weight": 700, fill: "var(--color-text)", "font-family": "inherit" });
      t.textContent = name;
      g.appendChild(t);
      var l = svgEl("text", { x: x + 14, y: y + 48, "font-size": 12, fill: "var(--color-text-faint)", "font-family": "inherit" });
      l.textContent = label;
      g.appendChild(l);
      svg.appendChild(g);
      return g;
    }

    var mad = countyBox(20, 48, 250, 210, "Madison County", "origin question — prisoner records");
    var jeff = countyBox(490, 48, 250, 210, "Jefferson County", "mine sites — convict-lease labor");

    /* Dots for the three Jefferson County sites, evenly spaced. */
    var siteDots = ["Banner Mine", "Flat Top", "Pratt Fuel No. 6"];
    siteDots.forEach(function (name, i) {
      var cx = 615, cy = 118 + i * 44;
      var d = svgEl("circle", { cx: cx, cy: cy, r: 7, fill: "#8a3a22" });
      jeff.appendChild(d);
      var t = svgEl("text", { x: cx + 14, y: cy + 4, "font-size": 13, fill: "var(--color-text)", "font-family": "inherit" });
      t.textContent = name;
      jeff.appendChild(t);
    });

    /* Question-mark marker for Madison County. */
    var q = svgEl("text", { x: 145, y: 170, "font-size": 44, "text-anchor": "middle", fill: "var(--color-text-faint)", "font-family": "inherit" });
    q.textContent = "?";
    mad.appendChild(q);
    var qt = svgEl("text", { x: 145, y: 200, "font-size": 12, "text-anchor": "middle", fill: "var(--color-text-faint)", "font-family": "inherit" });
    qt.textContent = "county-of-conviction records pending";
    mad.appendChild(qt);

    /* Dashed arrow between the counties, labeled as the research question. */
    var arrow = svgEl("line", {
      x1: 270, y1: 153, x2: 470, y2: 153,
      stroke: "var(--color-text-faint)", "stroke-width": 2, "stroke-dasharray": "8 5"
    });
    svg.appendChild(arrow);
    var arrowLabel = svgEl("text", { x: 370, y: 140, "font-size": 12, "text-anchor": "middle", fill: "var(--color-text-faint)", "font-family": "inherit" });
    arrowLabel.textContent = "were Madison prisoners leased here? — unproven";
    svg.appendChild(arrowLabel);

    diagramHost.appendChild(svg);
  }
})();
