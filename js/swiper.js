const swiper = new Swiper('.blog__slider', {
  slidesPerView: "auto",
  spaceBetween: 32,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
    },
    450: {
      slidesPerView: 1.5,
    },
    680: {
      slidesPerView: 2,
    },
    786: {
      slidesPerView: 2.5,
    },
    1100: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  }
});


const swiperGrid = new Swiper(".benefits__wrapper", {
  slidesPerView: "auto",
  // slidesPerGroup: 2,
  spaceBetween: 16,
  breakpoints: {
    1060: {
      enabled: false,
    },
  }
});


