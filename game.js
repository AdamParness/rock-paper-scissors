let humanScore = 0;
let computerScore = 0;

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



function getHumanChoice() {
    let humanChoice;
  
    do {
      humanChoice = prompt("Pick rock, paper, or scissors").toLowerCase();
    } while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors");
  
    return humanChoice;
  }



function playGame(){
    
    
    

/*
    for(i= 0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Human Score: ", humanScore)
        console.log("Computer Score: ", computerScore)
    }*/
}

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

//playGame();

function displayScore(){
    document.querySelector("#human").textContent = "Human Score: " + humanScore;
    document.querySelector("#computer").textContent = "Computer Score: " + computerScore;
}

let button = document.querySelector("#btn");
button.addEventListener("click", (event) => {
    let target = event.target;
    let human_choice = "";
    let computer_choice = getComputerChoice();

    switch(target.id){
        case 'rock':
            human_choice = "rock";
            break;

        case "paper":
            human_choice = "paper";
            break;

        case "scissors":
            human_choice = "scissors";
            break;
    }   
    playRound(human_choice, computer_choice);
    displayScore();
    if(humanScore == 5) document.querySelector("#win-msg").textContent = "You win!";
    if(computerScore == 5) document.querySelector("#win-msg").textContent = "Computer wins!";
});