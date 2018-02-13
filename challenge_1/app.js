// initialize the board upon load
  // initialize an array upon load to store the values
// on click, we want to change the inner HTML

var initializeBoard = function() {
  var board = document.createElement("table");
  board.setAttribute("id", "board");
  board.style["border-collapse"] = "collapse";
  document.body.appendChild(board);

  for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");
    row.setAttribute("id", "row:" + i);
    board.appendChild(row);
    for (var j = 0; j < 3; j++) {
      var col = document.createElement("td");
      col.setAttribute("id", "col:" + j);
      col.style["width"] = "100px";
      col.style["height"] = "100px";
      col.style["background"] = "white";
      col.style["text-align"] = "center";
      col.style["vertical-align"] = "middle";
      col.style["border-style"] = "solid";
      col.innerHTML = " ";
      row.appendChild(col);
    }
  }
}

var init = function () {
  var currentPlayer = 'X';

  initializeBoard();

  document.addEventListener('click', function (event) {
    if (event.target.innerHTML === " ") {
      event.target.innerHTML = currentPlayer;

      // toggle the current player
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X' // if i use this again, consider using a helper function
    }
  }, false);

};

var checkBoard = function () {
  
};

var clearBoard = function () {
  
};

init();

// var switchPlayer = function (currentPlayer) {
//   currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'
//   return currentPlayer;
// }