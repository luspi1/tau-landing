import Inputmask from "inputmask";

const phoneInput = document.querySelector('.feedback__phone-input');

if (phoneInput) {
  Inputmask({
    "mask": "+7 (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: false,
  }).mask(phoneInput);
}
const regPhone = document.querySelector('.reg-form__phone-input');

if (regPhone) {
  Inputmask({
    "mask": "+7 (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: false,
  }).mask(regPhone);
}

const birthdayInput = document.querySelector('.reg-form__birthday-input');

if (birthdayInput) {
  Inputmask({
    "mask": "99.99.9999",
    showMaskOnHover: false,
    showMaskOnFocus: false,
  }).mask(birthdayInput);
}
