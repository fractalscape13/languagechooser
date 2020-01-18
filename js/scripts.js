//function to switch from question to question on button click
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
  //function to prevent pressing 'enter' from submitting form
  $(document).on("keydown", "form", function(event) { 
    return event.key != "Enter";
});
  //function to take input, turn into numerical value, and choose/display result
  $("#theQuiz").submit(function(event){
    event.preventDefault();
    var val1 = parseInt($("input:radio[name=input1]:checked").val());
    var val2 = parseInt($("input:radio[name=input2]:checked").val());
    var val3 = parseInt($("input:radio[name=input3]:checked").val());
    var val4 = parseInt($("input:radio[name=input4]:checked").val());
    var val5 = parseInt($("input:radio[name=input5]:checked").val());
    var result = val1 + val2 + val3 + val4 + val5

    if (result < 9) {
      $("#result1").show();
    } else if (result > 8 && result < 12) {
      $("#result2").show();
    } else  if (result > 11) {
      $("#result3").show();
    } else {
      $("#result4").show();
      $("#linklist").show();
    }

    $("#q5").hide();
    $("#output").fadeIn();
  });
});