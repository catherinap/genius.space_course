const mobileMenu = document.querySelector(".mobile-menu");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

const toogleMenu = () => {
  const isOpen = mobileMenu.classList.toggle("is-open");

  // If the modal is now visible (isHidden is false), add no-scroll; otherwise, remove it
  if (isOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
};

menuOpen.addEventListener("click", toogleMenu);
menuClose.addEventListener("click", toogleMenu);
