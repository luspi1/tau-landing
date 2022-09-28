import { infoModal, loader } from "./_vars";


// Фунцкия отправки fetch запросов

async function sendData(data, url) {
  return await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'multipart/form-data'},
    body: data,
  })
}

//Сбор данных форм

const serializeForm = (formNode) => {
  return new FormData(formNode)
}

// Преобразование formData в объект
const formToObj = (formData) => {
  return Array.from(formData.entries()).reduce((memo, pair) => ({
    ...memo,
    [pair[0]]: pair[1],
  }), {})
}


// показ/скрытие лоадера
const toggleLoader = () => {
  loader.classList.toggle('hidden')
}


// показ/скрытие модалки информации
const showInfoModal = (responseText) => {
  infoModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('info-modal')) {
      infoModal.classList.add('hidden')
    }

  })
  const modalText = infoModal.querySelector('.info-modal__content-text')
  modalText.textContent = responseText
  infoModal.classList.remove('hidden')
}


export { serializeForm, formToObj, showInfoModal, toggleLoader, sendData }
