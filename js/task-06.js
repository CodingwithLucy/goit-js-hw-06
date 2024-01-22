document.getElementById("validation-input").addEventListener("blur", function() {
    const inputLength = this.value.length;
    const correctLength = this.getAttribute("data-length");
  
    if (inputLength == correctLength) {
      this.classList.add("valid");
      this.classList.remove("invalid");
    } else {
      this.classList.add("invalid");
      this.classList.remove("valid");
    }
  });