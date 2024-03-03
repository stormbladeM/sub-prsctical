"use strict";
// document.querySelector(".user-guess").value = 23;
// console.log(document.querySelector(".user-guess").value);
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
console.log(randomNumber);

//let comp = (document.querySelector(".computer-guess").textContent =
//randomNNumber);
document.querySelector(".check").addEventListener("click", function () {
  //console.log(document.querySelector(".user-guess").value);
  let guess = Number(document.querySelector(".user-guess").value);
  if (!guess) {
    document.querySelector(".start").textContent = "⛔ Not a valid guess";
  } else if (guess > randomNumber) {
    if (score > 0) {
      document.querySelector(".start").textContent = "⛔ Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "💥 you lost the game";
    }
  } else if (guess < randomNumber) {
    if (score > 0) {
      document.querySelector(".start").textContent = "⛔ Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "💥 you lost the game";
    }
  } else if (guess === randomNumber) {
    document.querySelector(".start").textContent = "🏆 correct guess";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".computer-guess").textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".high-score").textContent = highscore;
    }
  }
});
document.querySelector(".king").addEventListener("click", function () {
  score = 20;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".start").textContent = "start guessing";
  document.querySelector(".score").textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".user-guess").value = "";
  document.querySelector(".computer-guess").textContent = "?";
  console.log(randomNumber);
});
