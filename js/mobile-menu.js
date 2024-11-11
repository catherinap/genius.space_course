const mobileMenu = document.querySelector(".mobile-menu");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

const toogleMenu = () => mobileMenu.classList.toggle("is-open");

menuOpen.addEventListener("click", toogleMenu);
menuClose.addEventListener("click", toogleMenu);
