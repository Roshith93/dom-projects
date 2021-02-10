const openModal = document.querySelector('.modal-btn')
const closeModal = document.querySelector('.close-btn')
const modalRoot = document.querySelector('.modal-overlay')

openModal.addEventListener('click',() => {
 modalRoot.classList.add('open-modal')
})

closeModal.addEventListener('click',() => {
 modalRoot.classList.remove('open-modal')
})