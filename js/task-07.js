const input = document.getElementById("font-size-control");
const output = document.getElementById("text");

input.addEventListener("input", () => {
let fontSize = input.value;
output.style.fontSize = fontSize + "px"
});