import { Modal } from "./components/modal.js";
import { AlertError } from "./components/alert-error.js";
import { calculateBMI, areInputsValid} from "./components/utils.js";

const form = document.querySelector('form');
const Input = {inputWeight: document.querySelector('#weight'), inputHeight: document.querySelector('#height')};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const weight = Input.inputWeight.value.trim();
  const height = Input.inputHeight.value.trim();

  if (areInputsValid(weight, height)) {
    const result = calculateBMI(parseFloat(weight), parseFloat(height));
    const message = `Your BMI is ${result}`;
    showResult(message);
  } else {
    showError();
  }
}

function showResult(message) {
  Modal.message.innerText = message;
  Modal.open();
  AlertError.close();
}


function showError() {
  AlertError.open();
  Modal.message.classList.remove('open');
}
