const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  const humanChoice = prompt("1 for rock, 2 for paper, 3 for scissors");

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice > computerChoice) {
    console.log("Human wins");
  } else {
    console.log("Computer wins");
  }
}

playRound(humanChoice, computerChoice3);
