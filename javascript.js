let buttons = document.querySelectorAll(".playButton");
let result = document.querySelector(".result")
let playAgain = document.getElementById("playAgain")

buttons.forEach(button => {
    button.addEventListener("click", function (event) {

        if (playAgain.classList.contains("hide")) {                 

        let playerSelection = button.getAttribute("data-play");
        let roundResult = playRound(playerSelection, computerPlay ());
        let score
        let message

        if (roundResult.winner == "computer") {
            score = document.querySelector(`.scores span[data-points="computer"]`)
            message = "You lost!"
            score.innerText = parseInt(score.innerText) + 1;
        } else if (roundResult.winner == "player"){
            score = document.querySelector(`.scores span[data-points="player"`)
            message = "You won!"
            score.innerText = parseInt(score.innerText) + 1;
        } else {
            message = "It's a tie!"
        }
          
        if (score && score.innerText == 5) {
            result.innerText = `The winner is the ${roundResult.winner}`

            
            playAgain.classList.remove("hide")
            return;
        }

        result.innerText = `${message} Computer played ${roundResult.computer} and you played ${roundResult.player}.`

        }
        
    })
});

playAgain.addEventListener("click", function (event) {
    let scores = document.querySelectorAll(".scores span")

    scores.forEach(score => {
        score.innerText = 0
    })

    this.classList.add("hide")
    result.innerText = ""
})

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

// console.log(game())