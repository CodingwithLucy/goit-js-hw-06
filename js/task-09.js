function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

function newColor() {
  const newBackground = getRandomHexColor();
  document.body.style.backgroundColor = newBackground;
  spanColor.textContent = newBackground
};

changeColor.addEventListener("click", newColor);
