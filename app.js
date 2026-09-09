/*
  Beyond Avalon — shared site behavior
  Handles: dark/light theme toggle, mobile menu toggle, and the Names
  Registry search/render (when REGISTRY_DATA is present on the page).
*/
(function () {
  "use strict";

  /* ---------- Theme toggle ---------- */
  // In-memory only (no localStorage/sessionStorage) so this behaves
  // identically everywhere, including sandboxed preview iframes that
  // disallow web storage APIs.
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  (function initTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    }
  })();

  var themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      applyTheme(isDark ? "light" : "dark");
    });
  }

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
})();
