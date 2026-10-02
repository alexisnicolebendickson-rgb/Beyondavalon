/*
  Avalon Project — Cemetery Map renderer (staged)
  Reads window.CEMETERIES_DATA and draws a MapLibre GL map (same OSM raster
  approach as the other site maps) for points with verified coordinates
  only. Unverified locations are listed in the page panel, never pinned —
  this project does not fabricate coordinates for burial grounds.
*/
(function () {
  "use strict";

  var DATA = window.CEMETERIES_DATA;
  if (!DATA || !Array.isArray(DATA.sites)) {
    console.warn("Avalon cemetery map: CEMETERIES_DATA not found — map cannot render.");
    return;
  }

  var mapEl = document.getElementById("cemetery-map");
  if (!mapEl || typeof maplibregl === "undefined") return;

  var VERDICT_COLORS = { verified: "#3f5a41", approximate: "#c99a3e" };
  var VERDICT_LABELS = {
    verified: "Verified location",
    approximate: "Approximate location"
  };

  var map = new maplibregl.Map({
    container: "cemetery-map",
    style: {
      version: 8,
      sources: {
        "osm-standard": {
          type: "raster",
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          maxzoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        }
      },
      layers: [{ id: "osm-standard-layer", type: "raster", source: "osm-standard" }]
    },
    center: [DATA.campusCenter.lng, DATA.campusCenter.lat],
    zoom: 10,
    attributionControl: true
  });

  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

  var detailPanel = document.getElementById("cemetery-detail-panel");
  var detailContent = document.getElementById("cemetery-detail-content");
  var detailClose = document.getElementById("cemetery-detail-close");

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function openDetail(site) {
    if (!detailPanel || !detailContent) return;
    var color = VERDICT_COLORS[site.verdict] || "#8a3a22";
    var html = "";
    html += "<h4>" + escapeHtml(site.name) + "</h4>";
    html += '<span class="detail-tag" style="background:' + color + '22; color:' + color + '; font-weight:700;">' + escapeHtml(VERDICT_LABELS[site.verdict] || site.verdict) + "</span>";
    html += "<p>" + escapeHtml(site.summary || "") + "</p>";
    if (site.verdictNote) {
      html += '<p><strong>Location status:</strong> ' + escapeHtml(site.verdictNote) + "</p>";
    }
    if (site.citation) {
      html += '<div class="detail-meta">Source: ' + escapeHtml(site.citation) + "</div>";
    }
    detailContent.innerHTML = html;
    detailPanel.hidden = false;
  }

  if (detailClose) {
    detailClose.addEventListener("click", function () {
      detailPanel.hidden = true;
    });
  }

  function buildMarkers() {
    DATA.sites.forEach(function (site) {
      if (typeof site.lat !== "number" || typeof site.lng !== "number") return;

      var el = document.createElement("div");
      el.style.width = "18px";
      el.style.height = "18px";
      el.style.borderRadius = "50%";
      el.style.cursor = "pointer";
      el.style.boxSizing = "border-box";
      var color = VERDICT_COLORS[site.verdict] || "#8a3a22";
      if (site.precise) {
        el.style.background = color;
        el.style.border = "2px solid #faf6ee";
        el.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.25)";
      } else {
        el.style.background = "transparent";
        el.style.border = "2px dashed " + color;
      }
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-label", site.name);
      el.addEventListener("click", function () { openDetail(site); });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDetail(site); }
      });

      new maplibregl.Marker({ element: el })
        .setLngLat([site.lng, site.lat])
        .addTo(map);
    });
  }

  /* ---------- Unverified locations panel ---------- */
  function buildUnverifiedList() {
    var container = document.getElementById("unverified-list");
    if (!container) return;
    var items = DATA.unverified || [];
    container.innerHTML = items
      .map(function (item) {
        return (
          '<div class="gaps-list" style="gap:var(--space-2); margin-bottom:var(--space-4);">' +
            "<h4 style=\"margin:0;\">" + escapeHtml(item.name) + "</h4>" +
            "<p style=\"margin:4px 0; font-weight:600; color:#96721c;\">" + escapeHtml(item.status) + "</p>" +
            "<p style=\"margin:4px 0;\">" + escapeHtml(item.summary) + "</p>" +
            "<p style=\"margin:4px 0; font-size:var(--text-xs); color:var(--color-text-faint);\">Source: " + escapeHtml(item.citation) + "</p>" +
          "</div>"
        );
      })
      .join("");
  }

  map.on("load", function () {
    buildMarkers();
  });
  buildUnverifiedList();
})();
