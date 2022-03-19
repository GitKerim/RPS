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
setTimeout(function(){document.getElementById(playerPick).classList.remove("winglow");}, 700);

document.getElementById(computerPick).classList.add("loseglow");
setTimeout(function(){document.getElementById(computerPick).classList.remove("loseglow");}, 700);
}

function computerwins(){
  document.getElementById(computerPick).classList.add("winglow");
  setTimeout(function(){document.getElementById(computerPick).classList.remove("winglow");}, 700);
  
  document.getElementById(playerPick).classList.add("loseglow");
  setTimeout(function(){document.getElementById(playerPick).classList.remove("loseglow");}, 700);
  }

  function tie(){
    document.getElementById(computerPick).classList.add("tieglow");
    setTimeout(function(){document.getElementById(computerPick).classList.remove("tieglow");}, 700);
    
    document.getElementById(playerPick).classList.add("tieglow");
    setTimeout(function(){document.getElementById(playerPick).classList.remove("tieglow");}, 700);
    }
function showwindow(){
  let window = document.getElementById("popup");
  window.style.display = 'block';
  let btn = document.querySelector("#popup-button");
  btn.addEventListener("click", function (){
  window.style.display = 'none';
  playerScore = 0;
  computerScore = 0;
  computerScoreDisplay.innerHTML = 0;
  playerScoreDisplay.innerHTML = 0;
});}
function wincounter(){
  let popupText = document.getElementById("popup-p");
  let popupButton = document.getElementById("popup-button");
  if(playerScore === 5){
    popupText.innerText = "Player Wins !"; 
    popupButton.style.cssText = "border-color:rgba(159,216,219,0.8); box-shadow: 0 0 8px rgba(159,216,219,0.8); background-color:rgba(159,216,219,0.8);";
showwindow();
  }else if(computerScore === 5){
    popupText.innerText = "Computer Wins !";
    popupButton.style.cssText = " border-color: rgba(255,102,93,0.8); box-shadow:  0 0 8px rgba(255,102,93,0.8); background-color: rgba(255,102,93,0.8);";
showwindow();
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
