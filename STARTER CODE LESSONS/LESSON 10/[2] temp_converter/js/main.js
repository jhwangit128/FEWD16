// Be sure to use descriptive names for variables!!


// when the user clicks on the fahrenheit to celsius button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user


// when the user clicks on the celsius to fahrenheit button
	// Grab the value that the user entered into the input
	// Convert value to floating number
	// Convert to celsius
	// Display value for user

$('#fahrenheit_to_celsius').on('click', function() {
	var fahrenheit = $('#temperature').val();
	getCelsius(fahrenheit);
	getBackgroundColor();
	console.log('test');
});	

function getCelsius (fahrenheit){
	
	fahrenheit = parseFloat(fahrenheit);
	var resultCelsius = (fahrenheit - 32) / 1.8 ;
	var finalResultCelsius = resultCelsius.toFixed(2);
	$('#result').html(finalResultCelsius);
	console.log(finalResultCelsius);
};


$('#celsius_to_fahrenheit').on('click', function() {
	var celsius = $('#temperature').val();
	getFahrenheit(celsius);
	console.log('test');
});	

function getFahrenheit (celsius){

	celsius = parseFloat(celsius);
	var resultFahrenheit = 1.8 * celsius + 32;
	var finalResultFahrenheit = resultFahrenheit.toFixed(2);
	$('#result').html(finalResultFahrenheit);
	console.log(finalResultFahrenheit);
};
	
function getBackgroundColor (){

   if (finalResultCelsius > 15 && finalResultFahrenheit > 60) {
    $("body").css('background-color', 'red');
  } else if (finalResultCelsius < 50 && finalResultFahrenheit < 10) {
    $("body").css('background-color', 'blue');
  } else {
    $("body").css('background-color', 'green');
  }
};





