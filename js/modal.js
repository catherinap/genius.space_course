const modalWindow = document.querySelector(".backdrop");
const modalClose = document.querySelector(".modal-close");
const modalOpen = document.querySelector(".modal-open");

const toggleModal = () => {
  const isHidden = modalWindow.classList.toggle("is-hidden");

  // If the modal is now visible (isHidden is false), add no-scroll; otherwise, remove it
  if (!isHidden) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
};

modalOpen.addEventListener("click", toggleModal);
modalClose.addEventListener("click", toggleModal);
