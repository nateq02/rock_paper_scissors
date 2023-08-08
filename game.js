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

    for (let i = 0; i < 5; i++){
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
        alert(`You won! You won ${player_count} and the computer won ${cpu_count} out of 5`)
    }
    else if (player_count < cpu_count){
        alert(`You lost! You won ${player_count} and the computer won ${cpu_count} out of 5`)
    }
    else {
        alert(`You tied! You and the computer both won ${player_count}`)
    }
}
/*
console.log(getComputerChoice());

console.log(singleRound("Paper", getComputerChoice()))*/

game()