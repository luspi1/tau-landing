import { Swiper } from "swiper/bundle";

const swiperTool = new Swiper('.tool-swiper', {
  navigation: {
    nextEl: '.tool-swiper__button-next',
    prevEl: '.tool-swiper__button-prev'
  },

  slidesPerView: 1,
  spaceBetween: 75,

  pagination: {
    el: '.tool-swiper__pagination',
    clickable: 'true',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  }
});


const swiperCapabilities = new Swiper('.capabilities-swiper', {

  slidesPerView: 1,
  // spaceBetween: 158,

  pagination: {
    el: '.capabilities-swiper__pagination',
    clickable: 'true',
  },


  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 45,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 45,
    },

    1280: {
      spaceBetween: 158,
      slidesPerView: 4,
    },
  }
});
