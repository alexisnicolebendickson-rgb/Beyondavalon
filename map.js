/*
  Avalon Project — Plantations Map renderer
  Reads window.PLANTATIONS_DATA (see plantations-data.js) and draws a MapLibre GL
  map with tier + county filtering and a click-through detail panel.
  Basemap: MapLibre demo styles are not reliable for long-term hosting, and
  CARTO's free basemap tiles now require an API key, so this uses the
  standard OpenStreetMap raster tile server (no key required) via a plain
  raster source/style. © OpenStreetMap contributors.
*/
(function () {
  "use strict";

  var DATA = window.PLANTATIONS_DATA;
  if (!DATA || !Array.isArray(DATA.sites)) {
    console.warn("Avalon map: PLANTATIONS_DATA not found — map cannot render.");
    return;
  }

  var mapEl = document.getElementById("map");
  if (!mapEl || typeof maplibregl === "undefined") return;

  var TIER_COLORS = { 1: "#8a3a22", 2: "#c99a3e", 3: "#3f5a41" };
  var CONNECTION_COLORS = {
    kinship: "#8a3a22",
    business: "#4a6fa5",
    "slave-trade": "#7a1f1f",
    "convict-leasing": "#555555"
  };
  var CONNECTION_LABELS = {
    kinship: "Family / ownership network",
    business: "Business / mercantile network",
    "slave-trade": "Documented sale or transfer of enslaved people",
    "convict-leasing": "Convict-leasing labor network"
  };

  var activeTiers = { 1: true, 2: true, 3: true };
  var activeCounty = "";
  var markers = [];
  var showConnections = true;

  var map = new maplibregl.Map({
    container: "map",
    style: {
      version: 8,
      sources: {
        "osm-standard": {
          type: "raster",
          tiles: [
            "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          ],
          tileSize: 256,
          maxzoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        }
      },
      layers: [{ id: "osm-standard-layer", type: "raster", source: "osm-standard" }]
    },
    center: [-86.75, 34.55],
    zoom: 7.3,
    attributionControl: true
  });

  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

  /* ---------- Populate county filter ---------- */
  var countyFilter = document.getElementById("county-filter");
  if (countyFilter) {
    var counties = Array.from(new Set(DATA.sites.map(function (s) { return s.county; })))
      .filter(Boolean)
      .sort();
    counties.forEach(function (c) {
      var opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c + " County";
      countyFilter.appendChild(opt);
    });
    countyFilter.addEventListener("change", function () {
      activeCounty = countyFilter.value;
      applyFilters();
    });
  }

  /* ---------- Tier toggles ---------- */
  document.querySelectorAll(".tier-toggle input[data-tier]").forEach(function (input) {
    input.addEventListener("change", function () {
      activeTiers[input.getAttribute("data-tier")] = input.checked;
      applyFilters();
    });
  });

  /* ---------- Detail panel ---------- */
  var detailPanel = document.getElementById("detail-panel");
  var detailContent = document.getElementById("detail-content");
  var detailClose = document.getElementById("detail-close");

  function openDetail(site) {
    if (!detailPanel || !detailContent) return;
    var tierLabel = site.tier === 1
      ? "Tier 1 — Avalon / Jones research line"
      : site.tier === 2
      ? "Tier 2 — Caution: namesake only"
      : "Tier 3 — General context";

    var html = "";
    html += '<h4>' + escapeHtml(site.name) + '</h4>';
    html += '<span class="detail-tag tier-' + site.tier + '">' + escapeHtml(tierLabel) + '</span>';
    html += '<p>' + escapeHtml(site.summary || "") + '</p>';
    if (site.confirmedEnslaved) {
      html += '<p><strong>Confirmed enslaved population:</strong> ' + escapeHtml(site.confirmedEnslaved) + '</p>';
    }
    if (site.laborSystemNote) {
      html += '<p><strong>Labor-system context:</strong> ' + escapeHtml(site.laborSystemNote) + '</p>';
    }
    var siteConnections = (DATA.connections || []).filter(function (c) {
      return c.from === site.id || c.to === site.id;
    });
    if (siteConnections.length) {
      html += '<p><strong>Network connections:</strong></p>';
      html += '<ul style="margin:0 0 var(--space-3); padding-left:1.1em;">';
      siteConnections.forEach(function (c) {
        var otherId = c.from === site.id ? c.to : c.from;
        var other = DATA.sites.filter(function (s) { return s.id === otherId; })[0];
        var otherName = other ? other.name : otherId;
        html += '<li style="margin-bottom:4px;"><strong>' + escapeHtml(CONNECTION_LABELS[c.type] || c.type) + '</strong> with ' + escapeHtml(otherName) + ' — ' + escapeHtml(c.detail || "") + '</li>';
      });
      html += '</ul>';
    }
    html += '<div class="detail-meta">';
    html += (site.county ? escapeHtml(site.county) + " County · " : "");
    html += (site.precise ? "Precise location" : "Approximate location");
    html += '</div>';
    if (site.citation) {
      html += '<div class="detail-meta" style="margin-top:6px;">Source: ' + escapeHtml(site.citation) + '</div>';
    }
    detailContent.innerHTML = html;
    detailPanel.hidden = false;
  }

  if (detailClose) {
    detailClose.addEventListener("click", function () {
      detailPanel.hidden = true;
    });
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = String(str);
    return div.innerHTML;
  }

  /* ---------- Markers ---------- */
  function buildMarkers() {
    DATA.sites.forEach(function (site) {
      if (typeof site.lat !== "number" || typeof site.lng !== "number") return;

      var el = document.createElement("div");
      el.className = "map-marker tier-" + site.tier + (site.precise ? "" : " approx");
      el.style.width = "16px";
      el.style.height = "16px";
      el.style.borderRadius = "50%";
      el.style.cursor = "pointer";
      el.style.boxSizing = "border-box";
      if (site.precise) {
        el.style.background = TIER_COLORS[site.tier] || "#8a3a22";
        el.style.border = "2px solid #faf6ee";
        el.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.25)";
      } else {
        el.style.background = "transparent";
        el.style.border = "2px dashed " + (TIER_COLORS[site.tier] || "#8a3a22");
      }
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-label", site.name);
      el.addEventListener("click", function () { openDetail(site); });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDetail(site); }
      });

      var marker = new maplibregl.Marker({ element: el })
        .setLngLat([site.lng, site.lat])
        .addTo(map);

      markers.push({ marker: marker, el: el, site: site });
    });
  }

  function applyFilters() {
    markers.forEach(function (m) {
      var tierOk = activeTiers[String(m.site.tier)];
      var countyOk = !activeCounty || m.site.county === activeCounty;
      var visible = tierOk && countyOk;
      m.el.style.display = visible ? "" : "none";
    });
  }

  /* ---------- Network connection lines ---------- */
  function buildConnections() {
    var connections = DATA.connections;
    if (!Array.isArray(connections) || !connections.length) return;

    var sitesById = {};
    DATA.sites.forEach(function (s) { sitesById[s.id] = s; });

    var features = [];
    connections.forEach(function (c) {
      var a = sitesById[c.from];
      var b = sitesById[c.to];
      if (!a || !b) return;
      if (typeof a.lat !== "number" || typeof b.lat !== "number") return;
      features.push({
        type: "Feature",
        properties: { type: c.type || "kinship" },
        geometry: { type: "LineString", coordinates: [[a.lng, a.lat], [b.lng, b.lat]] }
      });
    });
    if (!features.length) return;

    map.addSource("avalon-connections", {
      type: "geojson",
      data: { type: "FeatureCollection", features: features }
    });

    var colorMatch = ["match", ["get", "type"]];
    Object.keys(CONNECTION_COLORS).forEach(function (t) {
      colorMatch.push(t, CONNECTION_COLORS[t]);
    });
    colorMatch.push("#8a3a22");

    map.addLayer({
      id: "avalon-connections-layer",
      type: "line",
      source: "avalon-connections",
      paint: {
        "line-color": colorMatch,
        "line-width": 2,
        "line-dasharray": [2, 1.5],
        "line-opacity": 0.75
      }
    });
  }

  var connectionsToggle = document.getElementById("connections-toggle");
  if (connectionsToggle) {
    connectionsToggle.addEventListener("change", function () {
      showConnections = connectionsToggle.checked;
      if (map.getLayer("avalon-connections-layer")) {
        map.setLayoutProperty("avalon-connections-layer", "visibility", showConnections ? "visible" : "none");
      }
    });
  }

  map.on("load", function () {
    buildMarkers();
    buildConnections();
    applyFilters();
  });
})();
