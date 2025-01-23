"use strict";

let ROCK = "rock";
let PAPER = "paper";
let SCISSORS = "scissors";

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 300) % 3;
  switch (choice) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
    default:
      throw new Error("Internal error: failed to parse random number.");
  }
}

function getHumanChoice() {
  let userString;
  while (
    userString !== ROCK &&
    userString !== PAPER &&
    userString !== SCISSORS
  ) {
    userString = prompt("Choose your object: rock, paper, or scissors.");
    userString = userString.toLowerCase();
  }
  return userString;
}

function didPlayerOneWin(choice1, choice2) {
  switch (choice1) {
    case ROCK:
      if (choice2 === SCISSORS) {
        return true;
      } else if (choice2 === PAPER) {
        return false;
      }
      break;
    case PAPER:
      if (choice2 === SCISSORS) {
        return false;
      } else if (choice2 === ROCK) {
        return true;
      }
      break;
    case SCISSORS:
      if (choice2 === ROCK) {
        return false;
      } else if (choice2 === PAPER) {
        return true;
      }
      break;
  }
  throw new Error("Internal error: choice invalid when selecting winner.");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game.");
  }
  console.log("Thanks for playing.");

  const buttons = document.querySelector(".button-container");
  buttons.addEventListener("click", (event) => {
    playRoundAndUpdateUi(event.target.className);
  });

  function playRoundAndUpdateUi(humanChoice) {
    let computerChoice = getComputerChoice();

    const roundResultDisplay = document.querySelector(".round-result");
    if (humanChoice === computerChoice) {
      roundResultDisplay.textContent = `There was a tie, you and the computer both chose ${humanChoice}.`;
    } else if (didPlayerOneWin(humanChoice, computerChoice)) {
      roundResultDisplay.textContent = `You won, ${humanChoice} beats ${computerChoice}!`;
      humanScore++;
    } else {
      roundResultDisplay.textContent = `You lost, ${computerChoice} beats ${humanChoice}!`;
      computerScore++;
    }

    // TODO(mulmer): Set this correctly after re-introducing rounds.
    let roundNumber = 1;
    const currentScoreDisplay = document.querySelector(".current-score");
    currentScoreDisplay.textContent = `You're on round ${roundNumber}. The current score is ${humanScore}:${computerScore}.`;
  }
}

playGame();
