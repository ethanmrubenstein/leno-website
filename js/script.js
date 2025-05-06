document.addEventListener("DOMContentLoaded", () => {
  const lightbox = GLightbox({
    selector: ".glightbox2",
  });
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const toggleButtonIcon = document.querySelector(
    ".navbar__mobile-menu-toggle i"
  );
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    if (mobileMenu.classList.contains("active")) {
      toggleButtonIcon.classList.remove("fa-bars");
      toggleButtonIcon.classList.add("fa-x");
    } else if (!mobileMenu.classList.contains("active")) {
      toggleButtonIcon.classList.remove("fa-x");
      toggleButtonIcon.classList.add("fa-bars");
    }
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
