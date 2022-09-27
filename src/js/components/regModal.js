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

regForm.addEventListener('input', (e) => {
  const inputTarget = e.target

  if (!inputTarget.validity.valid) {
    inputTarget.parentElement.classList.add('invalid')
  } else {
    inputTarget.parentElement.classList.remove('invalid')
  }
  if (inputTarget.value) {
    inputTarget.classList.add('reg-form__input_active')
  } else {
    inputTarget.classList.remove('reg-form__input_active')
  }
})


// Блокировка поля "Отчество" через чекбокс

const checkPatronymic = document.querySelector('[name="check-patronymic"]')
checkPatronymic.addEventListener('change', (e) => {
  patronymicInput.disabled = e.target.checked;
})
