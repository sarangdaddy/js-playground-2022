const showPrimeNumber = document.querySelector(".show");

const numbers = {};

function addAllNumbers() {
  const numbersAll = [];
  for (var i = 1; i <= 10000; i++) {
    numbersAll.push(i);
    numbers.all = numbersAll;
  }
}

function isPrimeNumber() {
  const numbersPrime = [];
  for (var i = 1; i <= 10000; i++) {
    for (var j = 1; j <= i; j++) {
      if (i % j === 0) {
        numbersPrime.push(i);
        numbers.prime = numbersPrime;
      }
    }
  }
}

addAllNumbers();
isPrimeNumber();
