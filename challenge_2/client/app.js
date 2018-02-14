
$(document).ready(function () {
  var textarea;
  $("#submit").click(function () {
    textarea = $("#textarea").val();
    $.post("http://localhost:3000/login", {
      textarea: textarea
    }, function (data) {
      alert("Data Loaded: " + data);
    });
  });
});