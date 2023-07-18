const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const itemCategory = categories.forEach(function (category) {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.childElementCount
    );
});

