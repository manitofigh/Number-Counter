var h1State = 0;
var number = 0;

function decreaseNumber(){
  $("h2").text(number -= 1);
}

function increaseNumber(){
  $("h2").text(number += 1);
}

$(".add").click(function()
{
  increaseNumber();
});

$(".decrease").click(function(){
    decreaseNumber();
});

$(document).keydown(function(event){
    var keyPressed = event.which; //returns clicked key ASCII code
    console.log(keyPressed);
    if (keyPressed === 87 || keyPressed === 68 || keyPressed === 38 || keyPressed === 39){ // in order: "w", "s", "↑", or "→" key
      increaseNumber();
      $(".add").addClass("addActive");
      setTimeout(function() {
        $(".add").removeClass("addActive");
      }, 50);
    }
    else if (keyPressed === 83 || keyPressed === 65 || keyPressed === 40 || keyPressed === 37){ // in order: "s", "a", "↓", or "←" key
      decreaseNumber();
      $(".decrease").addClass("decreaseActive");
      setTimeout(function() {
        $(".decrease").removeClass("decreaseActive");
      }, 50);
    }
});