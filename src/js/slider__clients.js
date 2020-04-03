import Swiper from "swiper";

let swiper = new Swiper(".slider__clients", {
  slidesPerView: 4,
  spaceBetween: 20,
  wrapperClass: "slider__clients-wrapper",
  slideClass: "slider__clients-slide",
  navigation: {
    nextEl: ".slider__clients-next",
    prevEl: ".slider__clients-prev",
    disabledClass: "slider__clients-disabled"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});
