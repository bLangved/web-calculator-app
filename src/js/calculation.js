import * as CalcElements from "./calculatorElements.js";
import {
  getFirstNumber,
  setFirstNumber,
  getCurrentOperator,
  setCurrentOperator,
  setNewEntry,
} from "./calculatorState.js";

/**
 *  Function to set the operator and store the current number
 */
export function setOperator(operator) {
  setFirstNumber(parseFloat(CalcElements.display.textContent));
  setCurrentOperator(operator);
  setNewEntry(true);
}

/**
 * Perform the calculation based on the operator
 * @returns calculated number
 */
export function calculate() {
  let firstNumber = getFirstNumber();
  let currentOperator = getCurrentOperator();
  let secondNumber = parseFloat(CalcElements.display.textContent);
  let result;

  switch (currentOperator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) {
        result = "Error";
        break;
      }
      result = firstNumber / secondNumber;
      break;
    default:
      return;
  }

  let resultString = result.toString();

  if (resultString.length > 10) {
    // Scientific notation (with 4 digits precision) if number becomes too big
    resultString = result.toExponential(4);
  }
  CalcElements.display.textContent = resultString;
  setFirstNumber(null);
  setNewEntry(true);
}
