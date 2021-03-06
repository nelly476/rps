function computerPlay() {
  let random = Math.random();
  if (random <= 0.3333) {
    return "paper";
  } else if (random >= 0.6666) {
    return "rock";
  } else {
    return "scissors";
  }
}

function playRound() {
  const computerSelection = computerPlay();
  let playerSelection = prompt("Choose something", "rock");
  if (
    computerSelection === "rock" &&
    playerSelection.toLowerCase() === "paper"
  ) {
    userScore++;
    return win;
  } else if (
    computerSelection === "paper" &&
    playerSelection.toLowerCase() === "rock"
  ) {
    computerScore++;
    return lose;
  } else if (
    computerSelection === "paper" &&
    playerSelection.toLowerCase() === "scissors"
  ) {
    userScore++;
    return win;
  } else if (
    computerSelection === "scissors" &&
    playerSelection.toLowerCase() === "paper"
  ) {
    computerScore++;
    return lose;
  } else if (
    computerSelection === "scissors" &&
    playerSelection.toLowerCase() === "rock"
  ) {
    userScore++;
    return win;
  } else if (
    computerSelection === "rock" &&
    playerSelection.toLowerCase() === "scissors"
  ) {
    computerScore++;
    return lose;
  } else {
    return tie;
  }
}

let win = "You win";
let lose = "You lose";
let tie = "It's a tie";

let userScore = parseInt(0);
let computerScore = parseInt(0);

for (let i = 0; i < 5; i++) {
  console.log(playRound());
  console.log("your score = " + userScore);
  console.log("Computer's score = " + computerScore);
}
