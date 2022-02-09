let computerPick = computerPlay();
let playerPick = playerPlay();

//Returns random computer play
function computerPlay(){
    let computerOptions = ["rock","paper","scissors"];
      
      let randomComputerOptions = computerOptions[Math.floor(Math.random()*computerOptions.length)];
      return randomComputerOptions;
      let computerResult = computerPlay;
}
//Asks for players hand
function playerPlay(){
  let playerInput = prompt("Choose 'ur hand").toLowerCase();
  if (playerInput === 'rock' || playerInput ==='paper' || playerInput=== 'scissors'){   
    return playerInput;
    }
    else {
      return "Please pick Rock, Paper or Scissors";
        }
}

