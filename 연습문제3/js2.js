const inputForm = document.querySelector(".input__form");
const inputMaxNumber = document.querySelector(".input__max-number");
const showPrimeNumber = document.querySelector(".show__prime-number");

const numbers = {};
numbers.all = [];
numbers.prime = [];

numbers.addAll = function (event) {
  event.preventDefault();
  const inputValue = Number(inputMaxNumber.value);
  inputMaxNumber.value = "";
  for (var i = 2; i <= inputValue; i++) {
    numbers.all.push(i);
  }
  numbers.addPrime();
};

numbers.isPrime = function (number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

numbers.addPrime = function () {
  for (var i = 0; i < numbers.all.length; i++) {
    var n = numbers.all[i];
    if (numbers.isPrime(n) === true) {
      numbers.prime.push(n);
    }
  }
  numbers.getNumbersPrime();
};

numbers.getNumbersPrime = function () {
  let allPrimeNumber = "";
  allPrimeNumber += `소수는 총 ${numbers.prime.length} 개 입니다.<br><br>`;
  for (var i = 0; i < numbers.prime.length; i++) {
    allPrimeNumber += `${i + 1}번째 소수는 ${numbers.prime[i]}입니다.<br>`;
    showPrimeNumber.innerHTML = allPrimeNumber;
  }
};

inputForm.addEventListener("submit", numbers.addAll);
