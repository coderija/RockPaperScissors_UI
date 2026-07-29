//making a console-based RPS game first
const choices = ['rock', 'paper', 'scissors'];

//get the computer's choice
function getComputerChoice(){
      return choices[Math.floor(Math.random()*choices.length)];
   
}
//get the user's choice
function getHumanChoice(){
     let userChoice = prompt("Enter your choice:")
     while(!choices.includes(userChoice)){
      userChoice = prompt("Enter a valid option:");
     }
     return userChoice;
}


//play the game


function playGame(){ 
      console.log("This is a Rock, Paper, Scissors game!");

      let computerScore = 0;
      let humanScore = 0;

      function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice){
                  return console.log("Tie!");
            }
            if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" || 
            humanChoice === "paper" &&  computerChoice === "rock") 
            {
                  humanScore++;
                  console.log("Human wins");
            }
            else {
                  computerScore++;
                  console.log("computer wins");
            }
      }
      
      for (let i = 1; i <=5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
      }
      console.log(`your score is ${humanScore}`);
      console.log(`computer score is ${computerScore}`);

      if (humanScore > computerScore) {
            console.log("You win!");
      }
      else if (humanScore < computerScore){
            console.log("Computer wins!");
      }
      else {
            console.log("it's a tie!");
      }

}

playGame();
