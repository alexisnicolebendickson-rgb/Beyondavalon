/*
  Avalon Project — UAH Campus Structures Map renderer
  Reads window.UAH_CAMPUS_DATA (see uah-campus-data.js) and draws a MapLibre GL
  map of the UAH campus at close zoom, showing approximate structure locations
  and a separate oral-history/local-legend list (unmapped items have no
  coordinates and are listed in a sidebar panel instead of a pin).
  Uses the same MapLibre GL + OpenStreetMap raster basemap approach as map.js
  for consistency across the site.
*/
(function () {
  "use strict";

  var DATA = window.UAH_CAMPUS_DATA;
  if (!DATA || !Array.isArray(DATA.features)) {
    console.warn("Avalon UAH campus map: UAH_CAMPUS_DATA not found — map cannot render.");
    return;
  }

  var mapEl = document.getElementById("campus-map");
  if (!mapEl || typeof maplibregl === "undefined") return;

  var CATEGORY_COLORS = {
    house: "#8a3a22",
    "slave-quarters": "#7a1f1f",
    stable: "#c99a3e",
    outbuilding: "#c99a3e",
    cemetery: "#3f5a41",
    "survey-area": "#4a6fa5"
  };
  var CATEGORY_LABELS = {
    house: "House / dwelling",
    "slave-quarters": "Enslaved persons' quarters",
    stable: "Stable",
    outbuilding: "Outbuilding",
    cemetery: "Cemetery / burial ground",
    "survey-area": "Archaeological survey area"
  };

  var markers = [];

  var map = new maplibregl.Map({
    container: "campus-map",
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
    zoom: 15,
    attributionControl: true
  });

  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

  var detailPanel = document.getElementById("campus-detail-panel");
  var detailContent = document.getElementById("campus-detail-content");
  var detailClose = document.getElementById("campus-detail-close");

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function openDetail(feature) {
    if (!detailPanel || !detailContent) return;
    var html = "";
    html += "<h4>" + escapeHtml(feature.name) + "</h4>";
    html += '<span class="detail-tag" style="background:' + (CATEGORY_COLORS[feature.category] || "#8a3a22") + '22; color:' + (CATEGORY_COLORS[feature.category] || "#8a3a22") + ';">' + escapeHtml(CATEGORY_LABELS[feature.category] || feature.category) + "</span>";
    html += "<p>" + escapeHtml(feature.summary || "") + "</p>";
    html += '<div class="detail-meta">' + (feature.precise ? "Precise location" : "Approximate location — see summary for basis") + "</div>";
    if (feature.citation) {
      html += '<div class="detail-meta" style="margin-top:6px;">Source: ' + escapeHtml(feature.citation) + "</div>";
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
    DATA.features.forEach(function (f) {
      if (typeof f.lat !== "number" || typeof f.lng !== "number") return;

      var el = document.createElement("div");
      el.className = "map-marker approx";
      el.style.width = "16px";
      el.style.height = "16px";
      el.style.borderRadius = "50%";
      el.style.cursor = "pointer";
      el.style.boxSizing = "border-box";
      var color = CATEGORY_COLORS[f.category] || "#8a3a22";
      if (f.precise) {
        el.style.background = color;
        el.style.border = "2px solid #faf6ee";
        el.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.25)";
      } else {
        el.style.background = "transparent";
        el.style.border = "2px dashed " + color;
      }
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-label", f.name);
      el.addEventListener("click", function () { openDetail(f); });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDetail(f); }
      });

      var marker = new maplibregl.Marker({ element: el })
        .setLngLat([f.lng, f.lat])
        .addTo(map);

      markers.push({ marker: marker, el: el, feature: f });
    });
  }

  /* ---------- Oral history sidebar list (unmapped items) ---------- */
  function buildOralHistoryList() {
    var container = document.getElementById("oral-history-list");
    if (!container) return;
    var items = DATA.oralHistories || [];
    if (!items.length) {
      container.innerHTML = "<p>No oral histories logged yet.</p>";
      return;
    }
    container.innerHTML = items
      .map(function (item) {
        return (
          '<div class="gaps-list" style="gap:var(--space-2); margin-bottom:var(--space-4);">' +
            "<h4 style=\"margin:0;\">" + escapeHtml(item.name) + "</h4>" +
            "<p style=\"margin:4px 0;\">" + escapeHtml(item.summary) + "</p>" +
            "<p style=\"margin:4px 0; font-size:var(--text-sm); color:var(--color-text-muted);\"><strong>Status:</strong> " + escapeHtml(item.status) + "</p>" +
            "<p style=\"margin:4px 0; font-size:var(--text-xs); color:var(--color-text-faint);\">Source: " + escapeHtml(item.citation) + "</p>" +
          "</div>"
        );
      })
      .join("");
  }

  map.on("load", function () {
    buildMarkers();
  });
  buildOralHistoryList();
})();
