"use strict"
             
window.onload = function(){ 
    getComputerChoice();
};

function getComputerChoice(){
    let computerChoice;

    let randomNumber = Math.floor(Math.random() * (3 - 0) + 0);

    switch(randomNumber){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            console.error("Math.random didn't quite work, oops");
    }

    return computerChoice;
}