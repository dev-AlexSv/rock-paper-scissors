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

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerChoice.toLowerCase === "rock") {
        if (computerChoice === "paper") {
            alert("Computer wins this round...");
            computerScore++;
        } else if (computerChoice === "scissors") {
            alert("Player wins this round...");
            playerScore++;
        } else {
            alert("No winner this round...");
        }
    } else if (playerChoice.toLowerCase === "scissors") {
        if (computerChoice === "rock") {
            alert("Computer wins this round...");
            computerScore++;
        } else if (computerChoice === "paper") {
            alert("Player wins this round...");
            playerScore++;
        } else {
            alert("No winner this round...");
        }
    } else {
        if (computerChoice === "scissors") {
            alert("Computer wins this round...");
            computerScore++;
        } else if (computerChoice === "rock") {
            alert("Player wins this round...");
            playerScore++;
        } else {
            alert("No winner this round...");
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
    if (playerScore > computerScore) {
        alert("Player has won the game");
    } else if (playerScore < computerScore) {
        alert("Computer has won the game");
    } else {
        alert("Computer and player is tied. No winner")
    }
}

let computerScore = 0;
let playerScore = 0;


let buttonElement = document.getElementById("start-button");
console.log(buttonElement);

// Event Listeners per button
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {

});

paperButton.addEventListener("click", () => {

});

scissorsButton.addEventListener("click", () => {

});



