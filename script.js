// script.js

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Optional: CTA Button bounce animation
  const cta = document.querySelector(".cta");
  if (cta) {
    cta.addEventListener("mouseenter", () => {
      cta.style.transform = "scale(1.05)";
    });
    cta.addEventListener("mouseleave", () => {
      cta.style.transform = "scale(1)";
    });
  }
});
