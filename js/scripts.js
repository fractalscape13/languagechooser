$(document).ready(function() {
  $("#startbtn").click(function(){
    $("#start").hide();
    $("#q1").fadeIn();
  })

  $("#btn1").click(function(){
    $("#q1").hide();
    $("#q2").fadeIn();
  });

  $("#btn2").click(function(){
    $("#q2").hide();
    $("#q3").fadeIn();
  });

  $("#btn3").click(function(){
    $("#q3").hide();
    $("#q4").fadeIn();
  });

  $("#btn4").click(function(){
    $("#q4").hide();
    $("#q5").fadeIn();
  });

});