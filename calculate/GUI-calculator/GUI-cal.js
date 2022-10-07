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

  // input값을 배열로 정리하기
  let joinInputArray = input.inputArray.join("");
  if (input.inputArray.length === 0) {
    document.querySelector(".result__clone").innerText = "0";
  } else {
    document.querySelector(".result__clone").innerText = joinInputArray;
  }
  return joinInputArray;
};

// 각 배열의 값 불러오기
input.getNumber = function (numbersArray) {
  const n = Number(numbersArray.shift());
  return n;
};

input.getOp = function (numbersArray) {
  const op = numbersArray.shift();
  return op;
};

// 배열들 초기화 + 최종값 가져오기
input.removeAll = function (value) {
  this.inputArray = [];
  this.inputArray.push(value);
};

const output = {};

// 최종값 표시하기
output.print = function (resultValue) {
  document.querySelector(".result__clone").innerText = `${resultValue}입니다.`;
};

const calculator = {};

// 계산기 기능
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

// = 눌렀을때 반응
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
