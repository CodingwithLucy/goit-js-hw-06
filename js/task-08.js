const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
event.preventDefault();
const email = event.target.elements.email.value;
const password = event.target.elements.password.value;

if (email === "" || password === "") {
return alert("Please fill in all the fields!");
}

const obtainedData = {
email: email,
password: password
}

console.log(obtainedData);
event.target.reset();
}