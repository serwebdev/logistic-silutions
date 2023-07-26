// import Inputmask from 'inputmask';
import Inputmask from './../../../node_modules/inputmask/dist/inputmask.es6.js';

const inputsTel = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask('+7 (999) 999-99-99', { showMaskOnHover: false });
im.mask(inputsTel);
