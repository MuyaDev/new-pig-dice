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

function switchPlayer() {
  if (pigDice.playerUp === 1) {
    $("#player1Button").hide();
    $("#player2Button").show();
    pigDice.playerUp = 2;

  } else {
    $("#player2Button").hide();
    $("#player1Button").show();
    pigDice.playerUp = 1;

  }
}

function resetGame() {
  pigDice.player1Score = 0;
  pigDice.player2Score = 0;
  pigDice.playerUp = 1;
  pigDice.turnScore = 0;
}

// USER LOGIC //


function alertEndTurn() {
  alert("Sorry - you rolled a 1.  Your score remains the same and your turn is over.");
  $(".playerStatus").text(pigDice.playerUp);
}

function alertWinner(playerNumber) {
  alert("Player " + playerNumber + " is the  winner!!");
  resetGame();
  $(".gameStatusDisplay").text(0);
}

$(document).ready(function () {

  $("form#pigForm").submit(function (event) {
    var playerName1 = $("input#Name1").val();
    var playerName2 = $("input#Name2").val();
    $("span#playerName1").text(playerName1);
    $("span#playerName2").text(playerName2);
    $("#player2Button").hide();
    $("#player1Button").show();
    $(".playerStatus").text(pigDice.playerUp);
    event.preventDefault();

    var nameHolder = new Names(playerName1, playerName2);
  })


  $(".rollPig").click(function () {
    pigResult = playerRoll();
    $(".rollResult").text(pigResult);
    $(".turnScore").text(pigDice.turnScore);

  });

  $(".holdPig").click(function () {
    holdThePig();
    $("rollResult").text("");
    $(".player1Score").text(pigDice.player1Score);
    $(".player2Score").text(pigDice.player2Score);
    $(".playerStatus").text(pigDice.playerUp);
  });
});