const inputs = document.querySelectorAll('.d-input');
const submitBtn = document.querySelector('.form__btn');
const form = document.querySelector('.form')

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

form.addEventListener('submit', function(event) {
  inputs.forEach(input => {
    const warning = input.nextElementSibling;

    if (input.value.trim() === '') {
      warning.style.display = 'block';
      event.preventDefault();
    } else {
      warning.style.display = 'none';
    }
  });
});


