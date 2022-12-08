
let humanScore = 0;
let computerScore = 0;
const human = document.querySelector('#human');
const computer = document.querySelector('#computer');
const theOutcome = document.querySelector('#outcome')

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        let playerSelection = button.id;
        let computerSelection = randomSelection();
        let result = playRound(playerSelection, computerSelection);
        theOutcome.textContent = outcome(result, playerSelection, computerSelection);
        if (result==='win'){
            humanScore++
        } else if (result==='lose'){
            computerScore++
        }
        if (computerScore === 5 || humanScore === 5){
            humanScore = 0;
            computerScore = 0;
        }
        human.textContent = humanScore;
        computer.textContent = computerScore;
    });
});

let randomNumber = () => Math.floor(Math.random() * 3);

let randomSelection = () => ['rock', 'paper', 'scissors'][randomNumber()]

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
