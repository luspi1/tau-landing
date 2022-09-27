//Модалка смены пароля
import {modalOverlay} from "../_vars";

const forgetPassBtn = document.querySelector('.forget-link')
const passwordForm = document.querySelector('.password-form')
const cancelBtn = passwordForm.querySelector('.password-form__cancel-btn')
const loginForm = document.querySelector('.login-form')

// Управление состоянием модалки cмены пароля

forgetPassBtn.addEventListener('click', () => {
  passwordForm.classList.add('password-form_active')
  modalOverlay.classList.add('modal-overlay_active')
  loginForm.classList.remove('login-form_active')
})

const closePopup = (...clickTarget) => {
  clickTarget.forEach(el => el.addEventListener('click', (e) => {
    e.preventDefault()
    passwordForm.classList.remove('password-form_active')
    modalOverlay.classList.remove('modal-overlay_active')
  }))
}

closePopup(modalOverlay, cancelBtn)

// Валидация формы

passwordForm.addEventListener('input', (e) => {
  const inputTarget = e.target

  if (!inputTarget.validity.valid) {
    inputTarget.parentElement.classList.add('invalid')
  } else {
    inputTarget.parentElement.classList.remove('invalid')
  }
  if (inputTarget.value) {
    inputTarget.classList.add('password-form__input_active')
  } else {
    inputTarget.classList.remove('password-form__input_active')
  }
})


