$('#fToC').on('click', function() {
	var userFtemp = $('#fTemp').val();
	var userFtemp = parseFloat(userFtemp);
	var resultCtemp = (userFtemp - 32) * 5/9;
$('#cTempResult').html(resultCtemp);

});

$('#cToF').on('click', function() {
	var userCtemp = $('#cTemp').val();
	var userCtemp = parseFloat(userCtemp);
	var resultFtemp = userCtemp * 9/5 + 32;
$('#fTempResult').html(resultFtemp);

});