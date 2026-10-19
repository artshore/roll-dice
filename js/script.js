var diceOne = document.querySelector("#dice-1");
var diceTwo = document.querySelector("#dice-2");
var playerOne = document.querySelector("#player1");
var playerTwo = document.querySelector("#player2");
var rollBtn = document.querySelector("#roll-dice-btn");
var resetBtn = document.querySelector("#reset-btn");
takeNames();

function resetGame() {
  diceOne.setAttribute("src", "./img/perspective-dice-one.svg");
  diceTwo.setAttribute("src", "./img/perspective-dice-one.svg");
  document.querySelector("h1").textContent = "🎲 Roll The Dice!";
  takeNames();
}

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  diceOne.setAttribute("src", "./img/" + randomNumber1 + ".svg");
  diceTwo.setAttribute("src", "./img/" + randomNumber2 + ".svg");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = playerOne.textContent + " Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = playerTwo.textContent + " Wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}
function takeNames() {
  var playerOneName = prompt("Please enter the first player's name:");
  var playerTwoName = prompt("Please enter the second player's name:");
  if (playerOneName === null || playerOneName.trim() === "") {
    playerOneName = "Player 1";
  } else {
    playerOne.textContent = playerOneName;
  }
  if (playerTwoName === null || playerTwoName.trim() === "") {
    playerTwoName = "Player 2";
  } else {
    playerTwo.textContent = playerTwoName;
  }
}
