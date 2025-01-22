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

  // TODO(mulmer): Change status-text to "You are on round X" once the game starts.
  // TODO(mulmer): Add div for current store below button containers.

  function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    //   These human-readable strings represent a win/tie/loss from the perspective of the user.
    let winString = `You won, ${humanChoice} beats ${computerChoice}!`;
    let tieString = `There was a tie, you and the computer both chose ${humanChoice}.`;
    let lossString = `You lost, ${computerChoice} beats ${humanChoice}!`;

    let displayString;
    if (humanChoice === computerChoice) {
      console.log(tieString);
      return;
    }

    if (didPlayerOneWin(humanChoice, computerChoice)) {
      console.log(winString);
      humanScore++;
    } else {
      console.log(lossString);
      computerScore++;
    }
  }
}

playGame();
