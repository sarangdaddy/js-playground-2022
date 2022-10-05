const input = {};

input.inputValues = function (event) {
  let n = event.target.innerText;
  this.push(event.target.innerText);
};
