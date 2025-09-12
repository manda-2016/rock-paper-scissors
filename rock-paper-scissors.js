let humanScore=0
let computerScore=0


function getComputerChoice (){
    let random=Math.floor(Math.random()*3); 


if (random===0) {
    return "Rock";

} else if (random===1) {
    return "Paper";

} else if (random===2) {
    return "Scissors";
}  

}


function getHumanChoice() {
    const choice = prompt("Please enter rock, paper or scissors.");
    const lowerCasedchoice = choice.toLowerCase();

    if (choice === "rock" || "paper" || "scissors"); {
        return choice;
    }
}