const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredientsList = document.querySelector('#ingredients');

const ingredientsEl = elements => {
    return elements.map((element) => {
        const newEl = document.createElement('li');
       newEl.textContent = element
        return newEl;
    })
}
const listNewEl = ingredientsEl(ingredients);
ingredientsList.append(...listNewEl);