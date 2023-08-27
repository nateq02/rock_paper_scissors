function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock") {
            return "You tied! You both picked scissors!"
        }
        else if (computerSelection == "paper") {
            return "You lose! Paper beats rock!"
        }
        else {
            return "You win! Rock beats scissors!"
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock!"
        }
        else if (computerSelection == "paper") {
            return "You tied! You both chose paper!"
        }
        else {
            return "You lose! Scissors beats paper!"
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors!"
        }
        else if (computerSelection == "paper") {
            return "You win! Scissors beats paper!"
        }
        else {
            return "You tied! You both chose scissors!"
        }
    }
}

function game(){
    let player_count = 0;
    let cpu_count = 0;
    let game_count = 1;
    for (let i = 0; i < game_count; i++){
        let player_choice = prompt("Rock, paper, or scissors?");
        let result = singleRound(player_choice, getComputerChoice());
        alert(result);
        if (result.charAt(4) == "w"){
            player_count += 1;
        }
        else if (result.charAt(4) == "l") {
            cpu_count += 1;
        }
    }

    if (player_count > cpu_count) {
        alert(`You won! You won ${player_count} and the computer won ${cpu_count} out of ${game_count}`)
    }
    else if (player_count < cpu_count){
        alert(`You lost! You won ${player_count} and the computer won ${cpu_count} out of ${game_count}`)
    }
    else {
        alert(`You tied! You and the computer both won ${player_count}`)
    }
}
/*
console.log(getComputerChoice());

console.log(singleRound("Paper", getComputerChoice()))*/

//game()

// BUTTON LOGIC
let button_list = document.querySelectorAll('button');

let rock_button = button_list[0];
let paper_button = button_list[1];
let scissors_button = button_list[2];

let player_count = 0;
let cpu_count = 0;

let round_result = document.getElementById('result');
let player_results = document.getElementById('playerCount');
let cpu_results = document.getElementById('cpuCount');

rock_button.addEventListener('click', rockClick);
paper_button.addEventListener('click', paperClick);
scissors_button.addEventListener('click', scissorsClick);

function winner(result) {
    if (result.charAt(4) == "w"){
        player_count += 1;
        if (player_count == 5){
            player_count = 0;
            cpu_count = 0;
            alert("Player Won!");
        };
        playerCount.innerText = `${player_count}`;
        cpuCount.innerText = `${cpu_count}`;
    }
    else if (result.charAt(4) == "l") {
        cpu_count += 1;
        if (cpu_count == 5){
            player_count, cpu_count = 0;
            alert("Computer Won!");
        };
        playerCount.innerText = `${player_count}`
        cpuCount.innerText = `${cpu_count}`;
    }
}

function rockClick() {
    let result = singleRound('rock', getComputerChoice());
    console.log(result);
    winner(result);
}

function paperClick() {
    let result = singleRound('paper', getComputerChoice());
    console.log(result);
    winner(result);
}

function scissorsClick() {
    let result = singleRound('scissors', getComputerChoice());
    console.log(result);
    winner(result);
}