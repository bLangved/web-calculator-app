import * as CalcElements from "./calculatorElements.js";
import { getNewEntry, setNewEntry } from "./calculatorState.js";

/**
 * Function to update the display when a number button is pressed
 * @param {string} number
 */
export function updateDisplay(number) {
  if (CalcElements.display.textContent === "0" || getNewEntry()) {
    CalcElements.display.textContent = number;
    setNewEntry(false);
  } else {
    CalcElements.display.textContent += number;
  }
  if (CalcElements.display.textContent.length > 10) {
    CalcElements.display.textContent =
      CalcElements.display.textContent.substring(0, 10);
  }
}

/**
 * Function to clear the display when clear button is pressed
 */
export function clearDisplay() {
  CalcElements.display.textContent = "0";
  setNewEntry(true);
}
