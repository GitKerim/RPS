let playerPick;
let playerChoices = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;
let computerScoreDisplay = document.getElementById("computerscore");
let playerScoreDisplay = document.getElementById("playerscore");
let tieScore = 0;
let tieScoreDisplay = document.getElementById("tiescore");
let textBox = document.getElementById("text");

playerChoices.forEach(playerChoice => playerChoice.addEventListener("click", (e) =>{
  playerPick = e.target.id;
  computerPlay();
  game();
}))
function playerwins(){
document.getElementById(playerPick).classList.add("winglow");
setTimeout(function(){document.getElementById(playerPick).classList.remove("winglow");}, 1000);

document.getElementById(computerPick).classList.add("loseglow");
setTimeout(function(){document.getElementById(computerPick).classList.remove("loseglow");}, 1000);
}

function computerwins(){
  document.getElementById(computerPick).classList.add("winglow");
  setTimeout(function(){document.getElementById(computerPick).classList.remove("winglow");}, 1000);
  
  document.getElementById(playerPick).classList.add("loseglow");
  setTimeout(function(){document.getElementById(playerPick).classList.remove("loseglow");}, 1000);
  }

  function tie(){
    document.getElementById(computerPick).classList.add("tieglow");
    setTimeout(function(){document.getElementById(computerPick).classList.remove("tieglow");}, 1000);
    
    document.getElementById(playerPick).classList.add("tieglow");
    setTimeout(function(){document.getElementById(playerPick).classList.remove("tieglow");}, 1000);
    }

function wincounter(){
  if(playerScore === 5){
    console.log("Game Over Player Wins");
  }else if(computerScore === 5){
    console.log( "Game Over Computer Wins");
  } 
}

function computerPlay(){
      let computerOptions = ["rock","paper","scissors"];
      computerPick = computerOptions[Math.floor(Math.random()*computerOptions.length)];
}
const game = () => {
switch(playerPick + computerPick){
  case "rockscissors":
  case "paperrock":
  case "scissorspaper":
playerScore++;
playerScoreDisplay.innerHTML = playerScore;
textBox.innerText = "Player Wins" 
wincounter();
playerwins();
  break
  case "scissorsrock":  
  case "rockpaper":
  case "paperscissors":
computerScore++;
computerScoreDisplay.innerHTML = computerScore;
textBox.innerText = "Computer Wins";
wincounter();
computerwins();
   break
  case "rockrock":  
  case "paperpaper":
  case "scissorscissors":
    textBox.innerText = "It's a draw"; 
    tie();
    break
  }
}