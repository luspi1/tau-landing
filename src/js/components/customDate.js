import AirDatepicker from "air-datepicker";

const regBirthInput = document.querySelector('.reg-form__birthday-input');

new AirDatepicker(regBirthInput);


regBirthInput.addEventListener('click', (e) => {
  e.target.classList.add('reg-form__input_active')
})
