const titleStr = document.querySelector(".string");
const buttonStr = document.querySelector(".string__button");
const progress = document.querySelector(".progress");

let game = { strArray: [], btns: [], maxPlay: 3, current: 1 };

// 여러 단어 중 랜덤으로 시작 단어를 선택
game.choiceStr = function () {
  this.strArray = ["HELLO", "SUNGUN", "SOOJIN", "SARANG", "SORRY", "MONEY"];
  this.randomStrArray =
    this.strArray[Math.floor(Math.random() * this.strArray.length)];
  this.targetArray = this.randomStrArray.split("");
  titleStr.innerHTML = this.targetArray.join("");
  game.showSrt();
};

// 선택돤 단어(targetArray)를 화면에 표시
game.showSrt = function () {
  for (let i = 0; i < this.randomStrArray.length; i++) {
    let showTarget = document.createElement("button");
    buttonStr.appendChild(showTarget);
    this.btns.push(showTarget);
  }
};

game.copyBtnText = function () {
  for (let i = 0; i < this.randomStrArray.length; i++) {
    this.btns[i].innerHTML = this.targetArray[i];
  }
};

//게임 버튼 (뒤집기, 밀기, 당기기)
const swap = function () {
  game.targetArray = game.targetArray.reverse();
  targetStr = game.targetArray.join("");
  changeStr(targetStr);
};

const shiftRight = function () {
  let lastArray = game.targetArray[game.targetArray.length - 1];
  game.targetArray.splice(game.targetArray.length - 1, 1);
  game.targetArray.unshift(lastArray);
  targetStr = game.targetArray.join("");
  changeStr(targetStr);
};

const shiftLeft = function () {
  let lastArray = game.targetArray[0];
  game.targetArray.splice(0, 1);
  game.targetArray.push(lastArray);
  targetStr = game.targetArray.join("");
  changeStr(targetStr);
};

// 게임 버튼 실행시 단어 순서 변경
const changeStr = function (targetStr) {
  for (let i = 0; i < targetStr.length; i++) {
    let chStr = document.querySelectorAll(".string__button button");
    chStr[i].innerHTML = targetStr[i];
    game.checkStr();
  }
};

// 변경된 단어 순서와 처음 선택된 단어 매칭 프로그램
game.checkStr = function () {
  if (titleStr.innerText === this.targetArray.join("")) {
    document.querySelector(".check").innerText = "일치합니다.";
  } else {
    document.querySelector(".check").innerText = "일치하지 않습니다.";
  }
};

//화면 시작과 동시에 단어 순서 셔플
game.shuffle = function () {
  const toggle = Math.floor(Math.random() * 2) === 0;

  if (toggle) {
    swap();
  }

  const n = Math.floor(Math.random() * (this.randomStrArray.length - 1));

  for (let i = 0; i < n; i++) {
    shiftRight();
  }
};

// 화면 시작과 동시 실행 함수
game.init = function () {
  this.choiceStr();
  this.copyBtnText();
  this.shuffle();
  this.checkStr();
};
game.init();
