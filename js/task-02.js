const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulItem = document.getElementById("ingredients");

const items = ingredients.map((ingredient) => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList.add("item");
  return liItem;
})

ulItem.append(...items)