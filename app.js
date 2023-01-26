const form = document.querySelector(".form");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector("ul");
const body = document.querySelector("body");

const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }

  return color;
}

function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
  ${randomDeg}deg,
  ${color1},
  ${color2}
)`;

  body.style.background = bgColor;
}
setGradient();

// Buttons
button.addEventListener("click", (e) => {
  setGradient();
  e.preventDefault();
  input.value;
  let li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  li.style.listStyle = "none";

  let img = document.createElement("img");
  img.setAttribute("src", "delete.svg");
  img.style = `width:20px; height:16px; position: absolute;
  right: 480px;`;
  li.appendChild(img);

  img.addEventListener("click", () => {
    li.remove();
  });

  li.style = `
  list-style: none;
    margin-bottom: 10px;
    background: burlywood;
    width: 300px;
    height: 50px;
    border: 2px solid #866339;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    font-size: 20px;`;
});