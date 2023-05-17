//Input Object
const Input = {
  inputWeight: document.querySelector('#weight'),
  inputHeight: document.querySelector('#height'),
}


//Modal object
const Modal = {
  form: document.querySelector('form'),
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),
  alertError: document.querySelector('.alert-error'),

  open() { Modal.wrapper.classList.add('open') },
  close() { Modal.wrapper.classList.remove('open') }
}
// Event Listener for the form
Modal.form.addEventListener('submit', handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const weight = parseFloat(Input.inputWeight.value);
  const height = parseFloat(Input.inputHeight.value);

  if (isNaN(weight) || isNaN(height)) {
    showError();
  } else {
    const result = calculateBMI(weight, height);
    const message = `Your BMI is ${result}`;
    showModal(message);
  }
}

// Function to display the BMI result
function showModal(message) {
  Modal.message.innerText = message;
  Modal.open();
  Modal.alertError.classList.remove('open');
}

// Event Listener to close the modal
Modal.btnClose.addEventListener('click', () => {
  Modal.close();
});

// Function to calculate the BMI
function calculateBMI(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

function showError() {
  Modal.alertError.classList.add('open');
  Modal.message.classList.remove('open');
}
