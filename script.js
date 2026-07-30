// //making a console-based RPS game first
// const choices = ['rock', 'paper', 'scissors'];

// //get the computer's choice
// function getComputerChoice(){
//       return choices[Math.floor(Math.random()*choices.length)];
   
// }
// //get the user's choice
// function getHumanChoice(){
//      let userChoice = prompt("Enter your choice:")
//      while(!choices.includes(userChoice)){
//       userChoice = prompt("Enter a valid option:");
//      }
//      return userChoice;
// }


// //play the game


// function playGame(){ 
//       console.log("This is a Rock, Paper, Scissors game!");

//       let computerScore = 0;
//       let humanScore = 0;

//       function playRound(humanChoice, computerChoice) {
//             if (humanChoice === computerChoice){
//                   return console.log("Tie!");
//             }
//             if (humanChoice === "rock" && computerChoice === "scissors" ||
//             humanChoice === "scissors" && computerChoice === "paper" || 
//             humanChoice === "paper" &&  computerChoice === "rock") 
//             {
//                   humanScore++;
//                   console.log("Human wins");
//             }
//             else {
//                   computerScore++;
//                   console.log("computer wins");
//             }
//       }
      
//       for (let i = 1; i <=5; i++) {
//             const humanSelection = getHumanChoice();
//             const computerSelection = getComputerChoice();
//             playRound(humanSelection, computerSelection);
//       }
//       console.log(`your score is ${humanScore}`);
//       console.log(`computer score is ${computerScore}`);

//       if (humanScore > computerScore) {
//             console.log("You win!");
//       }
//       else if (humanScore < computerScore){
//             console.log("Computer wins!");
//       }
//       else {
//             console.log("it's a tie!");
//       }

// }

// playGame();

const choiceButtons = document.querySelectorAll('.choiceBtn');
const roundWinner = document.querySelector('#winner-board');
const playerScoreText = document.querySelector('#userScore');
const compScoreText = document.querySelector('#computerScore');
const resetGame = document.querySelector('#resetBtn');

let playerChoice;
let choices = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;
let roundcount = 0

  choiceButtons.forEach(button => {
        button.addEventListener('click',getPlayerChoice);
    });

function getPlayerChoice(e){
        if (roundcount >= 10) return;
        playerChoice = (e.target.id);
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
}    

function getComputerChoice() {
    return choices[Math.floor(Math.random()* choices.length)];
  }

function playRound (playerChoice, computerChoice){
   roundcount++;
    if (playerChoice === computerChoice) {
      roundWinner.textContent = "Tie!";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" || 
        playerChoice === "paper" &&  computerChoice === "rock") 
        {
            roundWinner.textContent = `${playerChoice} beats ${computerChoice}, you win!`;
            playerScore++;
            playerScoreText.textContent = playerScore;
        }
        else {
          roundWinner.textContent = `${computerChoice} beats ${playerChoice}, computer wins!`;
          compScore++;
          compScoreText.textContent = compScore;
        }
        if (roundcount === 10 ) {
          if(playerScore > compScore){
            roundWinner.textContent = `Game Over! You win!`;
          } 
          
          else if (playerScore < compScore){
            roundWinner.textContent = `Game Over! Computer wins!`;
          }
          else{
            roundWinner.textContent = `Game Over! it's a tie!`;
          }
          choiceButtons.forEach(button =>
          {
            button.disabled = true;
          });
          resetGame.style.visibility = 'visible';
        }
 }
 //reset game by reloading the page
resetGame.addEventListener('click', () =>{
  window.location.reload();
});