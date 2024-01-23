const input = document.getElementById("font-size-control");
const output = document.getElementById("text");

output.style.fontSize = input.value + "px";

input.addEventListener("input", () => {
let fontSize = input.value;
output.style.fontSize = fontSize + "px"
});