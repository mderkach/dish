import Swiper from "swiper";

let swiper = new Swiper(".slider__collection", {
  loop: true,
  autoplay: {
    delay: 5000
  },
  wrapperClass: "slider__collection-wrapper",
  slideClass: "slider__collection-slide",
  pagination: {
    el: ".slider__collection-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "slider__collection-pagination-bullet",
    bulletActiveClass: "slider__collection-pagination-bullet--active",
    modifierClass: "slider__collection-pagination-",
    renderBullet: () => {
      return '<span class="slider__collection-pagination-bullet"></span>';
    }
  }
});
