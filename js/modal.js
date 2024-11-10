const modalWindow = document.querySelector(".backdrop");
const modalClose = document.querySelector(".modal-close");
const modalOpen = document.querySelector(".modal-open");

const toogleModal = () => modalWindow.classList.toggle("is-hidden");

modalOpen.addEventListener("click", toogleModal);
modalClose.addEventListener("click", toogleModal);
