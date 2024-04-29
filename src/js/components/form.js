const inputs = document.querySelectorAll('.d-input');
const submitBtn = document.querySelector('.form__btn');

function checkForm() {
  const allFilled = true;
  inputs.forEach(function(input) {
    if (input.value === '') {
      allFilled = false;
    }
  });

  if (allFilled) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('active-btn');
  } else {
    submitBtn.setAttribute('disabled', true);
    submitBtn.classList.remove('active-btn');
  }
}

inputs.forEach(function(input) {
  input.addEventListener('input', checkForm);
});
