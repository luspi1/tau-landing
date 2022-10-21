import { modalOverlay } from "../_vars";


// Модалка регистрации

const regBtn = document.querySelector('.reg-link')
const regForm = document.querySelector('.reg-form')
const loginForm = document.querySelector('.login-form')
const enterPasswordBtn = document.querySelector('.btn-enter-pass')

const patronymicInput = document.querySelector('.patronymic-input')

// Управление состоянием модалки регистрации

regBtn.addEventListener('click', () => {
  regForm.classList.add('reg-form_active')
  modalOverlay.classList.add('modal-overlay_active')
  loginForm.classList.remove('login-form_active')
})

modalOverlay.addEventListener('click', () => {
  regForm.classList.remove('reg-form_active')
  modalOverlay.classList.remove('modal-overlay_active')
})

enterPasswordBtn.addEventListener('click', () => {
  regForm.classList.remove('reg-form_active')
  loginForm.classList.add('login-form_active')
})

// Валидация формы

function validateFormInput(nameForm, nameClassActive) {
  nameForm.addEventListener('input', (e) => {
    const inputTarget = e.target;
    if (!inputTarget.validity.valid) {
      inputTarget.parentElement.classList.add('invalid')
    } else {
      inputTarget.parentElement.classList.remove('invalid')
    }
    inputTarget.classList.add(nameClassActive) //для автозаполнения Edge
  });
};

function focusInTarget(nameForm, nameClassActive) {
  nameForm.addEventListener('focusin', (e) => {
    const inputTarget = e.target
    inputTarget.classList.add(nameClassActive)
  })
};

function focusOutTarget(nameForm, nameClassActive) {
  nameForm.addEventListener('focusout', (e) => {
    const inputTarget = e.target
    if (!inputTarget.value) {
      inputTarget.classList.remove(nameClassActive)
    }
  })
};

//для автозаполнения Firefox
function autocompleteFirefox(nameClassInput, nameClassActive) {
  const classInput = document.querySelectorAll(`.${nameClassInput}`);
  classInput.forEach(element => {
    if (element.value !== '') {
      element.classList.add(nameClassActive);
    }
  })
};

//окно входа

validateFormInput(loginForm, 'login-form__input_active');
focusInTarget(loginForm, 'login-form__input_active');
focusOutTarget(loginForm, 'login-form__input_active');
autocompleteFirefox('login-form__input', 'login-form__input_active');

//окно регистрации

validateFormInput(regForm, 'reg-form__input_active');
focusInTarget(regForm, 'reg-form__input_active');
focusOutTarget(regForm, 'reg-form__input_active');
autocompleteFirefox('reg-form__input', 'reg-form__input_active');


// Блокировка поля "Отчество" через чекбокс

const checkPatronymic = document.querySelector('[name="check-patronymic"]')
checkPatronymic.addEventListener('change', (e) => {
  patronymicInput.disabled = e.target.checked;
})
