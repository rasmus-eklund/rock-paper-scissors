
let randomNumber = () => Math.floor(Math.random() * 3);

let randomSelection = () => ['rock', 'paper', 'scissors'][randomNumber(0, 2)]

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let out;
    if (playerSelection === computerSelection){
        out = 'It is a tie!'
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        out = `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
        out = `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    return out;
}

for (let i = 0; i < 5; i++) {
    console.log(playRound(prompt('Rock paper or scissors?', 'rock'), randomSelection()))
}

