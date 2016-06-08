$('#fToC').on('click', function() {
	var userFtemp = $('#valueToAdd').val();
	var userFtemp = parseFloat(userFtemp);
	var resultCtemp = (userFtemp - 32) * 5/9;
$('#tempResult').html(resultCtemp);

});

$('#cToF').on('click', function() {
	var userCtemp = $('#valueToAdd').val();
	var userCtemp = parseFloat(userCtemp);
	var resultFtemp = userCtemp * 9/5 + 32;
$('#tempResult').html(resultFtemp);

});