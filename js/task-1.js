// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
const CategoriesEl = document.querySelectorAll('li.item');
const quantityCategories = CategoriesEl.length;

console.log(`В списке ${quantityCategories} категории.`)

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
//  const titleEl = getElementById.querySelector('h2')
// console.log(`Категория: ${titleEl.textContent}`)

Array.from(CategoriesEl).map((item) => {
  console.log(`Category: ${item.firstElementChild.textContent} has ${item.querySelectorAll('li').length} elements`)
})