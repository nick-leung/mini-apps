var init = function () {
  var gameOver = false;
  var plays = 9;
  var currentPlayer = 'X';
  
  var boardArray = initializeBoardArray();
  initializeBoard();

  var elem = document.getElementById("board");
  elem.addEventListener('click', function (event) {
    if (event.target.innerHTML === " ") {
      event.target.innerHTML = currentPlayer;
      var column = event.target.classList[1].split('-')[1];
      var row = event.target.classList[0].split('-')[1];
      boardArray[row][column] = currentPlayer;
      
      plays--;
      gameOver = doesWinConditionExist(row, column, boardArray, currentPlayer);

      if (plays === 0 || gameOver) {
        var message = gameOver ? currentPlayer + ' wins!' : 'Cats game!';
        displayPlayAgainButton(message);
      }

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }, false);
};

var initializeBoard = function () {
  var board = document.createElement("table");
  board.setAttribute("id", "board");
  board.setAttribute("style", "border-collapse: collapse;");
  document.body.appendChild(board);

  for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");
    board.appendChild(row);
    for (var j = 0; j < 3; j++) {
      var col = document.createElement("td");
      
      var style = [];
      style.push("width: 100px;");
      style.push("height: 100px;");
      style.push("background: white;");
      style.push("text-align: center;");
      style.push("vertical-align: middle;");
      style.push("border-style: solid");
      col.setAttribute("style", style.join(""));
      col.setAttribute("class", "row-" + i + " " + "col-" + j);
      
      col.innerHTML = " ";
      row.appendChild(col);
    }
  }
}

var initializeBoardArray = function () {
  var rows = [];
  for (var i = 0; i < 3; i++) {

    var columns = [];
    for (var j = 0; j < 3; j++) {
      columns.push(" ");
    }
    rows.push(columns);
  }
  
  return rows;
}

var doesWinConditionExist = function (row, col, boardArray, currentPlayer) {
  var downDiag = 0;
  var upDiag = boardArray.length - 1;
  var rowMatchCount = 0
  var colMatchCount = 0;
  var downDiagMatchCount = 0;
  var upDiagMatchCount = 0;
  
  for (var i = 0; i < boardArray.length; i++) {
    
    // check horizontally
    if (boardArray[row][i] === currentPlayer) {
      rowMatchCount++;
      if(rowMatchCount === boardArray.length) {
        return true;
      }
    }
    
    // check vertically
    if (boardArray[i][col] === currentPlayer) {
      colMatchCount++;
      if(colMatchCount === boardArray.length) {
        return true;
      }
    }

    // check diagonally (top left to bottom right)
    if (boardArray[i][downDiag] === currentPlayer) {
      downDiagMatchCount++;
      downDiag++;
      if(downDiagMatchCount === boardArray.length) {
        return true;
      }
    }

    // check diagonally (bottom left to top right)
    if (boardArray[i][upDiag] === currentPlayer) {
      upDiagMatchCount++;
      upDiag--;
      if(upDiagMatchCount === boardArray.length) {
        return true;
      }
    }
  }

  return false;
};

var displayPlayAgainButton = function (message) {
  var playAgain = document.createElement("button");
  playAgain.setAttribute("id", "again");
  document.body.appendChild(playAgain);
  playAgain.innerHTML = message + " " + "Click here to play again!";
  playAgain.addEventListener("click", resetState);
}

var resetState = function () {
  var elem = document.getElementById("board");
  elem.remove();
  elem = document.getElementById("again");
  elem.remove();

  init();
};

init();