
let randomNumber = () => Math.floor(Math.random() * 3);

let randomSelection = () => ['rock', 'paper', 'scissors'][randomNumber(0, 2)]

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let out;
    if (playerSelection === computerSelection) {
        out = 'tie'
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        out = 'win'
    } else {
        out = 'lose'
    }
    return out;
}

function outcome(result, playerSelection, computerSelection){
    let out;
    if (result === 'tie'){
        out = 'It is a tie!'
    } else if (result == 'win'){
        out = `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
        out = `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    return out;
}

function game() {
    let humanScore = 0;
    let computerScore = 0;
    let computerSelection;
    let playerSelection;
    let result;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock paper or scissors?', 'rock');
        computerSelection = randomSelection();
        result = playRound(playerSelection, computerSelection)
        if (result === 'win'){
            humanScore++
        } else if (result == 'lose'){
            computerScore++
        }
        console.log(`${outcome(result, playerSelection, computerSelection)} Current score: you = ${humanScore}, computer = ${computerScore}`)
    }
    if (humanScore>computerScore) {
        console.log('You won!')
    } else if (computerScore>humanScore){
        console.log('You lost!')
    } else {
        console.log('It was a tie!')
    }
}

game()