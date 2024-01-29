const box = document.querySelector(".box");
const buttonCreate = document.querySelector("button[data-create]")
const buttonDestroy = document.querySelector("button[data-destroy]")
const input = document.querySelector("input")

buttonCreate.addEventListener("click", () => {
    if (Number(input.value) >= 1 && Number(input.value) <= 100) {
        createBoxes(Number(input.value));
    }
})

buttonDestroy.addEventListener("click", destroyBoxes)

function createBoxes(el) {
    let startSize = 10;
    let divArr = [];
    for (let i = 0; i < el; i += 1) {
       const div = `<div class"box-mini" style="background-color: ${getRandomHexColor()};
       display: block; margin: 0 20px 0 20px;
       width: ${startSize}px; height: ${startSize}px;"></div>`;
       divArr.push(div);
       startSize += 10;
    }
    box.insertAdjacentHTML("beforeend", divArr.join(""));
    input.value = "";
}