import { Swiper } from "swiper/bundle";

const swiperTool = new Swiper('.tool-swiper', {
  navigation: {
    nextEl: '.tool-swiper__button-next',
    prevEl: '.tool-swiper__button-prev'
  },

  slidesPerView: 2,
  spaceBetween: 75,

  pagination: {
    el: '.tool-swiper__pagination',
    clickable: 'true',
  },



  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 30
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 45
  //   },
  //   1280: {
  //     spaceBetween: 60,
  //     slidesPerView: 4,
  //   },
  // }

});


const swiperCapabilities = new Swiper('.capabilities-swiper', {

  slidesPerView: 4,
  spaceBetween: 158,

  pagination: {
    el: '.capabilities-swiper__pagination',
    clickable: 'true',
  },



  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 30
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 45
  //   },
  //   1280: {
  //     spaceBetween: 60,
  //     slidesPerView: 4,
  //   },
  // }

});
