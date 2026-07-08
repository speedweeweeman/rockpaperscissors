 function getComputerChoice() {
    let choiceRandomizer = Math.random();

    if (choiceRandomizer < 1/3) {
        return "Rock";
    } else if (choiceRandomizer < 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
 }

 function getHumanChoice() {
    let humanChoice = prompt("Enter your input:");

    return(humanChoice)
 }

let humanScore;
let computerScore;

