
//  For now, remove the logic that plays exactly five rounds.
//  Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
//  Add a div for displaying results and change all of your console.logs into DOM methods.
//  Display the running score, and announce a winner of the game once one player reaches 5 points.
//  You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.


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

    while ( 0==0){
        playRound();
    };

    return;
}
