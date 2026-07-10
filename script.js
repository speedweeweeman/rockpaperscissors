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
    const startButton = document.createElement("div");

    startButton.textContent = "Click me to start!"

    startButton.classList.add("startButton");
    startButton.addEventListener('click', () => {
        body.removeChild(startButton);
        loadGame();
    });

    body.appendChild(startButton);
}

function loadGame() {
    // Creating selection boxes
    const body = document.querySelector("body");
    body.classList.add("bodyClass");
    
    const selectionSetComputer = document.createElement("div");
    selectionSetComputer.classList.add("selectionSet");

    const rockComputer = document.createElement("div");
    const paperComputer = document.createElement("div");
    const scissorsComputer = document.createElement("div");

    rockComputer.classList.add("selection", "rock");
    paperComputer.classList.add("selection", "paper");
    scissorsComputer.classList.add("selection", "scissors");

    selectionSetComputer.append(rockComputer, paperComputer, scissorsComputer);

    const selectionSetPlayer = selectionSetComputer.cloneNode(true);

    // Event delegation for player click mechanic
    selectionSetPlayer.addEventListener('click', function chosen(event) {
        event.target.classList.add("selected");
        startGame(event.target.classList);
        selectionSetPlayer.removeEventListener('click', chosen)
    });


    
    // Creating computer and player selection headers
    const computerHeader = document.createElement("div");
    const playerFooter = document.createElement("div");
    
    computerHeader.textContent = "Computer Choice";
    playerFooter.textContent = "Player Choice";
    
    computerHeader.classList.add("selectionSetMargin");
    playerFooter.classList.add("selectionSetMargin");
    
    body.append(computerHeader, selectionSetComputer, selectionSetPlayer, playerFooter);
}

function startGame(playerChoice) {
    console.log(playerChoice);
}


let humanScore = 0;
let computerScore = 0;

startScreen()