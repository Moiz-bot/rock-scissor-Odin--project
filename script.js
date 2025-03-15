// Rock paper Scissor

// first making a function called getComputerChoice this function will-
// give random choice from rock paper scissor.

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

// console.log(getComputerChoice()); // Randomly returns "Rock", "Paper", or "Scissor"

// making a Function for a Person to give a input from "Rock", "Paper" and "Scissor"

function getHumanChoice(){
    let playerInput = prompt("Enter from 'Rock', 'Paper', 'Scissor;");
    playerInput = playerInput.trim().toLowerCase();

    if (playerInput === "rock"){
        return "rock"
    }else if(playerInput === "paper"){
        return "paper"
    
    }else if(playerInput === "scissor"){
        return "scissor"
    }else{
        return "You Enter the wrong Input"
        return getHumanChoice()
    }
}



// making two global scope Variable for GameScore



let humanScore = 0;
let computerScore = 0;

// This is a Function for who win the game between human and computer 


function playRound(humanChoice,computerChoice){
    
    console.log(`Player : ${humanChoice}. Computer : ${computerChoice}`)
    if (humanChoice === computerChoice){ 
        return "This Round is Draw"
}else if(humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "paper" && computerChoice === "rock"|| humanChoice === "scissor" && computerChoice === "paper"){
    humanScore++
    return "Player won the Game"
   }else{
    computerScore++
    return "Computer won the Game"
   }

    
}



// so i want to make a function 'round5Win' and there is loop in there which make five round of game 

function round5Win(){
    for (let i = 1; i <= 5; i++){
        
        const player = getHumanChoice();
        const computer = getComputerChoice();
        console.log(`the round : ${i} `)
        console.log(playRound(player,computer))
        console.log(`Player Score : ${humanScore},  Computer Score : ${computerScore}`)

        if (humanScore > computerScore){
            console.log("Congratulation Player Won this Game")
        }else if ( computerScore > humanScore){
            console.log("Congratulation Computer Won this Game")
        }else if (computerScore === humanScore){
            console.log("It's a Tie")
        }
        
         
    }
}
round5Win();


