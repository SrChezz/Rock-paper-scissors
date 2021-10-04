function computerPlay () {
    let computerMove = Math.floor(Math.random() * 3) + 1;
    let computerDecide
    if (computerMove == 1) {
        computerDecide = "paper"
    } else if (computerMove == 2) {
        computerDecide = "rock"
    } else if (computerMove == 3) {
        computerDecide = "scissors"
    } else {
        computerDecide = "This computer has broken"
    }
    return computerDecide
}

// console.log(computerPlay ());


function playRound(playerSelection, computerSelection) {

    let winner = ""
    if (playerSelection == computerSelection) {
        winner = "both";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "player";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "player";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "player";
    } else {
        winner = "computer"
    }

    let result = `
     Computer: ${computerSelection}
     Player: ${playerSelection}
     Winner is the ${winner}`

    let resultObject = {
        computer: computerSelection,
        player: playerSelection,
        winner: winner
    }

    return resultObject
}

// console.log(playRound("paper", computerPlay ()));

function game() {

    let computerScore = 0;
    let playerScore = 0;
    let rounds = []

    for (let i = 0; i < 5; i++) {
        let input = "paper"
        // let input = prompt("Write your play", "")
        let playerSelection = input
        let roundResult = playRound(playerSelection, computerPlay ()) 

        rounds.push(roundResult)

        if (roundResult.winner == "computer") {
            computerScore++
        } else if (roundResult.winner == "player") {
            playerScore++
        } else {
            computerScore++
            playerScore++
        }
    }

    let scores = {
        computer: computerScore,
        player: playerScore,
        rounds: rounds
    }

    return scores
}

console.log(game())