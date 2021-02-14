// Напиши скрипт який, при наборі тексту в інпут input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.
// якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const inputText = document.querySelector("#name-input");

const outputText = document.querySelector("#name-output");
let noName = "";

function inputTextValue(event) {
  if (event.currentTarget.value !== noName) {
    outputText.textContent = event.currentTarget.value || "незнайомець";
  }
}
inputText.addEventListener("input", inputTextValue);
