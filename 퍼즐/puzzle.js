const targetWord = document.querySelector(".string");
const buttonStr = document.querySelector(".string__button");
const progress = document.querySelector(".progress");
const timeCheck = document.querySelector(".time__check");

let game = { wordsArray: [], btns: [], maxPlay: 3, current: 0 };

game.startTime = Date.now();

// 여러 단어 중 랜덤으로 시작 단어를 선택
game.choiceWord = function () {
  this.wordsArray = ["HELLO", "SUNGUN", "SOOJIN", "SARANG", "SORRY", "MONEY"];
  this.randomWordStr =
    this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
  this.randomWordArray = this.randomWordStr.split("");
  targetWord.innerHTML = this.randomWordArray.join("");
  game.getButtons();
};

// randomWordSrt의 길이 만큼 button 추가
game.getButtons = function () {
  for (let i = 0; i < this.randomWordStr.length; i++) {
    let showTarget = document.createElement("button");
    buttonStr.appendChild(showTarget);
    this.btns.push(showTarget);
  }
};

// 각 버튼에 텍스트 추가
game.copyBtnText = function () {
  for (let i = 0; i < this.randomWordStr.length; i++) {
    this.btns[i].innerHTML = this.randomWordArray[i];
  }
};

//게임 버튼 (뒤집기, 밀기, 당기기)

game.swap = function () {
  this.randomWordArray = this.randomWordArray.reverse();
  this.changeStr();
};

const swap = function () {
  game.swap();
};

game.shiftRight = function () {
  let lastArray = this.randomWordArray[this.randomWordArray.length - 1];
  this.randomWordArray.splice(this.randomWordArray.length - 1, 1);
  this.randomWordArray.unshift(lastArray);
  this.changeStr();
};

const shiftRight = function () {
  game.shiftRight();
};

game.shiftLeft = function () {
  let lastArray = this.randomWordArray[0];
  this.randomWordArray.splice(0, 1);
  this.randomWordArray.push(lastArray);
  this.changeStr();
};

const shiftLeft = function () {
  game.shiftLeft();
};

// 게임 버튼 실행시 단어 순서 변경
game.changeStr = function () {
  for (let i = 0; i < this.randomWordArray.length; i++) {
    let chStr = document.querySelectorAll(".string__button button");
    chStr[i].innerHTML = this.randomWordArray[i];
    this.checkStr();
  }
};

// 변경된 단어 순서와 처음 선택된 단어 매칭 프로그램
game.checkStr = function () {
  if (targetWord.innerText === this.randomWordArray.join("")) {
    document.querySelector(".check").innerText = "일치합니다.";
    this.progress();
  } else {
    document.querySelector(".check").innerText = "일치하지 않습니다.";
  }
};

//화면 시작과 동시에 단어 순서 셔플
game.shuffle = function () {
  const toggle = Math.floor(Math.random() * 2) === 0;

  if (toggle) {
    this.swap();
  }

  const n = Math.floor(Math.random() * (this.randomWordStr.length - 1));

  for (let i = 0; i <= n; i++) {
    this.shiftRight();
  }
};

//게임을 성공하면 다시 실행
game.resetGame = function () {
  let btnsText = document.querySelectorAll(".string__button button");
  for (let i = 0; i < btnsText.length; i++) {
    buttonStr.removeChild(btnsText[i]);
  }
  this.init();
};

//게임 성공시 "O" 표시 , 3번 성공시 클리어 멘트
game.progress = function () {
  this.current++;
  this.resetGame();
  let str = "";
  for (let i = 0; i < this.current; i++) {
    str += "O";
    progress.innerHTML = str;
  }

  if (this.current === this.maxPlay) {
    this.FinishTime = Date.now();
    let recordTime = ((this.FinishTime - this.startTime) / 1000).toFixed(1);
    alert(`Good! Your record is ${recordTime}s`);
    clearInterval(updateTime);
    str = "";
    progress.innerHTML = str;
    this.current = 0;
    this.startTime = Date.now();
  }
};

// 화면 시작과 동시 실행 함수
game.init = function () {
  this.choiceWord();
  this.copyBtnText();
  this.shuffle();
  this.checkStr();
};
game.init();

// 게임 진행 시간 표시
const updateTime = function () {
  let now = (Date.now() - game.startTime) / 1000;
  timeCheck.innerText = now.toFixed(2);
};

setInterval(updateTime, 110);
