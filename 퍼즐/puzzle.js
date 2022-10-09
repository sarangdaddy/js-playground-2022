const titleStr = document.querySelector(".string");
const buttonStr = document.querySelector(".string__button");

let targetStr = titleStr.innerText;
let targetArray = targetStr.split("");

for (let i = 0; i < targetStr.length; i++) {
  let showTarget = document.createElement("button");
  showTarget.innerHTML = targetArray[i];
  buttonStr.appendChild(showTarget);
}

const swap = function (event) {
  console.log("swap");
  targetArray = targetArray.reverse();
  console.log(targetArray);
  targetStr = targetArray.join("");
  changeStr(targetStr);
};

const shiftRight = function (event) {
  console.log("shift__right");
  let lastArray = targetArray[targetArray.length - 1];
  targetArray.splice(targetArray.length - 1, 1);
  targetArray.unshift(lastArray);
  console.log(targetArray);
  targetStr = targetArray.join("");
  changeStr(targetStr);
};

const shiftLeft = function (event) {
  console.log("shift__left");
  let lastArray = targetArray[0];
  targetArray.splice(0, 1);
  targetArray.push(lastArray);
  console.log(targetArray);
  targetStr = targetArray.join("");
  changeStr(targetStr);
};

const changeStr = function (targetStr) {
  for (let i = 0; i < targetStr.length; i++) {
    let chStr = document.querySelectorAll(".string__button button");
    chStr[i].innerHTML = targetStr[i];
    checkStr();
  }
};

const checkStr = function () {
  if (titleStr.innerText === targetArray.join("")) {
    document.querySelector(".check").innerText = "일치합니다.";
  } else {
    document.querySelector(".check").innerText = "일치하지 않습니다.";
  }
};

checkStr();
