function getComputerChoice() {
    //rand picks a random number from 0 to 2
    let rand = Math.floor(Math.random() * 3);
    let choice;
    if (rand == 0){
        choice = 'rock'
    }
    else if (rand == 1){
        choice = 'paper'
    }
    else if (rand == 2){
        choice = 'scissors'
    }
    return choice;
}

//let choice = getComputerChoice()
//console.log(choice)

function getHumanChoice() {
    let humanChoice;
  
    do {
      humanChoice = prompt("Pick rock, paper, or scissors").toLowerCase();
    } while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors");
  
    return humanChoice;
  }

//console.log(getHumanChoice());





function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        if(humanChoice == 'rock'){
            if (computerChoice == 'scissors'){
                console.log("You win! Rock beats Scissors"); 
                humanScore++;
            }
            else if (computerChoice == 'paper'){
                console.log("You lose. Rock loses to Paper");
                computerScore++;
            }
            else{
                console.log("Tie");
            }
        }
        else if(humanChoice == 'paper'){
            if (computerChoice == 'rock'){
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
            else if (computerChoice == 'scissors'){
                console.log("You lose. Paper loses to Scissors");
                computerScore++;
            }
            else{
                console.log("Tie"); 
            }
        }
        else if (humanChoice == 'scissors'){
            if (computerChoice == 'paper'){
                console.log("You win! Scissors beats Paper");
                humanScore++;
            }
            else if (computerChoice == 'rock'){
                console.log("You lose. Scissors loses to Rock");
                computerScore++;
            }
            else {
                console.log("Tie");
            }
        }
    }


    for(i= 0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Human Score: ", humanScore)
        console.log("Computer Score: ", computerScore)
    }
}

playGame();