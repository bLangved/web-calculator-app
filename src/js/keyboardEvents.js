import { updateDisplay, clearDisplay } from "./display.js";
import { setOperator, calculate } from "./calculation.js";

export function keyboardEvents() {
  document.addEventListener("keydown", function (event) {
    let buttonId;

    switch (event.key) {
      case "0":
        buttonId = "btnZero";
        updateDisplay("0");
        break;
      case "1":
        buttonId = "btnOne";
        updateDisplay("1");
        break;
      case "2":
        buttonId = "btnTwo";
        updateDisplay("2");
        break;
      case "3":
        buttonId = "btnThree";
        updateDisplay("3");
        break;
      case "4":
        buttonId = "btnFour";
        updateDisplay("4");
        break;
      case "5":
        buttonId = "btnFive";
        updateDisplay("5");
        break;
      case "6":
        buttonId = "btnSix";
        updateDisplay("6");
        break;
      case "7":
        buttonId = "btnSeven";
        updateDisplay("7");
        break;
      case "8":
        buttonId = "btnEight";
        updateDisplay("8");
        break;
      case "9":
        buttonId = "btnNine";
        updateDisplay("9");
        break;
      case "+":
        buttonId = "btnAdd";
        setOperator("+");
        break;
      case "-":
        buttonId = "btnSubtract";
        setOperator("-");
        break;
      case "*":
        buttonId = "btnMultiply";
        setOperator("*");
        break;
      case "/":
        buttonId = "btnDivide";
        setOperator("/");
        break;
      case ",":
        buttonId = "btnDecimal";
        setOperator(",");
        break;
      case "%":
        buttonId = "btnPercent";
        setOperator("%");
        break;
      case "Enter":
      case "=":
        buttonId = "btnEquals";
        calculate();
        break;
      case "Escape":
      case "c":
        buttonId = "btnClear";
        clearDisplay();
        break;
      default:
        break;
    }
    if (buttonId) {
      const button = document.querySelectorAll("numpad-container");
      if (button) {
        button.classList.add("key-click");
        setTimeout(() => {
          button.classList.remove("keyboard-pressed");
        }, 150);
      }
    }
  });
}
