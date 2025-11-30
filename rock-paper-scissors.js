// buttons
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const rockButton = document.querySelector("#rock");


// const choices=document.querySelector("#choices");
const gameMessage = document.querySelector("#gameMessage");
const roundNumber = document.querySelector("#roundNumber");
const humScore = document.querySelector("#humScore");
const compScore = document.querySelector("#compScore");
const newGame = document.querySelector(".reset");

//selections
const humSelection = document.querySelector("#humanSelecion");
const compSelection = document.querySelector("#computerSelection");

// Global variables for score keeping
let humanScore = 0;
let computerScore = 0;
let round = 0;
let humanChoice = "";

paperButton.addEventListener("click", (event) => {
  console.log("paper was clicked", event.target.id);
  playGame(event);
  // when we call a function, say paper was clicked
});

scissorsButton.addEventListener("click", (event) => {
  console.log("scissors was played", event);
  playGame(event);
  // when we call a function, say scissors was clicked
});

rockButton.addEventListener("click", (event) => {
  console.log("rock was played", event);
  playGame(event);
  // when we call a function, say rock was clicked
});

// New game reset event listener
newGame.addEventListener("click", (event) => {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  humanChoice = "";
  rockButton.disabled = false;
  scissorsButton.disabled = false;
  paperButton.disabled = false;

  gameMessage.textContent = "";
  compScore.textContent = `Computer Score: ${computerScore}` ;
  humScore.textContent = `Human Score: ${humanScore}`;
  roundNumber.textContent = `Round: ${round}`;
  humanSelection.textContent = `You Selected: ${humanChoice}`;
  computerSelection.textContent = `Computer Selected:` ;
});

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else if (random === 2) {
    return "scissors";
  }
}



function playGame(event) {
  const humanChoice = event.target.id;
  console.log("human choice, in the playgame function", humanChoice);


  if (computerScore || humanScore != 5) {
    playRound(humanChoice, getComputerChoice());
    round++;
    roundNumber.textContent = `Round: ${round}`;
  } if (computerScore === 5) {
    rockButton.disabled = true;
    scissorsButton.disabled = true;
    paperButton.disabled = true;
    gameMessage.textContent = "You lost! Click Start Over to play again!";
  } if ( humanScore === 5) {
    gameMessage.textContent = "You won the game! Click Start Over to play again!";
    rockButton.disabled = true;
    scissorsButton.disabled = true;
    paperButton.disabled = true;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("draw");
    gameMessage.textContent = "DRAW";
    humanSelection.textContent = `You Selected: ${humanChoice}`;
    computerSelection.textContent = `Computer Selected: ${computerChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    compScore.textContent= `Computer Score: ${computerScore}`;
    gameMessage.textContent = "You lose";
    humanSelection.textContent = `You Selected: ${humanChoice}`;
    computerSelection.textContent = `Computer Selected: ${computerChoice}`;
    console.log("You lose!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    humScore.textContent= `Human Score: ${humanScore}`;
    humanSelection.textContent = `You Selected: ${humanChoice}`;
    computerSelection.textContent = `Computer Selected: ${computerChoice}`;
    gameMessage.textContent = "You win!";
    console.log("You win! Rock beats scissors! Score:");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    humScore.textContent= `Human Score: ${humanScore}`;
    humanSelection.textContent = `You Selected: ${humanChoice}`;
    computerSelection.textContent = `Computer Selected: ${computerChoice}`;
    gameMessage.textContent = "You win! Paper beats rock!";
    console.log("You win! Paper beats rock!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    humScore.textContent= `Human Score: ${humanScore}`;
    humanSelection.textContent = `You Selected: ${humanChoice}`;
    computerSelection.textContent = `Computer Selected: ${computerChoice}`;
    gameMessage.textContent = "You win! Scissors beats paper!";
    console.log("You win! Scissors beats paper!");
  }
};

  