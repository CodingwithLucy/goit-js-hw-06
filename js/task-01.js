const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const header = category.querySelector("h2").innerText;
    console.log(`Category: ${header}`);

    const elements = category.querySelectorAll("li");
    console.log(`Elements: ${elements.length}`);
});