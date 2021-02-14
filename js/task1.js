// В HTML є список категорій ul#categories.
// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2)
// і кількість елементів в категорії(всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4

const itemsRef = document.querySelectorAll("li.item");
console.log(itemsRef.length);

itemsRef.forEach((categoriesRef) => {
  const titleRef = categoriesRef.querySelector("h2");
  console.log(`Категорія:${titleRef.textContent}`);
  const allItemsRef = categoriesRef.querySelectorAll("li.item ul li");

  console.log(`Кількість елементів:${allItemsRef.length}`);
});
