var baseChanger = function(number, base) {
  var resultFinal = ""
  while (number > 0) {
    // debugger;
    result = number % base;
    result = result.toString();
    resultFinal = result + resultFinal;
    number = parseInt(number / base);
  };

  return resultFinal;
};

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    $("ul.results").empty();
    var userNum = parseInt($("#user-num").val());
    var userBase = parseInt($("#user-base").val());
    var result = baseChanger(userNum, userBase);
      $(".results").text(result);
  });
});
