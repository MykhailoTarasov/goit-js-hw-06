const inputElement = document.querySelector('#validation-input');
inputElement.addEventListener('blur', validateInput);
const inputLength = Number(inputElement.dataset.length);

function validateInput () {
    if (inputElement.value.length === inputLength) {
        inputElement.classList.add ('valid');
        inputElement.classList.remove ('invalid');
    } else {
        inputElement.classList.add ('invalid');
        inputElement.classList.remove ('valid');
    }
};
