const inputForm = document.querySelector(".input__form");
const inputMaxNumber = document.querySelector(".input__max-number");
const showPrimeNumber = document.querySelector(".show__prime-number");

const numbers = {};
const numbersAll = [];
const numbersPrime = [];
let allPrimeNumber = "";

function addAll(event) {
  event.preventDefault();
  const inputValue = Number(inputMaxNumber.value);
  inputMaxNumber.value = "";
  for (var i = 2; i <= inputValue; i++) {
    numbers.all = numbersAll;
    numbers.all.push(i);
  }
  addPrime();
}

function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function addPrime() {
  for (var i = 0; i < numbersAll.length; i++) {
    var n = numbersAll[i];
    if (isPrime(n) === true) {
      numbersPrime.push(n);
      numbers.prime = numbersPrime;
    }
  }
  getNumbersPrime();
}

function getNumbersPrime() {
  allPrimeNumber += `소수는 총 ${numbersPrime.length} 개 입니다.<br><br>`;
  for (var i = 0; i < numbersPrime.length; i++) {
    allPrimeNumber += `${i + 1}번째 소수는 ${numbersPrime[i]}입니다.<br>`;
    showPrimeNumber.innerHTML = allPrimeNumber;
  }
}

inputForm.addEventListener("submit", addAll);
