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

document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('form-dropdown');
  const dropdownToggle = document.querySelector('.form__inputs-from');

  const isClickedOutside = !dropdown.contains(event.target) && !dropdownToggle.contains(event.target);

  if (isClickedOutside) {
    dropdown.classList.remove('dropdown-open');
  }
});

document.querySelectorAll('#form-dropdown li').forEach(item => {
  item.addEventListener('click', event => {
    const value = event.target.textContent;
    const inputField = document.getElementById('input6');
    inputField.innerText = value;

    closeList();
  });
});
