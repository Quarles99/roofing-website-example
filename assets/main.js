// Example Roofing Co. — sample site scripts

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Quote forms: this is a demo, so nothing is sent.
// For a live site, point the form's action at a form service (e.g. Formspree) and remove this handler.
document.querySelectorAll("form[data-demo]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = form.querySelector(".form-success");
    if (ok) {
      ok.classList.add("show");
      ok.focus();
    }
    form.reset();
  });
});

// Gallery filters
const filterBar = document.querySelector(".filters");
if (filterBar) {
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const f = btn.dataset.filter;
    filterBar.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    document.querySelectorAll(".project").forEach((p) => {
      p.hidden = f !== "all" && p.dataset.type !== f;
    });
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
