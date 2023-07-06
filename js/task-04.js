let counterValue = 0;

const buttonDecrementElement = document.querySelector('[data-action="decrement"]');
buttonDecrementElement.addEventListener('click', buttonClickDown);

const buttonIncrimentElement = document.querySelector('[data-action="increment"]');
buttonIncrimentElement.addEventListener('click', buttonClickUp);

const valueElement = document.querySelector('#value');

function updateCounter () {
    valueElement.textContent = counterValue;
}

function buttonClickDown () {
    counterValue -= 1;
    updateCounter();
};

function buttonClickUp () {
    counterValue +=1;
    updateCounter ();
}

