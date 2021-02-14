// В HTML є пустий список ul#ingredients
// В JS є масив рядків.
// Напиши скрипт, який для кожного елемента масиву ingredients
// створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsRef = document.querySelector("#ingredients");

const createIngredient = (ingredient) => {
  const ingredientRef = document.createElement("li");
  ingredientRef.textContent = `${ingredient}`;
  ingredientsRef.appendChild(ingredientRef);
  return ingredientRef;
};
ingredients.forEach((ingredient) => console.log(createIngredient(ingredient)));
