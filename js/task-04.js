const counter = document.getElementById("counter");
let counterValue = 0;
const valueElement = document.getElementById("value");

counter.addEventListener("click", function(act) {
  if (act.target.dataset.action === "decrement") {
  counterValue -= 1;
  } else if (act.target.dataset.action === "increment") {
    counterValue += 1;
  }
  valueElement.textContent = counterValue;
}
);