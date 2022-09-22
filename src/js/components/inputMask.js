import Inputmask from "inputmask";

const phoneInput = document.querySelector('.feedback__phone-input');

if (phoneInput) {
  Inputmask({
    "mask": "+7 999 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: false,
  }).mask(phoneInput);
}
