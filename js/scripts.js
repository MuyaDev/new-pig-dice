// Business-Logic //

function Names(name1, name2) {
  this.name1 = name1;
  this.name2 = name2;
}

var pigDice = {
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  turnScore: 0,
};

function dieRoll() {
  die1 = Math.floor(Math.random() * 6) + 1;
  return die1;
}

var playerRoll = function () {
  var roll = dieRoll();
  if (roll === 1) {
    pigDice.turnScore = 0;
    alertEndTurn();
    switchPlayer();
  } else {
    pigDice.turnScore += roll;
    if (pigDice.playerUp === 1) {
      if (pigDice.turnScore + pigDice.player1Score >= 21) {
        alertWinner(1);
      }
    } else if (pigDice.turnScore + pigDice.player2Score >= 21) {
      alertWinner(2);
    }
  }
  return roll;
}

function holdThePig() {
  var currentPlayer = pigDice.playerUp;
  if (currentPlayer === 1) {
    pigDice.player1Score += pigDice.turnScore;
  } else {
    pigDice.player2Score += pigDice.turnScore;
  }
  pigDice.turnScore = 0;
  switchPlayer();
}