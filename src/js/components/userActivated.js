//закрытие модалки активации пользователя

const activatedCloseBtn = document.querySelector('.user-activated__close-btn')
const activatedModal = document.querySelector('.user-activated')

if (activatedCloseBtn) {
    activatedCloseBtn.addEventListener('click', ()=>{
        activatedModal.classList.remove('_active')
    })
}