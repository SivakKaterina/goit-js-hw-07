// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
//     если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');
const isValid = () => {

    if (Number(input.value.length) === Number(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.remove("invalid"); 
    }
    else if (Number(input.value.length) === 0) {
        input.classList.remove("valid", "invalid");   
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        
    }
};

input.addEventListener('blur', isValid);