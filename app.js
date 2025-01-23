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
  let roundNumber = 0;

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

    roundNumber += 1;
    const currentScoreDisplay = document.querySelector(".current-score");
    currentScoreDisplay.textContent = `You're on round ${roundNumber}. The current score is ${humanScore}:${computerScore}.`;

    if (roundNumber == 5) {
      endGame();
    }
  }

  function endGame() {
    buttons.remove();
    document.querySelector(".intro-text").remove();
    document.querySelector(".status-text").remove();

    const finalStateDisplay = document.querySelector(".final-result");

    if (humanScore > computerScore) {
      finalStateDisplay.textContent = "You won the game!";
    } else if (humanScore < computerScore) {
      finalStateDisplay.textContent = "You lost the game.";
    } else {
      finalStateDisplay.textContent = "The final result was a tie.";
    }
  }
}

playGame();
