import { modalOverlay } from "../_vars";

// Модалка авторизации

const loginBtn = document.querySelector('.header__personal-btn')
const loginForm = document.querySelector('.login-form')

// Управление состоянием модалки авторизации

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    loginForm.classList.add('login-form_active')
    modalOverlay.classList.add('modal-overlay_active')
  })
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', () => {
    loginForm.classList.remove('login-form_active')
    modalOverlay.classList.remove('modal-overlay_active')
  })
}


// Валидация формы

if (loginForm) {
  loginForm.addEventListener('input', (e) => {
    const inputTarget = e.target

    if (!inputTarget.validity.valid) {
      inputTarget.parentElement.classList.add('invalid')
    } else {
      inputTarget.parentElement.classList.remove('invalid')
    }
    if (inputTarget.value) {
      inputTarget.classList.add('login-form__input_active')
    } else {
      inputTarget.classList.remove('login-form__input_active')
    }
  })
}


// Тестирование авторизации

if (loginForm) {
  const personalInfo = document.querySelector('.header__personal')

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    loginForm.classList.remove('login-form_active')
    modalOverlay.classList.remove('modal-overlay_active')
    personalInfo.classList.add('header__personal_authorized')
  })
}
