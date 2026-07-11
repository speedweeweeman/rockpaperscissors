 function loadEndScreen(win, humanChoice, comptuerChoice) {
    const body = document.querySelector("body");
    body.replaceChildren();
    
    const winTitle = document.createElement("h1");
    const score = document.createElement("p");
    const finishButton = document.createElement("button");

    if (win) {
        humanScore++;
        winTitle.textContent = "YOU WIN!"
    } else if (win === false) {
        computerScore++;
        winTitle.textContent = "YOU LOSE!"
    } else {
        winTitle.textContent = "YOU TIE!"
    }

    score.textContent = "Your score: " + humanScore + " | Computer score: " + computerScore;
    
    finishButton.textContent = "Play again?";
    finishButton.classList.add("finishButton");
    
    // Add event listener to finish button to restart game

    finishButton.addEventListener('click', startScreen);
    
    body.classList.add("finishBackground");
    body.append(winTitle, score, finishButton);
 }
 
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

 // Function that calculates the computer choice and final result
function playRound(humanChoice, computerChoice) {
    let win;
    const computerSelection = document.querySelector('.computerSelection');

    if (computerChoice == "rock") {
        if (humanChoice == "scissors") {
            win = false;
        } else if (humanChoice == "paper") {
            win = true;
        }

        const computerHighlight = computerSelection.querySelector('.rock');
        computerHighlight.classList.add("computerHighlighted");
    } else if (computerChoice == "paper") {
        if (humanChoice == "rock") {
            win = false;
        } else if (humanChoice == "scissors") {
            win = true;
        }

        const computerHighlight = computerSelection.querySelector('.paper');
        computerHighlight.classList.add("computerHighlighted");
    } else if (computerChoice == "scissors") {
        if (humanChoice == "paper") {
            win = false;
        } else if (humanChoice == "rock") {
            win = true;
        }

        const computerHighlight = computerSelection.querySelector('.scissors');
        computerHighlight.classList.add("computerHighlighted");
    }

    setTimeout(loadEndScreen, 1500, win, humanChoice, computerChoice);
}

// Function for initial start button
function startScreen() {
    const body = document.querySelector("body");
    body.replaceChildren();
    body.className = "";

    const startButton = document.createElement("div");

    startButton.textContent = "Click me to start!"

    startButton.classList.add("startButton");
    startButton.addEventListener('click', () => {
        body.removeChild(startButton);
        loadGame();
    });

    body.appendChild(startButton);
}

// Function that loads in all content and player selection
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
    selectionSetPlayer.classList.add("playerSelection");
    selectionSetComputer.classList.add("computerSelection");

    // Event delegation for player click mechanic
    selectionSetPlayer.addEventListener('click', function chosen(event) {
        event.target.classList.add("selected");
        startGame(event.target.classList);
        selectionSetPlayer.removeEventListener('click', chosen);
        selectionSetPlayer.classList.remove("playerSelection");
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

// Function that parses the player's choice and calls the round calculation
function startGame(playerChoice) {
    let chosenChoice = "";

    if (playerChoice.contains("rock")) {
        chosenChoice = "rock";
    } else if (playerChoice.contains("paper")) {
        chosenChoice = "paper";
    } else {
        chosenChoice = "scissors";
    }

    playRound(chosenChoice, getComputerChoice());
}


let humanScore = 0;
let computerScore = 0;

startScreen()