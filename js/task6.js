// Напиши скрипт, який би при втраті фокуса на інпут,
// перевіряв його вміст на правильну кількість символів.

// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

const input = document.querySelector("#validation-input");

input.addEventListener("blur", lostFocus);

function lostFocus() {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
