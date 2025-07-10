function initNavMenu() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeBtn = document.getElementById("closeBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!hamburgerBtn || !closeBtn || !mobileMenu) return;

  // Evita múltiples listeners duplicados
  hamburgerBtn.onclick = () => {
    mobileMenu.classList.remove("hidden");
    hamburgerBtn.classList.add("hidden");
    document.body.classList.add("overflow-hidden");
  };

  closeBtn.onclick = () => {
    mobileMenu.classList.add("hidden");
    hamburgerBtn.classList.remove("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.onclick = () => {
      mobileMenu.classList.add("hidden");
      hamburgerBtn.classList.remove("hidden");
      document.body.classList.remove("overflow-hidden");
    };
  });
}

// Ejecuta al cargar la página
document.addEventListener("DOMContentLoaded", initNavMenu);

// Ejecuta después de cada cambio de página (transición Astro)
document.addEventListener("astro:after-swap", initNavMenu);
