
//  Add a div for displaying results and change all of your console.logs into DOM methods.
//  Display the running score, and announce a winner of the game once one player reaches 5 points.
//  You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

//Global variables
let computerChoice;
let playerChoice;

let playerScore = 0;
let computerScore = 0;

const gameMap = new Map;

window.onload = function(){ 
    createGameMap();
    createButtons();
};

function getComputerChoice(){

    computerChoice = Math.floor(Math.random() * (3 - 0) + 0);

    return computerChoice;
}

function createGameMap(){
    gameMap.set("rock", 0);
    gameMap.set("paper", 1);
    gameMap.set("scissors", 2);
}

function playRound(){

    getComputerChoice();

    switch(gameMap.get(playerChoice)){
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

    showResult();
}

function selectRock(){

  playerChoice = "rock";
}

function selectPaper(){

  playerChoice  = "paper";
}

function selectScissors(){

  playerChoice = "scissors";
}

function createButtons(){

  const rock_button = document.querySelector('#rock');
  rock_button.addEventListener('click', selectRock);
  rock_button.addEventListener('click', playRound);

  const paper_button = document.querySelector('#paper');
  paper_button.addEventListener('click', selectPaper);
  paper_button.addEventListener('click', playRound);

  const scissors_button = document.querySelector('#scissors');
  scissors_button.addEventListener('click', selectScissors);
  scissors_button.addEventListener('click', playRound);

}

function showResult(){

    const cpu_text = document.querySelector("#cpu");
    while (cpu_text.firstChild) {
        cpu_text.removeChild(cpu_text.firstChild);
    }
    textNode = document.createTextNode(`CPU: ${computerChoice}`);
    cpu_text.appendChild(textNode);
}
