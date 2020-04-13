$(document).ready(function() {
  console.log("we loaded");

  $(".foodItem").mouseover(function(){
    $(".foodItem").css("font-size", "20px");
    $("h1").html("Hands On");

  });

$("body").css("background-color", "#add8e6");
$("html").css("font-family", "Lacquer, cursive");

});
