$(document).ready(function() {
  console.log("we loaded"):

  $("button21").click(function() {

  $("#title").click(function(){
    $("#title").css("color", "#f9423a");
    $("#title").css("font-size", "500px");
  });

  $("button2").click(function() {
    $("title").removeClass("big-text");
  });

  $("p").mouseover(function() {
    $("p").css("font-size", "21px");
  });


});
