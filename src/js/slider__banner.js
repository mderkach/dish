import Swiper from "swiper";

let swiper = new Swiper(".slider__banner-container", {
  loop: true,
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
