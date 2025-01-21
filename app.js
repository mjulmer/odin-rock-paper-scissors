"use strict";

let humanScore = 0;
let computerScore = 0;

let ROCK = "rock"
let PAPER = "paper"
let SCISSORS = "scissors"

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
}


