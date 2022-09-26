const inputForm = document.querySelector(".input__form");
const inputValue = document.querySelector(".input__value");
const inputShow = document.querySelector(".input__clone");

function getGugudan(event) {
  event.preventDefault();
  const results = [];
  const inputNumber = inputValue.value;
  const data = inputNumber.split(",");
  var n = data[0];
  var maxNumber = data[1];

  inputValue.value = "";
  for (var i = 1; i <= maxNumber; i++) {
    results[i] = n * i;
  }
  printGugudan(n, maxNumber, results);
}

function printGugudan(n, maxNumber, results) {
  for (var i = 1; i <= maxNumber; i++) {
    let span = document.createElement("span");
    const br = document.createElement("br");
    span = `${n} X ${i} = ${results[i]}`;
    inputShow.append(span);
    inputShow.append(br);
  }
}

inputForm.addEventListener("submit", getGugudan);
