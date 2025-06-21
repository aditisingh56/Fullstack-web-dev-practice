document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  if (!searchInput) return;

  const allTextElements = document.querySelectorAll(
    ".attraction-card, .culture-card, #photos div, .section2_contentdusra, .about-main"
  );

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    allTextElements.forEach((el) => {
      const text = el.textContent.toLowerCase();
      if (query && text.includes(query)) {
        el.style.backgroundColor = "#ffffcc";
        el.style.border = "2px solid #ffcc00";
      } else {
        el.style.backgroundColor = "";
        el.style.border = "";
      }
    });
  });
});
