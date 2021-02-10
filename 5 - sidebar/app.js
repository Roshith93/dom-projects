const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.querySelector('.sidebar-toggle')
const closeButton = document.querySelector('.close-btn')

sidebarToggle.addEventListener('click', ()=> {
  sidebar.classList.toggle('show-sidebar')
})
closeButton.addEventListener('click', ()=> {
 sidebar.classList.remove('show-sidebar')
})