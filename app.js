"use strict";

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 300) % 3;
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      throw new Error("Internal error: failed to parse random number.");
  }
}

function getHumanChoice() {
  let userString;
  while (
    userString !== "rock" &&
    userString !== "paper" &&
    userString !== "scissors"
  ) {
    userString = prompt("Choose your object: rock, paper, or scissors.");
  }
}


