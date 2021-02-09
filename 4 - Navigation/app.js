const getNavRoot = document.querySelector('.nav-center');
const navLink = getNavRoot.querySelector('.links')
const toggleButton = document.querySelector('.nav-toggle')

toggleButton.addEventListener('click',e => {
  navLink.classList.toggle('show-links')
})