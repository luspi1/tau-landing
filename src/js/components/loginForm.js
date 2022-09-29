import { formToObj, sendData, serializeForm, showInfoModal, toggleLoader } from "../_functions";
import { modalOverlay } from "../_vars";

const loginForm = document.querySelector('.login-form')


async function handleFormSubmit (event) {
  event.preventDefault()

  const data = serializeForm(event.target)
  const objData = formToObj(data)
  const jsonData = JSON.stringify(objData)
  toggleLoader()

  const response = await sendData(jsonData, '/include/ajax/checkuser.php')
  const finishedResponse = await response.json()

  toggleLoader()

  const {status, html} = finishedResponse
  if (status === 'ok') {
    loginForm.classList.remove('login-form_active')
    modalOverlay.classList.remove('modal-overlay_active')
    window.location.href = '/user-area/';
  } else {
    showInfoModal(html)
  }
}


// Обработка события отправки

if (loginForm) {
  loginForm.addEventListener('submit', handleFormSubmit)
}
