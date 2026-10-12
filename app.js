/*
  The Counter-Archive — shared site behavior
  Handles: mobile menu toggle and the Names
  Registry search/render (when REGISTRY_DATA is present on the page).
*/
(function () {
  "use strict";

  /* ---------- Theme: light only (dark mode removed 2026-10-11) ---------- */

  /* ---------- Mobile menu toggle ---------- */
  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Names Registry ---------- */
  var registryGrid = document.getElementById("registry-grid");
  if (registryGrid && typeof REGISTRY_DATA !== "undefined" && Array.isArray(REGISTRY_DATA)) {
    var searchInput = document.getElementById("registry-search");
    var countEl = document.getElementById("registry-count");

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function renderCard(entry) {
      return (
        '<div class="name-card">' +
        "<h4>" + escapeHtml(entry.name || "Unnamed") + "</h4>" +
        (entry.meta ? '<div class="meta">' + escapeHtml(entry.meta) + "</div>" : "") +
        (entry.note ? "<p>" + escapeHtml(entry.note) + "</p>" : "") +
        "</div>"
      );
    }

    function renderList(list) {
      if (!list.length) {
        registryGrid.innerHTML =
          '<div class="name-card empty-state">No names match that search. Try a different name, source, or year.</div>';
      } else {
        registryGrid.innerHTML = list.map(renderCard).join("");
      }
      if (countEl) {
        countEl.textContent = list.length + (list.length === 1 ? " entry" : " entries") + " shown";
      }
    }

    function filterRegistry(query) {
      var q = query.trim().toLowerCase();
      if (!q) return REGISTRY_DATA;
      return REGISTRY_DATA.filter(function (entry) {
        var haystack = (
          (entry.name || "") + " " + (entry.meta || "") + " " + (entry.note || "")
        ).toLowerCase();
        return haystack.indexOf(q) !== -1;
      });
    }

    renderList(REGISTRY_DATA);

    if (searchInput) {
      var debounceTimer = null;
      searchInput.addEventListener("input", function () {
        clearTimeout(debounceTimer);
        var value = searchInput.value;
        debounceTimer = setTimeout(function () {
          renderList(filterRegistry(value));
        }, 120);
      });
    }
  }
    /* ---------- Nav dropdown toggles (touch/keyboard support; hover/focus-within handled in CSS) ---------- */
  document.querySelectorAll(".has-dropdown > .dropdown-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var li = btn.parentElement;
      var isOpen = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".has-dropdown.open").forEach(function (li) {
        li.classList.remove("open");
        var b = li.querySelector(".dropdown-toggle");
        if (b) b.setAttribute("aria-expanded", "false");
      });
    }
  });

})();
