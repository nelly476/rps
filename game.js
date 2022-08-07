const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const score = document.querySelector("#score");
const computerWon = document.querySelector("#computerWon");
const playerWon = document.querySelector("#playerWon");
const finish = document.querySelector("#finish");

let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent.toLowerCase();
    computer = computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  let random = Math.random();
  if (random <= 0.3333) {
    return "paper";
  } else if (random >= 0.6666) {
    return "rock";
  } else {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function addPoint() {
  playerScore++;
  playerWon.textContent = `Your score: ${playerScore}`;
  if (playerScore == 5) {
    alert("You won the game!");
  }
}

function noPoint() {
  computerScore++;
  computerWon.textContent = `Computer's score ${computerScore}`;
  if (computerScore == 5) {
    alert("You lost the game:(");
  }
}

function checkWinner() {
  if (player == computer) return "It's a tie...";
  else if (computer === "rock" && player === "paper") {
    addPoint();
    return "You win!";
  } else if (computer === "paper" && player === "rock") {
    noPoint();
    return "You lose!";
  } else if (computer === "paper" && player === "scissors") {
    addPoint();
    return "You win!";
  } else if (computer === "scissors" && player === "paper") {
    noPoint();
    return "You lose!";
  } else if (computer === "scissors" && player === "rock") {
    addPoint();
    return "You win!";
  } else if (computer === "rock" && player === "scissors") {
    noPoint();
    return "You lose!";
  }
}
