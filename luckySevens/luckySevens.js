function rollDice() {
   return Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1;
}
function playGame(){
// input the users starting bet and convert to value
  var startingBet = Number(document.getElementById("starting").value);
  var rolls =0;
  var highestWon = startingBet;
  var rollsHighestWin =0;
  var gameMoney = startingBet ;

// if users input is 0, a string, or NAN show alert
  if(gameMoney<=0|| gameMoney==""|| isNaN(gameMoney)){
    alert("please enter a valid number above 0.");
  }
  // if not play game -> roll dice
  else{
    var gameMoney = startingBet;
    while(gameMoney>0){
      rollDice();
      rolls +=1;

//if dice sum is not equal to seven then dedeuct a point, if it is add +4 to the money
      if(rollDice() != 7){
          gameMoney = gameMoney -1;
          console.log("You lost a buck")
      }
        else {
          gameMoney = gameMoney +4;
          console.log("You won some")
          //if the money is higher than the highest, make GameMoney be the new set value for highest
          if(gameMoney>highestWon) {
            highestWon = gameMoney
            rollsHighestWin = rolls
          }
        }
      }
    }


    document.getElementById("startingBet").innerText = startingBet ;
    document.getElementById("totalRolls").innerText = rolls;
    document.getElementById("rollCountAtHighestWon").innerText= rollsHighestWin;
    document.getElementById("highestAmountWon").innerText= highestWon;
}
