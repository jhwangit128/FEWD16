// 1.	When the window is resized
	// a) fade in .circle-two

$(window).on('resize', function () {
	$('#circle-two').fadeIn(3000);
});



// 2. When the user puts their mouse over #trigger (hint: look up mouseover event)
	// a) Add a <li> to the beginning of #myList that contains the text "1" (Hint: you'll need to look up the prepend jquery method)
	// b) Add a <li> to the end of #myList that contains the text "5" (Hint: you'll need to look up the append jquery method)

// $('#trigger').mouseover(function() {
// 	$('#myList').prepend('1');
// 	$('#myList').append('5');
// });

$('#trigger').on('mouseover', function() {
	$('#myList').prepend('1');
	$('#myList').append('5');
});



// BONUS: When the user scrolls down the page (hint our jquery selector will be $(window) like in example #1)
	// a) Add the .party class to the body

// $(window).scroll(function() {
// 	$('body').addClass('party');

// });

$(window).on('scroll', function() {
	$('body').addClass('party');

});