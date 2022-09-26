const inputForm = document.querySelector(".input__form");
const inputValue = document.querySelector(".input__value");
const inputShow = document.querySelector(".input__clone");

function getGugudan() {
  const results = [];
  for (var n = 2; n <= 9; n++) {
    for (var i = 1; i <= 9; i++) {
      results[i] = n * i;
    }
  }
  console.log(results);
}

inputForm.addEventListener("submit", getGugudan);
