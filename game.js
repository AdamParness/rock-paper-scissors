let humanScore = 0;
let computerScore = 0;
let toggle = false;

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
    let result = "";
    let msg = "";
    if(humanChoice == 'rock'){
        if (computerChoice == 'scissors'){
            result = "You win!";
            msg =  "Rock beats Scissors";
            humanScore++;
        }
        else if (computerChoice == 'paper'){
            result = "You lost.";
            msg =  "Rock loses to Paper";
            computerScore++;
        }
        else{
            result = "Tie.";
            msg = "You both picked rock!";
        }
    }
    else if(humanChoice == 'paper'){
        if (computerChoice == 'rock'){
            result = "You win!";
            msg = " Paper beats Rock";
            humanScore++;
        }
        else if (computerChoice == 'scissors'){
            result = "You lose.";
            msg = "Paper loses to Scissors";
            computerScore++;
        }
        else{
            result = "Tie.";
            msg = "You both picked paper!"
        }
    }
    else if (humanChoice == 'scissors'){
        if (computerChoice == 'paper'){
            result = "You win!";
            msg = "Scissors beats Paper";
            humanScore++;
        }
        else if (computerChoice == 'rock'){
            result = "You lose.";
            msg = "Scissors loses to Rock";
            computerScore++;
        }
        else {
            result = "Tie.";
            msg = "You both picked scissors!"
        }
    }
    return [result, msg];
}

//playGame();

function displayScore(){
    document.querySelector("#human").textContent = "Player: " + humanScore;
    document.querySelector("#computer").textContent = "Computer: " + computerScore;
}

function toggleHidden(){
    const elements = document.querySelectorAll(".hidden");
    elements.forEach((element) => {
        element.classList.toggle("hidden");
    });
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
    let result = playRound(human_choice, computer_choice);
    displayScore();
    document.querySelector("#result").textContent = result[0];
    document.querySelector("#msg").textContent = result[1];
    if(humanScore == 5 && !toggle){
        document.querySelector("#win-msg").textContent = "You win!";
        toggle = true;
        toggleHidden();
        
    } 
    if(computerScore == 5 && !toggle){
        document.querySelector("#win-msg").textContent = "Computer wins!";
        toggle = true;
        toggleHidden();
        
    } 

});

let reset = document.querySelector("#reset");
let win_msg = document.querySelector("#win-msg");
    reset.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;
      document.querySelector("#result").textContent = "Choose Rock Paper or Scissors";

      toggle = false;
      displayScore();
      reset.classList.toggle("hidden");
      win_msg.classList.toggle("hidden");
    
    });
  