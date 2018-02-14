
$(document).ready(function () {
  var textarea;
  $("#submit").click(function () {
    textarea = $("#textarea").val();
    $.post("http://localhost:3000/login", {
      textarea: textarea
    }, function (data) {
      //alert("Data Loaded: " + data);

      var array = JSON.parse(data);
      for (var i = 0; i < array.length; i++) {
        $('<div>' + array[i] + '</div>').appendTo('body');
      }
    });
  });
});