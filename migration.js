/*
  Avalon Project — Migration Path renderer (staged)
  Renders a schematic SVG map (no coordinates needed): Louisa County and
  Bedford County, Virginia → Madison County, Alabama → Tuscaloosa, Alabama.
  Every waypoint carries its source; speculative links are drawn dashed and
  labeled as such. Nothing geographic is claimed.
*/
(function () {
  "use strict";

  var SVG_NS = "http://www.w3.org/2000/svg";

  var WAYPOINTS = [
    {
      id: "louisa",
      x: 150, y: 120,
      name: "Louisa County, Virginia",
      verdict: "verified",
      heading: "Lewellen Jones–Mary Anderson marriage",
      date: "October 22, 1792",
      detail:
        "\"Register of marriages, Louisa County, Virginia, 1766-1861,\" DGS 007578998 (film 32190), image 61 of 527 — signed-in FamilySearch read, 2026-09-23. Bride's father Nelson Anderson (\"consent of Nelson Anderson father\"); surety Alexander Anderson; witnesses Martin Baker, Andrew Thomson.",
      caveat:
        "Handwriting not visually verified — rests on the register's OCR and indexers; the earlier Bedford County attribution is corrected by this record."
    },
    {
      id: "bedford",
      x: 150, y: 300,
      name: "Bedford County, Virginia",
      verdict: "review",
      heading: "Network kinship records under review",
      date: "dates unresolved",
      detail:
        "Jones/Anderson/Donnell kinship records — including the Bedford 019 chancery cases — are queued for the next read batch. No verified waypoint is plotted here yet; this node marks the county as a migration-network area of interest, not a sourced stop.",
      caveat:
        "No waypoint claimed. Links touching Bedford County are speculative until the chancery files are read."
    },
    {
      id: "madison",
      x: 560, y: 150,
      name: "Madison County, Alabama",
      verdict: "verified",
      heading: "Lewellen Jones's federal land patents",
      date: "1818–1820",
      detail:
        "Seven patents issued Nov 20, 1818 (Credit Volume, Harrison Land Act of April 15, 1800), Huntsville Meridian, Madison County — co-patentees Leroy Pope (founder of Huntsville) and David Moore. See the GLO Patent Map for the full plat.",
      caveat: ""
    },
    {
      id: "tuscaloosa",
      x: 560, y: 340,
      name: "Tuscaloosa, Alabama",
      verdict: "verified",
      heading: "Shandy Wesley Jones",
      date: "by 1837",
      detail:
        "Free Black barber, Tuscaloosa County legislator 1868–70. Scholarship treats the Tuscaloosa and Madison County Shandy as one person: born in Madison County, moved to Tuscaloosa by 1837.",
      caveat:
        "Source: Hubbs, \"On the Razor's Edge,\" Alabama Heritage (Fall 2020), via Hoksbergen & DeNeefe. The 1812–1874 / Huntsville-barber dates in earlier briefs are unsupported — scholarship gives 1816–1886, Tuscaloosa barber."
    }
  ];

  var LINKS = [
    { from: "louisa", to: "madison", style: "solid", label: "Virginia → Alabama settlement" },
    { from: "bedford", to: "madison", style: "dashed", label: "kinship records under review — speculative" },
    { from: "madison", to: "tuscaloosa", style: "solid", label: "Shandy's move, by 1837" }
  ];

  function esc(s) {
    var div = document.createElement("div");
    div.textContent = s == null ? "" : String(s);
    return div.innerHTML;
  }

  var VERDICT_COLORS = { verified: "#3f5a41", review: "#96721c" };
  var VERDICT_LABELS = { verified: "VERIFIED", review: "UNDER REVIEW" };

  var host = document.getElementById("migration-diagram");
  if (!host) return;

  function svgEl(tag, attrs) {
    var node = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    return node;
  }

  var W = 760, H = 460;
  var svg = svgEl("svg", {
    viewBox: "0 0 " + W + " " + H,
    width: "100%",
    role: "img",
    "aria-label": "Schematic migration diagram: Louisa and Bedford counties in Virginia to Madison County and Tuscaloosa in Alabama. Schematic only; no geographic positions claimed."
  });

  var banner = svgEl("text", { x: 20, y: 26, "font-size": 14, fill: "var(--color-text-faint)", "font-family": "inherit" });
  banner.textContent = "SCHEMATIC — relative order only. Not a geographic map; no coordinates or distances claimed.";
  svg.appendChild(banner);

  /* Region labels */
  [["VIRGINIA", 150], ["ALABAMA", 560]].forEach(function (r) {
    var t = svgEl("text", { x: r[1], y: 56, "font-size": 15, "font-weight": 700, "text-anchor": "middle", fill: "var(--color-text-muted)", "font-family": "inherit", "letter-spacing": "2" });
    t.textContent = r[0];
    svg.appendChild(t);
  });

  var byId = {};
  WAYPOINTS.forEach(function (w) { byId[w.id] = w; });

  /* Links first, so nodes draw over them. */
  LINKS.forEach(function (l) {
    var a = byId[l.from], b = byId[l.to];
    var line = svgEl("line", {
      x1: a.x, y1: a.y, x2: b.x, y2: b.y,
      stroke: l.style === "solid" ? "#8a3a22" : "#96721c",
      "stroke-width": 2.5,
      "stroke-dasharray": l.style === "solid" ? "none" : "8 5",
      opacity: l.style === "solid" ? 0.8 : 0.7
    });
    svg.appendChild(line);
    var label = svgEl("text", {
      x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 - 8,
      "font-size": 11.5, "text-anchor": "middle",
      fill: "var(--color-text-faint)", "font-family": "inherit"
    });
    label.textContent = l.label;
    svg.appendChild(label);
  });

  WAYPOINTS.forEach(function (w) {
    var color = VERDICT_COLORS[w.verdict];
    var g = svgEl("g", { style: "cursor:pointer;" });
    var circle = svgEl("circle", {
      cx: w.x, cy: w.y, r: 26,
      fill: w.verdict === "verified" ? color : "transparent",
      stroke: color, "stroke-width": w.verdict === "verified" ? 2 : 2.5,
      "stroke-dasharray": w.verdict === "verified" ? "none" : "6 4"
    });
    g.appendChild(circle);
    var name = svgEl("text", { x: w.x, y: w.y - 36, "font-size": 13.5, "font-weight": 700, "text-anchor": "middle", fill: "var(--color-text)", "font-family": "inherit" });
    name.textContent = w.name;
    g.appendChild(name);
    var heading = svgEl("text", { x: w.x, y: w.y + 42, "font-size": 11.5, "text-anchor": "middle", fill: "var(--color-text-muted)", "font-family": "inherit" });
    heading.textContent = w.heading;
    g.appendChild(heading);
    var date = svgEl("text", { x: w.x, y: w.y + 58, "font-size": 11.5, "text-anchor": "middle", fill: color, "font-weight": 600, "font-family": "inherit" });
    date.textContent = w.date;
    g.appendChild(date);
    g.addEventListener("click", function () { openWaypoint(w); });
    svg.appendChild(g);
  });

  host.appendChild(svg);

  /* ---------- Waypoint detail ---------- */
  var panel = document.getElementById("migration-detail");
  function openWaypoint(w) {
    if (!panel) return;
    var color = VERDICT_COLORS[w.verdict];
    var html =
      '<span class="detail-tag" style="display:inline-block; font-size:var(--text-xs); text-transform:uppercase; letter-spacing:0.04em; padding:2px 8px; border-radius:var(--radius-full); background:' + color + '22; color:' + color + '; font-weight:700; margin-bottom:var(--space-3);">Evidence: ' + esc(VERDICT_LABELS[w.verdict]) + "</span>" +
      "<h3 style=\"margin:0 0 var(--space-1); font-size:var(--text-md);\">" + esc(w.name) + " — " + esc(w.heading) + "</h3>" +
      "<p style=\"margin:0 0 var(--space-3); font-size:var(--text-sm); color:var(--color-text-muted); line-height:1.6;\"><strong>" + esc(w.date) + ".</strong> " + esc(w.detail) + "</p>";
    if (w.caveat) {
      html += '<p style="margin:0; font-size:var(--text-xs); color:var(--color-text-faint); line-height:1.5;"><strong>Note:</strong> ' + esc(w.caveat) + "</p>";
    }
    panel.innerHTML = html;
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ---------- Waypoint cards (full source text below the diagram) ---------- */
  var cardsHost = document.getElementById("migration-cards");
  if (cardsHost) {
    cardsHost.innerHTML = WAYPOINTS
      .map(function (w) {
        var color = VERDICT_COLORS[w.verdict];
        return (
          '<article style="border:1px solid var(--color-border); border-radius:var(--radius-lg); padding:var(--space-5); background:var(--color-surface); margin-bottom:var(--space-4);">' +
            '<span class="detail-tag" style="display:inline-block; font-size:var(--text-xs); text-transform:uppercase; letter-spacing:0.04em; padding:2px 8px; border-radius:var(--radius-full); background:' + color + '22; color:' + color + '; font-weight:700; margin-bottom:var(--space-3);">Evidence: ' + esc(VERDICT_LABELS[w.verdict]) + "</span>" +
            "<h3 style=\"margin:0 0 var(--space-1); font-size:var(--text-md);\">" + esc(w.name) + " — " + esc(w.heading) + "</h3>" +
            '<p style="margin:0 0 var(--space-2); font-size:var(--text-sm); font-weight:600; color:' + color + ';">' + esc(w.date) + "</p>" +
            '<p style="margin:0 0 var(--space-2); font-size:var(--text-sm); color:var(--color-text-muted); line-height:1.6;">' + esc(w.detail) + "</p>" +
            (w.caveat
              ? '<p style="margin:0; font-size:var(--text-xs); color:var(--color-text-faint); line-height:1.5;"><strong>Note:</strong> ' + esc(w.caveat) + "</p>"
              : "") +
          "</article>"
        );
      })
      .join("");
  }
})();
