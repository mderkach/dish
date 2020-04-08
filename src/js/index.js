// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import Inputmask from "inputmask";
let phones = document.querySelectorAll('input[name="phone"]');
let inputmask = new Inputmask("+7(999)999-99-99");
phones.forEach((input) => inputmask.mask(input));

let menu = document.querySelector(".header__catalogue-button");
if (menu) {
  const vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const vh = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    document.querySelector(".header__catalogue").classList.toggle("is-active");

    if (vw < 1200) {
      document.body.classList.toggle("no-scroll");
    }
  });
}

import "./slider__banner";
import "./slider__clients";
import "./custom-select";
import "./slider__team";
import "./slider__collection";
