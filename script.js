$(document).ready(function() {
	var goalAmt = 167;
	console.log('right');
	$('span.amt-left').text(goalAmt + " ");

	var overAllGoalAmt = 1000;
	var goalAchieved = overAllGoalAmt - goalAmt;
	var goalAchievedPercentage = goalAchieved/10;

	$('.progress-bar').css('width', goalAchievedPercentage+'%')
	
});

