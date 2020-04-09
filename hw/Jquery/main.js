$(document).ready(function() {
  console.log("we loaded");

  $(".foodItem").mouseover(function(){
    $(".foodItem").css("font-size", "20px");
    $("h1").html("Your Lucky Day");

  });

});
