


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


function getHumanChoice() {
    const choice = prompt("Please enter rock, paper or scissors.");
    const lowerCasedchoice = choice.toLowerCase();

    if (lowerCasedchoice === "rock" || "paper" || "scissors") {
        return choice;
    } else {
        window.alert("please enter rock, paper, or scissors");
    }
}


function playGame () {
        let humanScore=0
        let computerScore=0


    function playRound(humanChoice,computerChoice) {
        if (humanChoice===computerChoice){
        console.log("draw")

        } else if (
        (humanChoice==="rock" && computerChoice==="paper") ||
        (humanChoice==="paper" && computerChoice==="scissors") ||
        (humanChoice==="scissors" && computerChoice==="rock")) {

        computerScore++
        console.log("You lose!")

        } else if (humanChoice==="rock" && computerChoice==="scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors! Score:");


        } else if (humanChoice==="paper" && computerChoice==="rock") {
        humanScore++;
        console.log("You win! Paper beats rock!");


        } else if (humanChoice==="scissors" && computerChoice==="paper") {
        humanScore++;
        console.log("You win! Scissors beats paper!");    
        }
    }
    console.log("Round 1");
     playRound(getHumanChoice(), getComputerChoice());

    console.log("Round 2");
     playRound(getHumanChoice(), getComputerChoice());

    console.log("Round 3");
     playRound(getHumanChoice(), getComputerChoice());

    console.log("Round 4");
     playRound(getHumanChoice(), getComputerChoice());

    console.log("Round 5");
     playRound(getHumanChoice(), getComputerChoice());

     console.log("Game Over! Final Score!");
     
     if (humanScore > computerScore) {
        console.log("You won the game!")

     } else {
        console.log("You lost! Reload page to try again.)
        } 

}
playGame()
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

