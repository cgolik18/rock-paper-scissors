// global variables
const choices = ["rock", "paper", "scissors"];
let pWins = 0;
let cWins = 0;

//reset game

function resetGame() {
    const modal =  document.getElementById("gameModal");
    modal.style.display = "none";
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".computerSelection").textContent = "";
    document.querySelector(".playerSelection").textContent = "";
}

//player selection
let playerSelection;
function getPlayerChoice() {
    const pRock = document.querySelector("#rock");
        pRock.addEventListener("click", () => {
            playerSelection = "rock";
            playRound(playerSelection);
        })
    const pPaper = document.querySelector("#paper");
        pPaper.addEventListener("click", () => {
            playerSelection = "paper";
            playRound(playerSelection);
        })
    const pScissors = document.querySelector("#scissors");
    pScissors.addEventListener("click", () => {
        playerSelection = "scissors";
        playRound(playerSelection);
    })
}

// computer selection
function getComputerChoice() {
    const randChoice = choices[Math.floor(Math.random() * choices.length)];

    document.querySelector(`.${randChoice}`).classList.add("active");

    setTimeout(() => {
        document.querySelector(`.${randChoice}`).classList.remove("active");
    }, 700);

    return randChoice;
}

// play round
function playRound(playerSelection) {
    if (pWins >= 5) {
        playerWon();
    } else if (cWins >= 5) {
        computerWon();
    }

    let computerSelection = getComputerChoice();

    document.querySelector(".playerSelection").textContent = `You chose ${playerSelection.toUpperCase()}`;
    document.querySelector(".computerSelection").textContent = `Computer chose ${computerSelection.toUpperCase()}`;
    checkWinner(playerSelection, computerSelection);
}

// check winner

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        document.querySelector(".winner").textContent = "It's a tie!"
        document.querySelector(".winner").style.backgroundColor = "Yellow";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper"){
        document.querySelector(".winner").textContent = "You won this round!";
        document.querySelector(".winner").style.backgroundColor = "Green";
        pWins++;
    }
    else {
        document.querySelector(".winner").textContent = "Sorry, you lost this round!";
        document.querySelector(".winner").style.backgroundColor = "Red";
        cWins++;
    }
    countWins();
    if (pWins >= 5) {
        playerWon();
    } else if (cWins >= 5) {
        computerWon();
    }
}

// count wins
function countWins() {
    document.querySelector(".playerScore").textContent = `Score: ${pWins}`;
    document.querySelector(".computerScore").textContent = `Score: ${cWins}`;
}

function hideModal() {
    const modal =  document.getElementById("gameModal");
    modal.display.style = "none";
}
// open modal when game ends
function playerWon() {
    const modal =  document.getElementById("gameModal");
    modal.style.display = "flex";
    document.querySelector(".gameWinner").textContent = "Congrats, you won!";
    document.querySelector(".gameWinner").style.backgroundColor = "Green";
    document.querySelector(".playerFinalScore").textContent = `${pWins}`;
    document.querySelector(".computerFinalScore").textContent = `${cWins}`;
    pWins = 0;
    cWins = 0;
}

function computerWon() {
    const modal =  document.getElementById("gameModal");
    modal.style.display = "flex";
    document.querySelector(".gameWinner").textContent = "Sorry, you lost!";
    document.querySelector(".gameWinner").style.backgroundColor = "Red";
    document.querySelector(".playerFinalScore").textContent = `${pWins}`;
    document.querySelector(".computerFinalScore").textContent = `${cWins}`;
    pWins = 0;
    cWins = 0;
}


//play game
function startGame() {
        getPlayerChoice();
}

startGame();
