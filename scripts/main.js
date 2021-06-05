/*
ask the user to choose between rock, paper or scissors
create a variable with the user's choice (case-insensitive)
create function to randomly return rock, paper or scissors
create a function to play a round of the game
crate a function that keeps track of results and declare a winner
*/

function computerPlay() {
    var choiceArray = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random()*choiceArray.length);
    return  choiceArray[randomIndex];
}

function playerPlay() {
    var playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return("Draw");
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||  
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")) {
        return("You won");
    } else {
        return("You lost");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        result = playRound(playerPlay(), computerPlay());
        if (result.toLowerCase().includes("won")) {
            playerScore += 1;
            alert(`You won. The global score is: You ${playerScore} - ${computerScore} Machine`)
        } else if (result.toLowerCase().includes("lost")) {
            computerScore += 1;
            alert(`You lost. The global score is: You ${playerScore} - ${computerScore} Machine`)
        } else {
            alert(`It's a draw. The global score is: You ${playerScore} - ${computerScore} Machine`)
        }
    }

    if (playerScore > computerScore) {
        alert("Congrats! You defeated the machine");
    } else if (playerScore < computerScore) {
        alert("Bad luck! Maybe next time");
    } else {
        alert("It's a draw");
    }
}

game()