const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.target.value;
});

if (textInput.target.value.trim() !== "") {
    output.textContent = textInput.target.value
} else {
  output.textContent = 'Anonymous'
}
