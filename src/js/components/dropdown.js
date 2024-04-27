function openList() {
  const elem = document.getElementById('form-dropdown')
  elem.classList.remove('dropdown-close')
  elem.classList.add('dropdown-open')
}

function closeList() {
  const elem = document.getElementById('form-dropdown')
  elem.classList.remove('dropdown-open')
  elem.classList.add('dropdown-close')
}

window.openList = openList
window.closeList = closeList
