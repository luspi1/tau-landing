import { formToObj, sendData, serializeForm, showInfoModal, toggleLoader } from "../_functions";
import { modalOverlay } from "../_vars";

const passForm = document.querySelector('.password-form')


async function handleFormSubmit (event) {
  event.preventDefault()

  const data = serializeForm(event.target)
  const objData = formToObj(data)
  const jsonData = JSON.stringify(objData)
  toggleLoader()

  const response = await sendData(jsonData, '/include/ajax/recoverypassword.php')
  const finishedResponse = await response.json()

  toggleLoader()

  const {status, errortext} = finishedResponse
  if (status === 'ok') {
    passForm.classList.remove('password-form_active')
    modalOverlay.classList.remove('modal-overlay_active')
    showInfoModal('Успешно!')
  } else {
    showInfoModal(errortext)
  }
}


// Обработка события отправки

if (passForm) {
  passForm.addEventListener('submit', handleFormSubmit)
}
