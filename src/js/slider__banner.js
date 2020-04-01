import Swiper from "swiper";

let swiper = new Swiper(".slider__banner-container", {
  loop: true,
  autoplay: {
    delay: 5000
  },
  wrapperClass: "slider__banner-wrapper",
  slideClass: "slider__banner-slide",
  pagination: {
    el: ".slider__banner-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "slider__banner-pagination-bullet",
    bulletActiveClass: "slider__banner-pagination-bullet--active",
    modifierClass: "slider__banner-pagination-",
    renderBullet: () => {
      return '<span class="slider__banner-pagination-bullet"></span>';
    }
  }
});
