const valasztasok=["kő","papír","olló"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let playerScore=0;
let computerScore=0;

function playGame(playerChoice){

    const computerChoice=valasztasok[Math.floor(Math.random()*3)];

    let result= "";

    if(playerChoice===computerChoice){
        result="DÖNTETLEN!";
    }
    else{
        switch(playerChoice){
            case "kő":
                result=(computerChoice=== "olló") ? "NYERTÉL!":"VESZTETTÉL!";
                break;
            case "papír":
                result=(computerChoice=== "kő") ? "NYERTÉL!":"VESZTETTÉL!";
                break;
            case "olló":
                result=(computerChoice=== "papír") ? "NYERTÉL!":"VESZTETTÉL!";
                break;
                
        }
    }

    

    playerDisplay.textContent=`JÁTÉKOS: ${playerChoice}`;
    computerDisplay.textContent=`SZÁMÍTÓGÉP: ${computerChoice}`;
    resultDisplay.textContent=result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "NYERTÉL!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "VESZTETTÉL!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
    

    
}
function resetScores() {
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = "0";
        computerScoreDisplay.textContent = "0";
    }

