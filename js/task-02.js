const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
// console.log(list);

const itemIngridientsArr = ingredients.map((itemData) => {
  const itemElement = document.createElement('li');
  itemElement.textContent = itemData;
  itemElement.classList.add('item');
  return itemElement;
})

// console.log(itemIngridientsArr);

list.append(...itemIngridientsArr);

