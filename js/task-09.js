function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

changeColorBtn.addEventListener ('click' , colorChange);

function colorChange (event) {
  const newColor = getRandomHexColor ();
  body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
}
