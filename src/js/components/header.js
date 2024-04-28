function openMenu() {
  const elem = document.getElementById('header__mobile')
  elem.classList.remove('header-close')
  elem.classList.add('header-open')
}

function closeMenu() {
  const elem = document.getElementById('header__mobile')
  elem.classList.remove('header-open')
  elem.classList.add('header-close')
}

window.openMenu = openMenu
window.closeMenu = closeMenu
