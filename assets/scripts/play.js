"use strict"

//Global variables
let computerChoice;
let playerChoice;

let playerScore = 0;
let computerScore = 0;

const gameMap = new Map;

             
window.onload = function(){ 
    createGameMap();
    bestOfFive();
};

function getComputerChoice(){

    computerChoice = Math.floor(Math.random() * (3 - 0) + 0);

    return computerChoice;
}


function   getPlayerChoice(){

    let playerText = prompt("Please write your choice:");

    if (!gameMap.has(playerText.toLowerCase())){
        console.error("Sorry not a valid option, rock paper or scissors? Watch out for typo: not AI based yet")
    }

    return gameMap.get(playerText.toLowerCase());
}


function createGameMap(){
    gameMap.set("rock", 0);
    gameMap.set("paper", 1);
    gameMap.set("scissors", 2);
}

function playRound(){

    getComputerChoice();

    playerChoice = getPlayerChoice();

    switch(playerChoice){
        case 0: 
            if (computerChoice == 1){
                computerScore++;
            }else if (computerChoice == 2){
                playerScore++;
            }
            break;
        case 1: 
            if (computerChoice == 2){
                computerScore++;
            }else if (computerChoice == 0){
                playerScore++;
            }
            break;
        case 2: 
            if (computerChoice == 0){
                computerScore++;
            }else if (computerChoice == 1){
                playerScore++;
            }
            break;
        default:
            console.error("how did you get here?")

    }
    console.log(computerChoice, playerChoice);
    console.log("Player score:", playerScore);
    console.log("CPU score:", computerScore);
}

function bestOfFive(){

    while (playerScore != 3 && computerScore != 3) {
        playRound();
    };

    if (playerScore == 3){
        console.log("You won! :D")
    }else if (computerScore == 3){
        console.log("CPU won! D:")
    }

    return;
}