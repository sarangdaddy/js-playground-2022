const showPrimeNumber = document.querySelector(".show");

const numbers = {};

function addAllNumbers() {
  const numbersAll = [];
  for (var i = 1; i <= 10000; i++) {
    numbersAll.push(i);
    numbers.all = numbersAll;
  }
}

const numbersPrime = [];
const isPrime = true;

if (number <= 1) {
  isPrime = false;
} else if (number === 2) {
  isPrime = true;
} else {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      console.log(isPrime, i);
      break;
    }
  }
}

if (isPrime === true) {
  numbersPrime.push(isPrime);
}

addAllNumbers();
