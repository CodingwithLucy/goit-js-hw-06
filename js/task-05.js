const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {

  if (input.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value.trim();
  }
});