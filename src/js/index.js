// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import Inputmask from "inputmask";
let phones = document.querySelectorAll('input[name="phone"]');
let inputmask = new Inputmask("+7(999)999-99-99");
phones.forEach(input => inputmask.mask(input));

import "./slider__banner";
import "./slider__clients";
import "./custom-select";
