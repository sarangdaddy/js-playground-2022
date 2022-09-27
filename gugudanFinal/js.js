const inputForm = document.querySelector(".input__form");
const inputValue = document.querySelector(".input__value");
const inputShow = document.querySelector(".input__clone");

function getGugudan(event) {
  event.preventDefault();

  const results = [];
  const inputNumber = inputValue.value;
  const data = inputNumber.split(",");
  const n = data[0];
  const maxNumber = data[1];
  inputValue.value = "";
  for (var i = 1; i <= maxNumber; i++) {
    results[i] = n * i;
  }
  printGugudan(n, maxNumber, results);
}

function printGugudan(n, maxNumber, results) {
  for (var i = 1; i <= maxNumber; i++) {
    let span = document.createElement("span");
    const br = document.createElement("br");
    span = `${n} X ${i} = ${results[i]}`;
    inputShow.append(span);
    inputShow.append(br);
  }
}

//** 제거 함수 **//
function remove() {
  span = inputShow.querySelectorAll("span");
  br = inputShow.querySelectorAll("br");
  inputShow.remove(span);
  inputShow.remove(br);
}

inputForm.addEventListener("submit", getGugudan);

// 음
// n maxNumber 를 입력하였을떄
// const checkExistItem = ({n : findN,maxNumber : findI}) => {
//   const result = array.find(({n,maxNumber}) => if(n === findN && maxNumber === findI))
// }
// 이런식으로 기존배열에서 입력받은 n i 가있는지 확인해보시면될거에여
