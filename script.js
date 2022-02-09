let computerPick = computerPlay();
let playerPick = playerPlay();
let playedRound = playRound();

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
function playRound(){
  if (playerPick === "rock" && computerPick === "scissors" ){
    return "Player wins - Rock beats scissors";
  }else if (playerPick ==="paper" && computerPick === "rock"){
    return "Player wins - Paper beats Rock";
  }else if(playerPick === "scissors" && computerPick === "paper"){
    return "Player wins - Scissors beat Paper";
  }else if (computerPick === "rock" && playerPick === "scissors" ){
    return "Computer wins - Rock beats scissors";
  }else if (computerPick ==="paper" && playerPick === "rock"){
    return "Computer wins - Paper beats Rock";
  }else if(computerPick === "scissors" && playerPick === "paper"){
    return "Computer wins - Scissors beat Paper";
  }else if (computerPick === playerPick){
    return "Tie";
  }

}
console.log(computerPick);
console.log(playerPick);
console.log(game());