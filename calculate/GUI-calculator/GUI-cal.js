const input = { inputArray: [] };

input.getInput = function () {
  return this.inputArray.join("");
};

const clickNumbers = function (event) {
  let str = event.target.innerText;

  switch (str) {
    case "Del":
      input.inputArray.pop();
      break;
    case "+":
      input.inputArray.push(" + ");
      break;
    case "-":
      input.inputArray.push(" - ");
      break;
    case "*":
      input.inputArray.push(" * ");
      break;
    case "/":
      input.inputArray.push(" / ");
      break;
    default:
      input.inputArray.push(str);
  }

  if (input.inputArray.length === 0) {
    document.querySelector(".result__clone").innerText = "0";
  } else {
    document.querySelector(".result__clone").innerText = input.getInput();
  }
};
