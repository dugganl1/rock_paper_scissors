// Constants defined outside the function
const resultDiv = document.querySelector("#result");
let resultContent;

// Initialize the result content
document.addEventListener("DOMContentLoaded", () => {
  resultContent = document.createElement("p");
  resultDiv.appendChild(resultContent);
});

// Functions to play game
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  // Ensure choices are lowercase for consistency
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  // Check for a tie
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  // Define winning conditions
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // Check if human wins
  if (winConditions[humanChoice] === computerChoice) {
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

// Example usage:
function onButtonClick(buttonId) {
  const humanChoice = buttonId;
  const computerChoice = getComputerChoice(); // Assuming this function exists
  const result = playRound(humanChoice, computerChoice);
  console.log(result);

  // Update the UI with the result here
  resultContent.textContent = result;
}

// Attach this function to your buttons
document
  .getElementById("rock")
  .addEventListener("click", () => onButtonClick("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => onButtonClick("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => onButtonClick("scissors"));
