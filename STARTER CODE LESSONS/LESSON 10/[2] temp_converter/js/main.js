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
	console.log('test');
});	

function getCelsius (fahrenheit){
	
	fahrenheit = parseFloat(fahrenheit);
	var resultCelsius = (fahrenheit - 32) / 1.8 ;
	var finalResultCelsius = resultCelsius.toFixed(2);
	$('#result').html(finalResultCelsius);
	console.log(finalResultCelsius);

		if (finalResultCelsius > 15) {
    $("body").css('background-color', 'red');
  } else if (finalResultCelsius < 50) {
    $("body").css('background-color', 'blue');
  } else {
    $("body").css('background-color', 'green');
  }
  console.log('test');
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
	  if (finalResultFahrenheit > 60) {
    $("body").css('background-color', 'red');
  } else if (finalResultFahrenheit < 10) {
    $("body").css('background-color', 'blue');
  } else {
    $("body").css('background-color', 'green');
  }
	console.log(finalResultFahrenheit);
};



// function getBackgroundColor (){

//    if (finalResultCelsius > 15 && finalResultFahrenheit > 60) {
//     $("body").css('background-color', 'red');
//   } else if (finalResultCelsius < 50 && finalResultFahrenheit < 10) {
//     $("body").css('background-color', 'blue');
//   } else {
//     $("body").css('background-color', 'green');
//   }
// };


// var fahrenheit;
// var celsius;

// function convertFahrenheitToCelsius(input){
//   fahrenheit = parseFloat(input);

//   celsius = (fahrenheit - 32) / 1.8;
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
//   celsius = celsius.toFixed(2);
// };

// function convertCelsiusToFahrenheit(input){
//   celsius = parseFloat(input);

//   var fahrenheit = 1.8 * celsius + 32;
//   fahrenheit = fahrenheit.toFixed(2);
// };

// function changeBackgroundColor(){
//   if (fahrenheit>=70) {
//     console.log("hot");
//     $("body").css({
//       "background-color": 'red'
//     });
//   } else{
//         $("body").css({
//       "background-color": 'blue'
//     });
//   }
// };

// $('#fahrenheit_to_celsius').on('click', function () {

//   fahrenheit = $('#temperature').val();
//   convertFahrenheitToCelsius(fahrenheit);

//   // Hint: http://dev.w3.org/html5/html-author/charref
//   $("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");
//   changeBackgroundColor();
//   $('#temperature').val('');
// });

// $('#celsius_to_fahrenheit').on('click', function () {
//   celsius = $('#temperature').val();

//   convertCelsiusToFahrenheit(celsius);

//   $("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");
//   changeBackgroundColor();
//   $('#temperature').val('');
// });










