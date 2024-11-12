const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    735: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },
});
