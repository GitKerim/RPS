let game;
let playerScore = 0;
let computerScore = 0;
let winner;
let computerPick = computerPlay();
let playerPick;
let roundWinner;


function round(){
  if (computerPick === playerPick){
    roundWinner = "Tie";}
  if(playerPick === "rock" && computerPick === "scissors" ){
    return "Player wins - Rock beats scissors"; 
  }else if (playerPick ==="paper" && computerPick === "rock"){
    return "Player wins - Paper beats Rock";
  }else if(playerPick === "scissors" && computerPick === "paper"){
    return "Player wins - Scissors beat Paper";
  }playerScore=playerScore++;
  if (computerPick === "rock" && playerPick === "scissors" ){
    return "Computer wins - Rock beats scissors";
  }else if (computerPick ==="paper" && playerPick === "rock"){
    return "Computer wins - Paper beats Rock";
  }else if(computerPick === "scissors" && playerPick === "paper"){
    return "Computer wins - Scissors beat Paper";
  }computerScore=computerScore++;
} 
function computerPlay(){
    let computerOptions = ["rock","paper","scissors"];
      
      let randomComputerOptions = computerOptions[Math.floor(Math.random()*computerOptions.length)];
      return randomComputerOptions;
}
playerPick = "rock";