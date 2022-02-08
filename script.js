function computerPlay(){
    let computerOptions = ["Rock","Paper","Scissors"];
      
      let randomComputerOptions = computerOptions[Math.floor(Math.random()*computerOptions.length)];
      return randomComputerOptions;
}
  console.log(computerPlay())