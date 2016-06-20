// Create a global variable for the total
// Create a function you can run when you submit the field Hint: .submit() in jQuery

// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)

// var total = 0;

// $('#entry').submit(enter);
// 	var entry = $('#newEntry').val();
// 	entry = parseFloat(entry);
// 	var currency = currencyFormat(entry);
// 	$('#entries').append('<li>'+ currency + '</li>');
// 	total += entry;
// 	$('#total').html(currencyFormat(total));
// 	$('#newEntry').val('');



// $('#entry').submit(function () {
// 	total = total + entry;
// 	$('#total').html(newEntry);
// });

// function enter() {
// 	var entry = $('#newEntry').val();
// 	var entry = parseFloat(entry);
// 	currency = currencyFormat(entry);
// }


// Declare global variable
var total = 0;

// https://api.jquery.com/submit/
// Bind the 'submit' event to the .entry-form on the page
$('#entry').submit(enter);

// Create a 'enter' function that will be run above when .submit() is called
function enter() {
  // Getting the value of the input with an id of #newEntry
  var entry = $('#newEntry').val();

  // Taking the string of text in the input and turning it into a number so that we can work with it and change it in JS
  entry = parseFloat(entry);

  // Declaring a variable of 'currency' and running the currencyFormat() function. Notice 'entry' is being passed into this function.
  // Currency should equal '$20.00' if '20' is entered after the function is run
  var currency = currencyFormat(entry);

  // Append a new list item with 'currency' (which is our newly formatted string $20.00) inside of it
  $('#entries').append('<li>' + currency + '</li>');

  // Take the value of the 'entry' variable INSIDE OF THIS FUNCTION and add it to the global variable 'total'
  total += entry;

  // To test to see what 'total' is at this point, you can use a console.log()
  // console.log(total);

  // Replace the HTML that is inside of the container with the ID of #total, with a formatted total by using our currencyFormat() function
  $('#total').html(currencyFormat(total));

  // Clear out the value that is inside of the input box
  $('#newEntry').val('');

  return false;
}

function currencyFormat(number) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  var currency = parseFloat(number);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  // Format the user's input to '20.00' if they put in '20'
  currency = currency.toFixed(2);

  // Now that we have the user's number with '.00', add a $ to the beginning of the string, so that its formatted correctly when it comes out the other end
  currency = '$' + currency;

  // This should return $20.00 if 20 was passed
  return currency;
}