function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

function changeColor() {
  const getColor = getRandomHexColor();
  body.style.backgroundColor = getColor;
  span.textContent = getColor;
}
btn.addEventListener("click", changeColor);