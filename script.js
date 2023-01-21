var password = document.getElementById('password'),
  confirm_password = document.getElementById('confirmPassword'),
  passwordText = document.querySelector('.password-error');

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords don't match");
    password.classList.add('error');
    confirm_password.classList.add('error');
    passwordText.textContent = "Passwords don't match";
  } else {
    confirm_password.setCustomValidity('');
    password.classList.remove('error');
    confirm_password.classList.remove('error');
    passwordText.textContent = '';
  }
}

password.addEventListener('change', (e) => validatePassword());
confirm_password.addEventListener('keyup', (e) => validatePassword());
