
function getComputerChoice() {
    const move = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random() * move.length);

    return move[random]
}

let computerScore = 0, playerScore = 0;

function playRound(playerSelection) {

    const computerSelection = getComputerChoice();

    if (playerScore != 5 || computerScore != 5) {
        if (computerSelection == 'Paper' && playerSelection == 'Rock' || computerSelection == 'Rock' && playerSelection == 'Scissors' || computerSelection == 'Scissors' && playerSelection == 'Paper') {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            document.getElementById("score").textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            computerScore++;
        } else if (computerSelection == playerSelection) { 
            console.log("Draw!");
            document.getElementById("score").textContent = "Draw!";
        } else {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            document.getElementById("score").textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
        } 

        console.log("Score! " + playerScore + " to " + computerScore);
        document.getElementById("scoreBoard").textContent = "Score! " + playerScore + " to " + computerScore;
        
    }
    
    if (playerScore == 5) {
        console.log("Player Wins! " + playerScore + " to " + computerScore);
        document.getElementById("score").textContent = "Player Wins! " + playerScore + " to " + computerScore;
        computerScore = 0, playerScore = 0;
    } else if (computerScore == 5) {
        console.log("Computer Wins! " + computerScore + " to " + playerScore);
        document.getElementById("score").textContent = "Computer Wins! " + computerScore + " to " + playerScore;
        computerScore = 0, playerScore = 0;
    }

        
    

}

document.querySelectorAll('button').forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        let elementId = e.target.id;

        playRound(elementId);
    })
});


//buttons.addEventListener('click', game());



