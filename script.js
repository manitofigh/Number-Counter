var h1State = 0;
var number = 9;

$(".add").click(function()
{
  $("h2").text(number += 1);
});

$(".decrease").click(function(){
    $("h2").text(number -= 1);
});