(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");
  var year = document.getElementById("year");
  var storageKey = "ermek-resume-theme";
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);

    if (persist) {
      localStorage.setItem(storageKey, theme);
    }

    if (toggle) {
      var isDark = theme === "dark";
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      toggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  var savedTheme = localStorage.getItem(storageKey);
  applyTheme(savedTheme || (media.matches ? "dark" : "light"), false);

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      applyTheme(current === "dark" ? "light" : "dark", true);
    });
  }

  if (media.addEventListener) {
    media.addEventListener("change", function (event) {
      if (!localStorage.getItem(storageKey)) {
        applyTheme(event.matches ? "dark" : "light", false);
      }
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
