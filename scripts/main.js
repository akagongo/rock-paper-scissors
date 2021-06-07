/*
ask the user to choose between rock, paper or scissors
create a variable with the user's choice (case-insensitive)
create function to randomly return rock, paper or scissors
create a function to play a round of the game
crate a function that keeps track of results and declare a winner
*/

const btnChoice = document.querySelectorAll(".button");
const paraResult =  document.querySelector("#current-result");
const paraScore = document.querySelector("#score");
let playerScore = 0;
let computerScore = 0;

btnChoice.forEach((btn) => {
    btn.addEventListener("click", playRound);
})

function computerPlay() {
    var choiceArray = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random()*choiceArray.length);
    return  choiceArray[randomIndex];
}


function playRound(e) {

    if (playerScore === 5) {
        paraResult.textContent = "Congrats! You defeated the machine";
        return true;
    } else if (computerScore == 5) {
        paraResult.textContent = "Bad luck! Maybe next time";
        return true;
    }

    playerSelection = e.target["id"]
    computerSelection = computerPlay()

    if (playerSelection == computerSelection) {
        paraResult.textContent = "It's a draw. The global score is:";
        paraScore.textContent = ""
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||  
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")) {
        paraResult.textContent = "You won. The global score is:";
        playerScore += 1;
    } else {
        paraResult.textContent = "You lost. The global score is:";
        computerScore += 1;
    }
        paraScore.textContent = `${playerScore} - ${computerScore}`;
}
