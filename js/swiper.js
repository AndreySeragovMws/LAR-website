const swiper = new Swiper('.blog__slider', {
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    450: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    786: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32
    },
  }
});

