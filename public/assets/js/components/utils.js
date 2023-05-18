export function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
  }

export function areInputsValid(weight, height) {
    return isNumber(weight) && isNumber(height);
  }
  
export function isNumber(value) {
    return /^(\d+\.?\d*|\.\d+)$/.test(value);
  }


