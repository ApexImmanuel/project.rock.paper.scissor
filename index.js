const randomObj = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return randomObj[Math.floor(Math.random()*randomObj.length)];
}

function pSelection() {
    let input = window.prompt("rock, paper, scissor?", "rock");
    input = input.toLowerCase();
    return input;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("DRAW!");
        return("DRAW!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player Win");
        return("Player Win");
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("Player Win");
        return("Player Win");
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("Player Win");
        return("Player Win");
    } else {
        console.log("System Win");
        return("System Win!"); 
    }
}

let pWin = 0;
let cWin = 0;

function game() { 
for (let i = 1; i <= 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = pSelection();
    result = playRound(playerSelection, computerSelection);
    if (result == "Player Win") {
        pWin++;
    } else if (result == "System Win") {
        cWin++;
    }

  }

if (pWin > cWin) {
    alert ("You Are The Winner! ");
} else if (pWin < cWin) {
    alert("System Is Untouchable");
} else {
    alert("DRAW!");
}

}
game();


