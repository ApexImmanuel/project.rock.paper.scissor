let pScore = 0;
let cScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const outcomeDiv = document.querySelector(".outcome");
const playerScoresSpan = document.querySelector(".player-score");
const computerScoresSpan = document.querySelector(".computer-score");
const buttons = document.querySelectorAll("button");
const h3 = document.createElement("h3");
const h2 = document.createElement("h2");



function getComputerChoice() {
    const randomObj = ["rock", "paper", "scissor"];
    return randomObj[Math.floor(Math.random()*randomObj.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // const h3 = document.createElement("h3");
        h3.innerText = "DRAW";
        outcomeDiv.appendChild(h3);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        pScore++;
        // const h3 = document.createElement("h3");
        h3.innerText = `You Win! Paper folds ${computerSelection}`
        outcomeDiv.appendChild(h3);
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        pScore++;
        // const h3 = document.createElement("h3");
        h3.innerText = `You Win! Rock kicks ${computerSelection}`
        outcomeDiv.appendChild(h3);
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        pScore++;
        // const h3 = document.createElement("h3");
        h3.innerText = `You Win! Scissor cuts ${computerSelection}`
        outcomeDiv.appendChild(h3);
    } else if (playerSelection === "scissor" && computerSelection === "Rock") {
        cScore++;
        // const h3 = document.createElement("h3");
        h3.innerText = `You Lose! Computer Choose Rock`
        outcomeDiv.appendChild(h3);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        cScore++;
        // const h3 = document.createElement("h3");
        h3.innerText = `You Lose, Computer Choose Paper`
        outcomeDiv.appendChild(h3);
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        cScore++;
        // const h3 = document.createElement("h3");
        h3.innerText = `You Lose, Computer Choose Scissor`
        outcomeDiv.appendChild(h3);
    } 
}

const checkWinner = (pScore, cScore) => {
    if (pScore === 5) {
        // const h2 = document.createElement("h2");
        h2.innerText = `You won ${pScore} to ${cScore}, great job.`
        outcomeDiv.append(h2);

    } else if (cScore === 5) {
        // const h2 = document.createElement("h2");
        h2.innerText = `You lose ${cScore} to ${pScore}, Loser.`
        outcomeDiv.append(h2);
    }
}

function updateScore(pScore, cScore) {
    playerScoresSpan.innerText = `Player Sore:    ${pScore}`;
    computerScoresSpan.innerText = `Computer Score:    ${cScore}`;
}

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    updateScore(pScore, cScore);
    checkWinner(pScore, cScore);
});

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    updateScore(pScore, cScore);
    checkWinner(pScore, cScore);
});

scissorButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissor";
    playRound(playerSelection, computerSelection);
    updateScore(pScore, cScore);
    checkWinner(pScore, cScore);
});


//  buttons.forEach(button => {
//     buttons.addEventListener("click", () => {
//         const computerSelection = getComputerChoice();
//         const playerSelection = `${button.className}`
//         playRound(playerSelection, computerSelection);
//         updateScore(pScore, cScore);
//         checkWinner(pScore, cScore);

//     })
//  })
