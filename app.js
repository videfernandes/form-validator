// for blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add('is-invalid');

  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const name = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{3})/;

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');

  } else {
    zip.classList.remove('is-invalid');
  }

}

function validateEmail() {
  const name = document.getElementById('email');
  const re = /^([a-zA-Z-0-9_\-\.]+)@([a-zA-Z-0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add('is-invalid');

  } else {
    email.classList.remove('is-invalid');
  }


}

function validatePhone() {
  const name = document.getElementById('phone');
  const re = /^\(?\d{2}\)?[-. ]?\d{5}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');

  } else {
    phone.classList.remove('is-invalid');
  }


}