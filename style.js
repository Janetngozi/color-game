const buttons = document.querySelectorAll(".box1");
const box = document.querySelector(".box");
const boxx = document.querySelector(".boxx");
const score = document.querySelector(".score");
const reset = document.querySelector(".reset");
const scoreNumberElement = document.querySelector(".scorenumber");

let scoreNumber = 0;
const colors = ["red", "yellow", "green", "orange", "blue", "purple"];

function randomColor(selectedColor) {
  let randomIndex = Math.floor(Math.random() * colors.length);
  console.log(randomIndex);

  let generatedColor = colors[randomIndex];

  updateResult(generatedColor === selectedColor);

  box.style.background = generatedColor;
}

function updateResult(status) {
  if (status) {
    boxx.innerText = "Correct";
    scoreNumber += 1;
  } else {
    boxx.innerText = "wrong";
  }
  scoreNumberElement.innerText = scoreNumber;
}

buttons.forEach((btn) => {
  let selectedColor = btn.innerText.toLowerCase();

  btn.addEventListener("click", () => {
    randomColor(selectedColor);
  });
});
reset.addEventListener("click", () => {
  scoreNumber = 0;
  box.style.background = "none";
  scoreNumberElement.innerText = scoreNumber;
  boxx.innerText = "";
});

// randomColor();
