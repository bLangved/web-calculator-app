let firstNumber = null;
let currentOperator = null;
let newEntry = false;

export function setFirstNumber(number) {
  firstNumber = number;
}

export function setCurrentOperator(operator) {
  currentOperator = operator;
}

export function setNewEntry(entryStatus) {
  newEntry = entryStatus;
}

export function getFirstNumber() {
  return firstNumber;
}

export function getCurrentOperator() {
  return currentOperator;
}

export function getNewEntry() {
  return newEntry;
}
