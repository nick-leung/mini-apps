// initialize the board upon load
// append click handlers for each space on the board

var init = function () {
  //var div = document.createElement("div");
  // div.style.width = "100px";
  // div.style.height = "100px";
  // div.style.background = "red";
  // div.style.color = "white";
  
  var board = document.getElementById("board");
  for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");
    row.setAttribute("id", "row" + i);
    board.appendChild(row);
    for (var j = 0; j < 3; j++) {
      var tableData = document.createElement("td");
      tableData.setAttribute("id", "col" + j);
      tableData.innerHTML = "X";
      board.getElementsByTagName("tr")[i].appendChild(tableData);
    }
  }
};

init();
