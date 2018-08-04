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

function dieRoll () {
  die1 = Math.floor(Math.random()*6) +1;
  return die1;
}