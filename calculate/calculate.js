const inputForm = document.querySelector(".input__form");
const inputNumber1 = document.querySelector(".input__n1");
const inputNumber2 = document.querySelector(".input__n2");
const inputOp1 = document.querySelector(".input__op1");
const inputButton = document.querySelector(".input__button");
const result = document.querySelector(".result");

function getInputValue(event) {
  event.preventDefault();
  const number1Value = Number(inputNumber1.value);
  const number2Value = Number(inputNumber2.value);
  const op1Value = inputOp1.value;
  inputNumber1.value = "";
  inputNumber2.value = "";
  inputOp1.value = "";
  calculate(number1Value, number2Value, op1Value);
}

function calculate(n1, n2, op1) {
  let resultCal = "";
  switch (op1) {
    case "+":
      resultCal += n1 + n2;
      break;
    case "-":
      resultCal += n1 - n2;
      break;
    case "*":
      resultCal += n1 * n2;
      break;
    case "/":
      resultCal += parseInt(n1 / n2);
      break;
    default:
      resultCal += "연산기호를 제대로 입력하세요.";
  }
  showResult(resultCal);
}

function showResult(resultCalNumber) {
  result.innerText = resultCalNumber;
}

inputForm.addEventListener("submit", getInputValue);
