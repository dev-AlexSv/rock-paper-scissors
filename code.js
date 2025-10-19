function getComputerChoice() {
    let number = Math.round(Math.random() * 2);

    if (number === 0) {
        choice = "rock";
    } else if (number === 1) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice;
}

function getPlayerChoice() {
    let choice = prompt("Choose Between Rock, Paper or Scissors");
    return choice;
}

function playRound(selection) {
    let computerChoice = getComputerChoice();

    if (selection.toLowerCase === "rock") {
        if (computerChoice === "paper") {
            results.textContent = "Computer wins this round";
            computerScore++;
        } else if (computerChoice === "scissors") {
            results.textContent = "Player wins this round";
            playerScore++;
        } else {
            results.textContent =  "No winner this round";
        }
    } else if (selection.toLowerCase === "scissors") {
        if (computerChoice === "rock") {
            results.textContent =  "Computer wins this round";
            computerScore++;
        } else if (computerChoice === "paper") {
            results.textContent =  "Player wins this round";
            playerScore++;
        } else {
            results.textContent = "No winner this round";
        }
    } else {
        if (computerChoice === "scissors") {
            results.textContent =  "Computer wins this round";
            computerScore++;
        } else if (computerChoice === "rock") {
            results.textContent =  "Player wins this round";
            playerScore++;
        } else {
            results.textContent = "No winner this round";
        }
    }
    console.log(playerScore, computerScore);
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
//     showWinner(computerScore, playerScore);
// }



function showWinner(computerScore, playerScore) {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            results.textContent = "Player has won the game";
             results.style["background-color"] = "green";
        } else {
            results.textContent = "Computer has won the game";
            results.style["background-color"] = "red";
        }

        rockButton.style["display"] = "none";
        paperButton.style["display"] = "none";
        scissorsButton.style["display"] = "none";
        playAgainButton.style["visibility"] = "visible";
    }
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;

    results.textContent = "";
    rockButton.style["display"] = "";
    paperButton.style["display"] = "";
    scissorsButton.style["display"] = "";
    playAgainButton.style["visibility"] = "hidden";
}
let computerScore = 0;
let playerScore = 0;


// Event Listeners per button
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector(".results");

const playAgainButton = document.querySelector(".bt-reset");



rockButton.addEventListener("click", () => {
    let playerChoice = "rock";
    playRound(playerChoice);
    showWinner(computerScore, playerScore);
});

paperButton.addEventListener("click", () => {
    let playerChoice = "paper";
    playRound(playerChoice);
    showWinner(computerScore, playerScore);
});

scissorsButton.addEventListener("click", () => {
    let playerChoice = "scissors";
    playRound(playerChoice);
    showWinner(computerScore, playerScore);
});


playAgainButton.addEventListener("click", resetGame);


