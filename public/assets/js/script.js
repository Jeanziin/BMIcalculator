// Variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const modalBtnClose = document.querySelector('.modal button.close');
const alertError = document.querySelector('.alert-error');

// Event Listener for the form
form.addEventListener('submit', handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const weight = parseFloat(inputWeight.value);
  const height = parseFloat(inputHeight.value);

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
  modalMessage.innerText = message;
  modalWrapper.classList.add('open');
  alertError.classList.remove('open');
}

// Event Listener to close the modal
modalBtnClose.addEventListener('click', () => {
  modalWrapper.classList.remove('open');
});

// Function to calculate the BMI
function calculateBMI(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

function showError() {
  alertError.classList.add('open');
  modalMessage.classList.remove('open');
}
