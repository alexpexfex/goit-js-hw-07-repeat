// Лічильник складається зі спана і кнопок, які повинні збільшувати і
// зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

const accountTotal = document.querySelector("#value");
console.log(accountTotal);
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const incrementRef = function () {
  counterValue += 1;
  accountTotal.textContent = counterValue;
};
const decrementRef = function () {
  counterValue -= 1;
  accountTotal.textContent = counterValue;
};

incrementBtn.addEventListener("click", incrementRef);

decrementBtn.addEventListener("click", decrementRef);
