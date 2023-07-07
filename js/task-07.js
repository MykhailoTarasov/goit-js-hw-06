const inputElement = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

inputElement.addEventListener ('input', change);

function change () {
    textElement.style.fontSize = inputElement.value + "px";
};
change();

