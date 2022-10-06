const input = { inputArray: [] };

// 클릭시 해당 값 input 하기
const clickNumbers = function (event) {
  let str = event.target.innerText;

  switch (str) {
    case "Del":
      input.inputArray.pop();
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      input.inputArray.push(` ${str} `);
      break;
    default:
      input.inputArray.push(str);
  }

  let joinInputArray = input.inputArray.join("");
  if (input.inputArray.length === 0) {
    document.querySelector(".result__clone").innerText = "0";
  } else {
    document.querySelector(".result__clone").innerText = joinInputArray;
  }
  return joinInputArray;
};

// join input값 배열로 변경하기

input.getNumber = function (numbersArray) {
  const n = Number(numbersArray.shift());
  return n;
};

input.getOp = function (numbersArray) {
  const op = numbersArray.shift();
  return op;
};

input.removeAll = function (value) {
  this.inputArray = [];
  this.inputArray.push(value);
};

const output = {};

output.print = function (resultValue) {
  document.querySelector(".result__clone").innerText = `${resultValue}입니다.`;
};

const calculator = {};

calculator.calculate = function (n1, n2, op) {
  let calResult = "";
  switch (op) {
    case "+":
      calResult = n1 + n2;
      break;
    case "-":
      calResult = n1 - n2;
      break;
    case "*":
      calResult = n1 * n2;
      break;
    case "/":
      calResult = n1 / n2;
      break;
    default:
      return NaN;
  }
  return calResult;
};

const clickResult = function (event) {
  let numbersArray = input.inputArray.join("").split(" ");
  let resultValue = input.getNumber(numbersArray);

  while (true) {
    let op = input.getOp(numbersArray);
    if (numbersArray.length === 0) {
      break;
    }
    let n2 = input.getNumber(numbersArray);
    resultValue = calculator.calculate(resultValue, n2, op);
  }

  output.print(resultValue);
  input.removeAll(resultValue);
};
