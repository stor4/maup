const menu = document.getElementById('header__mobile')
const burgerToggle = document.querySelector('.header__burger-toggle');

function openMenu() {
  menu.classList.add('header-open')
}

function closeMenu() {
  menu.classList.remove('header-open')
}

window.openMenu = openMenu
window.closeMenu = closeMenu

document.addEventListener('click', function(event) {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnBurger = burgerToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnBurger) {
    closeMenu();
  }
});
