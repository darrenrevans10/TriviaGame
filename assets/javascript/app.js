
$(document).ready(function() {

$("#timeLeft").hide();
$("#startOver").hide();
$("#questions").hide();
$("#submit").hide();
$("#startOver").hide();
$("#results").hide();

var incorrect = 0;
var correct = 0;
var unanswered = 0;
var number = 30;


$("#timeLeft").on("click", run);

    function decrement(){
        // Decrease number by one.
        number--;
        // Show the number in the #timeLeft div.
        $("#timeLeft").html("<h2>" + "Time Remaining: " + number + " Seconds" + "</h2>");
        // When the number is equal to zero, 
       	if (number === 0){
       		stop();
			$("#timeLeft").hide();
			$("#questions").hide();
			$("#startGame").hide();
			$("#results").show();
			$("#submit").hide();
			results();
			$("#startOver").show();
        }
    }
  
    function run(){
        counter = setInterval(decrement, 1000);
    }
    
    // The stop function
    function stop(){
    // Clears our "counter" interval. The interval name is passed to the clearInterval function.
        clearInterval(counter);
       
    }


$("#startGame").on("click", function() {

	$(this).hide();
	$("#timeLeft").show();
	$("#questions").show();
	$("#submit").show();
	run();

});

$("#submit").on("click", function() {

	$(this).hide();
	$("#timeLeft").hide();
	$("#questions").hide();
	$("#startGame").hide();
	$("#results").show();
	results();
	$("#startOver").show();

});

$("#startOver").on("click", function() {

	$("#startGame").show();
	$("#timeLeft").hide();
	$("#startOver").hide();
	$("#questions").hide();
	$("#submit").hide();
	$("#startOver").hide();
	$("#results").hide();
	stop();

	var incorrect = 0;
	var correct = 0;
	var unanswered = 0;
	number = 31;

});

$("input[type=radio]").on("change", function() {

	correct = $("input[value=correct]:checked").length;
	incorrect = $("input[value=wrong]:checked").length;
	unanswered = (8 - (correct + incorrect));

});

function results() {

	$("#results").html("<h2>" + "All Done!" + "</h2>" + "<br>" +
		"<h2>" + "Correct answers: " + correct + "</h2>" + "<br>" +
		"<h2>" + "Incorrect answers: " + incorrect + "</h2>" + "<br>" +
		"<h2>" + "Unanswered: " + unanswered + "</h2>");

}




});