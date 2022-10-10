const titleStr = document.querySelector(".string");
const buttonStr = document.querySelector(".string__button");

const game = { strArray: [] };
let targetArray = [];

// 여러 단어 중 랜덤으로 시작 단어를 선택
game.choiceStr = function () {
  this.strArray = ["HELLO", "SUNGUN", "SOOJIN", "SARANG", "SORRY", "MONEY"];
  this.randomStrArray = "";
  for (let i = 0; i < this.strArray.length; i++) {
    this.randomStrArray =
      this.strArray[Math.floor(Math.random() * this.strArray.length)];
  }
  targetArray = this.randomStrArray.split("");
  game.showSrt();
};

// 선택돤 단어(targetArray)를 화면에 표시
game.showSrt = function () {
  for (let i = 0; i < this.randomStrArray.length; i++) {
    let showTarget = document.createElement("button");
    showTarget.innerHTML = targetArray[i];
    buttonStr.appendChild(showTarget);
  }
  titleStr.innerHTML = targetArray.join("");
};

//게임 버튼 (뒤집기, 밀기, 당기기)
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

// 게임 버튼 실행시 단어 순서 변경
const changeStr = function (targetStr) {
  for (let i = 0; i < targetStr.length; i++) {
    let chStr = document.querySelectorAll(".string__button button");
    chStr[i].innerHTML = targetStr[i];
    checkStr();
  }
};

// 변경된 단어 순서와 처음 선택된 단어 매칭 프로그램
const checkStr = function () {
  if (titleStr.innerText === targetArray.join("")) {
    document.querySelector(".check").innerText = "일치합니다.";
  } else {
    document.querySelector(".check").innerText = "일치하지 않습니다.";
  }
};

// 화면 시작과 동시 실행 함수
game.choiceStr();
checkStr();

//화면 시작과 동시에 단어 순서 셔플
const toggle = Math.floor(Math.random() * 2) === 0;

if (toggle) {
  swap();
}

const n = Math.floor(Math.random() * targetArray.length);

for (let i = 0; i <= 0; i++) {
  shiftRight();
}
