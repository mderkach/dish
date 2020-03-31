import Swiper from "swiper";

let swiper = new Swiper(".slider__team", {
  slidesPerView: 4,
  spaceBetween: 20,
  wrapperClass: "slider__team-wrapper",
  slideClass: "slider__team-slide",
  navigation: {
    nextEl: ".slider__team-next",
    prevEl: ".slider__team-prev",
    disabledClass: "slider__team-disabled"
  }
});
