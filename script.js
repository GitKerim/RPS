function computerPlay(){
    let computerOptions = ["Rock","Paper","Scissors"];
      
      let randomComputerOptions = computerOptions[Math.floor(Math.random()*computerOptions.length)];
      return randomComputerOptions;
}
function playerSelection(){
  let playerInput = prompt("Choose 'ur hand");
  playerInput = playerInput.toLowerCase();
  if (playerInput ==="rock" || "paper" || "scissors"){
    return playerInput;}
    else {
      return "Please pick Rock, Paper or Scissors"
        }
}
console.log(playerSelection())