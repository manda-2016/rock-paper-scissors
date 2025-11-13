
//const paperButton= document.querySelector("#paper");
//const scissorsButton =document.getElementById("#scissors");
//const rockButton = document.getElementById("#rock");
const choices=document.querySelector(".buttons");
const gameMessage=document.querySelector("#gameMessage");
const roundNumber=document.querySelector("#roundNumber");
const humScore=document.querySelector("#humScore");
const compScore=document.querySelector('#compScore');
const newGame=document.querySelector(".reset");


let humanScore=0
let computerScore=0
let round= 0;
let humanChoice= "";

newGame.addEventListener("click", (event) => {
  humanScore = 0;
  computerScore = 0;
  round = 1;
  humanChoice = "";

  gameMessage.textContent = "";
  compScore.textContent = "";
  humScore.textContent = "";
  roundNumber.textContent= round;
});




function getComputerChoice (){
    let random=Math.floor(Math.random()*3); 


if (random===0) {
    return "rock";

} else if (random===1) {
    return "paper";

} else if (random===2) {
    return "scissors";
}  

}

//function getHumanChoice() {
    //let userChoice= prompt("Enter your choice:");
    //return userChoice.toLowerCase();
//};


function playGame () {
        



    //const computerChoice = getComputerChoice().toLowerCase()
    const humanChoice= Event.target


    function playRound (humanChoice,computerChoice) {
        

        if (humanChoice===computerChoice){
        console.log("draw");
        gameMessage.textContent="DRAW";

        } else if (
        (humanChoice==="rock" && computerChoice==="paper") ||
        (humanChoice==="paper" && computerChoice==="scissors") ||
        (humanChoice==="scissors" && computerChoice==="rock")) {

        computerScore++
        gameMessage.textContent = "You lose"; 
        console.log("You lose!");

        } else if (humanChoice==="rock" && computerChoice==="scissors") {
        humanScore++;
        gameMessage.textContent = "You win!"; 
        console.log("You win! Rock beats scissors! Score:");


        } else if (humanChoice==="paper" && computerChoice==="rock") {
        humanScore++;
        gameMessage.textContent = "You win! Paper beats rock!"; 
        console.log("You win! Paper beats rock!");


        } else if (humanChoice==="scissors" && computerChoice==="paper") {
        humanScore++;
        gameMessage.textContent = "You win! Scissors beats paper!"; 
        console.log("You win! Scissors beats paper!");    
        }
    }


    //console.log("Game Over Final Score:" + " " + "you:" + humanScore + " " + "computer:" + computerScore);


    buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
    if (round < 5) {
      humanChoice = event.currentTarget.className.split(" ")[0];
      playRound(humanChoice, getComputerChoice());
      gameMessage.textContent = `You ${humanScore} - ${computerScore} Computer`;
      round++;
      roundNumber.textContent = round;
    }

            if (round===5){
            if (humanScore > computerScore) {
            console.log("You won the game!");
            gameMessage.textContent= "You won the game!";

            } else if (humanScore < computerScore) {
            console.log("You lost! Reload page to try again.")
            gameMessage.textContent= "You lost! Click start game to play again!";

            } else if (humanScore === computerScore) {
            console.log("It's a tie!")
            gameMessage.textContent= "It's a tie!";
        }
    }
    });
    
    });
};