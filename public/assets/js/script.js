// Variables

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const modalBtnClose = document.querySelector('.modal button.close');

// Event Listener for the form
form.addEventListener('submit', handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    showBMIResult();
  }

// Function to display the BMI result
function showBMIResult() {
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = calculateBMI(weight, height);
  const message = `Your BMI is ${result}`;
  modalMessage.innerText = message;
  modalWrapper.classList.add('open');
}


// Event Listener para fechar o modal
modalBtnClose.addEventListener('click', () => {
  modalWrapper.classList.remove('open');
});

// Function to calculate the BMI
function calculateBMI(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}
