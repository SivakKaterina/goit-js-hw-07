// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const valueWindowRef = document.querySelector('input[type = "number"]');
const createBtnRef = document.querySelector('button[data-action="render"]');
const deleteBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesContainerRef = document.querySelector('#boxes');
let amount = 0;

function onGetInputValue(event) {
    amount = +event.target.value; 
    console.dir(event.target);
};

valueWindowRef.addEventListener("input", onGetInputValue);
createBtnRef.addEventListener('click', function()  {
    const divBoxes = createBoxes(amount);
    console.log(divBoxes);
    boxesContainerRef.append(...divBoxes);
     console.log(amount);
});

deleteBtnRef.addEventListener('click', function () {
    boxesContainerRef.innerHTML = '';
});

function createBoxes(amount) {
    return [...Array(amount)].map((_, i) => +i).map(el => {
        const newDivBoxes = document.createElement('div')
        newDivBoxes.style.backgroundColor = `${
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
            }`;
        newDivBoxes.style.width = `${30 + 10*el}px`;
        newDivBoxes.style.height = `${30 + 10 * el}px`;
        newDivBoxes.style.margin = '30px';
        return newDivBoxes
    })
};

console.log(boxesContainerRef);

