import * as CalcElements from "./calculatorElements.js";
import { updateDisplay, clearDisplay } from "./display.js";
import { setOperator, calculate } from "./calculation.js";

export function eventListeners() {
  // Event listeners for number buttons
  CalcElements.btnZero.addEventListener("click", () => updateDisplay("0"));
  CalcElements.btnOne.addEventListener("click", () => updateDisplay("1"));
  CalcElements.btnTwo.addEventListener("click", () => updateDisplay("2"));
  CalcElements.btnThree.addEventListener("click", () => updateDisplay("3"));
  CalcElements.btnFour.addEventListener("click", () => updateDisplay("4"));
  CalcElements.btnFive.addEventListener("click", () => updateDisplay("5"));
  CalcElements.btnSix.addEventListener("click", () => updateDisplay("6"));
  CalcElements.btnSeven.addEventListener("click", () => updateDisplay("7"));
  CalcElements.btnEight.addEventListener("click", () => updateDisplay("8"));
  CalcElements.btnNine.addEventListener("click", () => updateDisplay("9"));

  // Event listener for clear button
  CalcElements.btnClear.addEventListener("click", clearDisplay);

  // Event listeners for operator buttons
  CalcElements.btnAdd.addEventListener("click", () => setOperator("+"));
  CalcElements.btnSubtract.addEventListener("click", () => setOperator("-"));
  CalcElements.btnMultiply.addEventListener("click", () => setOperator("*"));
  CalcElements.btnDivide.addEventListener("click", () => setOperator("/"));

  // Event listener for equals button
  CalcElements.btnEquals.addEventListener("click", calculate);
}
