const titleStr = document.querySelector(".string");
const buttonStr = document.querySelector(".string__button");

function getString() {
  const targetStr = titleStr.innerText;
  const strArray = targetStr.split("");
  showString(strArray);
}

function showString(strArray) {
  for (let i = 0; i <= strArray.length - 1; i++) {
    let targetClone = strArray[i];
    const showTarget = document.createElement("button");
    showTarget.innerText = targetClone;
    buttonStr.appendChild(showTarget);
  }
}

const swap = function (event) {
  console.log("swap");
};

const shift = function (event) {
  console.log("shift");
};

getString();
