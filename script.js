 // Function that gets a random choice for the computer
 function getComputerChoice() {
    let choiceRandomizer = Math.random();

    if (choiceRandomizer < 1/3) {
        return "rock";
    } else if (choiceRandomizer < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
 }

 // Function that gets a random choice for the human
 function getHumanChoice() {
    let humanChoice = prompt("Enter your input:");

    return(humanChoice.toLowerCase())
 }

 // Function that plays a round
function playRound(humanChoice, computerChoice) {
    let win;

    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            win = true;
        } else if (computerChoice == "paper") {
            win = false;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            win = true;
        } else if (computerChoice == "scissors") {
            win = false;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            win = true;
        } else if (computerChoice == "rock") {
            win = false;
        }
    }

    if (win) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else if (win === false) {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else {
        console.log("You Tied! You both picked " + humanChoice);
    }

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);

}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

function startScreen() {
    const body = document.querySelector("body");
    const startButton = document.createElement("button");

    startButton.classList.add("startButton");

    body.appendChild(startButton);
}

let humanScore = 0;
let computerScore = 0;

startScreen()