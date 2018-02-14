
$(document).ready(function () {
  var textArea;
  $("#submit").click(function () {
    textArea = $("#textArea").val();
    $.post("http://localhost:3000/login", {
      textArea: textArea
    }, function (data) {
      alert("Data Loaded: " + data);
    });
  });
});