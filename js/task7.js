// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text оновлюючи властивість font - size.
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const input = document.querySelector("#font-size-control");
const spanSize = document.querySelector("#text");

input.addEventListener("input", controlFontSize);

function controlFontSize(event) {
  spanSize.style.fontSize = `${input.value}px`;
}
