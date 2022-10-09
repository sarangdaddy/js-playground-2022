const titleStr = document.querySelector(".string");
const buttonStr = document.querySelector(".string__button");

function choiceStr() {
  let strArray = ["HELLO", "SUNGUN", "SOOJIN", "SARANG", "SORRY", "MONEY"];
  let randomStrArray = "";
  for (let i = 0; i < strArray.length; i++) {
    randomStrArray = strArray[Math.floor(Math.random() * strArray.length)];
  }
  targetArray = randomStrArray.split("");
  showSrt(randomStrArray);
}

targetArray = "";

function showSrt(randomStrArray) {
  for (let i = 0; i < randomStrArray.length; i++) {
    let showTarget = document.createElement("button");
    showTarget.innerHTML = targetArray[i];
    buttonStr.appendChild(showTarget);
  }
  titleStr.innerHTML = targetArray.join("");
}

const swap = function (event) {
  targetArray = targetArray.reverse();
  targetStr = targetArray.join("");
  changeStr(targetStr);
};

const shiftRight = function (event) {
  let lastArray = targetArray[targetArray.length - 1];
  targetArray.splice(targetArray.length - 1, 1);
  targetArray.unshift(lastArray);
  targetStr = targetArray.join("");
  changeStr(targetStr);
};

const shiftLeft = function (event) {
  let lastArray = targetArray[0];
  targetArray.splice(0, 1);
  targetArray.push(lastArray);
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

choiceStr();
checkStr();
