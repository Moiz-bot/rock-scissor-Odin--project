// Rock paper Scissor

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

let playerInput = "";

function buttonSelection() {
  let Rock = document.getElementById("Rock");
  let Paper = document.getElementById("Paper");
  let Scissor = document.getElementById("Scissor");
  Rock.addEventListener("click", () => {
    handlePlayerChoice("rock");
  });
  Paper.addEventListener("click", () => {
    handlePlayerChoice("paper");
  });
  Scissor.addEventListener("click", () => {
    handlePlayerChoice("scissor");
  });
}

buttonSelection();

let humanScore = 0;
let computerScore = 0;

// This is a Function for who win the game between human and computer

let winner = document.querySelector(".winner");
console.log(winner)
function playRound(humanChoice, computerChoice) {
  let choice = document.querySelector("#choice")
  if (humanChoice && computerChoice) {
    choice.textContent = (`Player : ${humanChoice}. Computer : ${computerChoice}`);
    if (humanChoice === computerChoice) {
      winner.textContent= "The Game is Draw";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper")
    ) {
      humanScore++;
      // return "Player won noy the Game";
      winner.textContent= "Player won the Game";
    } else {
      computerScore++;
      winner.textContent= "Computer won the Game";
  }
  if(humanScore === 5 ){
    humanScore = ""
    computerScore = ""
    winner.textContent = "Congratulation Player Won five Round"

  }else if(computerScore === 5 ){
    computerScore = ""
    humanScore = ""
    winner.textContent="Congratulation Computer Won five Round"

  }
}
}

function handlePlayerChoice(choice) {
  let scoreCheck = document.querySelector(".scoreCheck")
  playerInput = choice; // ✅ Update the player's choice
  let computerChoice = getComputerChoice(); // ✅ Get computer choice
  let result = playRound(playerInput, computerChoice); // ✅ Now we have both values
  console.log(result);
  scoreCheck.textContent = (
    `Human Score is : ${humanScore} Computer Score is ${computerScore}`
  );
}

// so i want to make a function 'round5Win' and there is loop in there which make five round of game

// function round5Win(){
//     for (let i = 1; i <= 5; i++){

//         const player = getHumanChoice();
//         const computer = getComputerChoice();
//         console.log(`the round : ${i} `)
//         console.log(playRound(player,computer))
//         console.log(`Player Score : ${humanScore},  Computer Score : ${computerScore}`)

//         if (humanScore > computerScore){
//             console.log("Congratulation Player Won this Game")
//         }else if ( computerScore > humanScore){
//             console.log("Congratulation Computer Won this Game")
//         }else if (computerScore === humanScore){
//             console.log("It's a Tie")
//         }

//     }
// }
// // round5Win();
