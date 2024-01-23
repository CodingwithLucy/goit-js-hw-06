const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const dataCreate = controls.querySelector('[data-create]');
const dataDestroy = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  const boxesArray = [];

  if (
    amount >= Number(input.attributes.min.value) &&
    amount<= Number(input.attributes.max.value)
  ) {
    for (let i = 1; i <= amount; i += 1) {
      const box = document.createElement("div");
      box.style.width = `${30 + (i - 1) * 10}px`;
      box.style.height = `${30 + (i - 1) * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesArray.push(box);
    }

    boxes.append(...boxesArray);
  } else {
    alert("wpisz liczbę z 1 dо 100");
  }
}

function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

dataCreate.addEventListener('click', () => createBoxes(input.value));
dataDestroy.addEventListener('click', destroyBoxes);