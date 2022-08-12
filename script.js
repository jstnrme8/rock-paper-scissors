console.log("Hello, World!")

function getComputerChoice() {
    const move = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random() * move.length);

    return move[random]
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Paper' && playerSelection == 'Rock' || computerSelection == 'Rock' && playerSelection == 'Scissors' || computerSelection == 'Scissors' && playerSelection == 'Paper') {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection)
        computerScore++
    } else if (computerSelection == playerSelection) { 
        console.log("Draw!")
    } else {
        console.log("You Win! " + playerSelection + " beats " + computerSelection)
        playerScore++
    } 
}

function capitalize(string){

    let final = string.toLowerCase();
    return final.charAt(0).toUpperCase() + final.slice(1)

}


let computerScore = 0, playerScore = 0

function game() {

    

    for (let i = 0; i < 5; i++) {
        let getPlayerChoice = prompt("Five Rounds of Rock, Paper, Scissors! What's your move?")
        const playerSelection = capitalize(getPlayerChoice)
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    }

    if (computerScore > playerScore) {
        console.log("Computer Wins! " + computerScore + " to " + playerScore)
    } else if (playerScore > computerScore) {
        console.log("Player Wins! " + playerScore + " to " + computerScore)
    } else {
        console.log("Draw! " + playerScore + " to " + computerScore)
    }

    computerScore = 0
    playerScore = 0
}

game();



