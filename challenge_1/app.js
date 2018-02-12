// initialize the board upon load
// append click handlers for each space on the board

var init = function () {
  //var div = document.createElement("div");
  // div.style.width = "100px";
  // div.style.height = "100px";
  // div.style.background = "red";
  // div.style.color = "white";
  var body = document.createElement("body");
  var board = document.createElement("div");
  board.setAttribute("id", "board");
  document.body.appendChild(board);

  for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");
    row.setAttribute("id", "row:" + i);
    board.appendChild(row);
    for (var j = 0; j < 3; j++) {
      var col = document.createElement("td");
      col.setAttribute("id", "col:" + j);
      col.innerHTML = "X";
      row.appendChild(col);
    }
  }
};

init();
