// $('.sidebar').hide();

// $('.hamburger').on('click', function (e) {
//   e.preventDefault();
//   $(this).toggleClass('active');
//   $('.sidebar').show();
//   // $('.hamburger').hide();
// });

// $('.close').on('click', function () {
// 	$('.sidebar').hide();
// 	$('.hamburger').show();
// });	

/* ------------------------------------------------ FAILED */

// $('.sidebar').hide();

// $('.hamburger').on('click', function (e) {
//   e.preventDefault();

//   $(this).toggleClass('active');
//   $('.sidebar').show();
// });

// $('.close').on('click', function () {
// 	$('.sidebar').hide();
// });	

/* ------------------------------------------------ FAILED */

// $('.sidebar').hide();

// $('.hamburger').on('click', function (e) {
//   e.preventDefault();
  

//   $(this).toggleClass('active');
//   $('.sidebar').show();

//   if( $('.sidebar').is(':visible') ) {
//   		$('.content').animate({ 'margin-left': '250px' }, 'slow');
//   }
//   else {
//   	$('.sidebar').hide();
//   	$('.content').animate({ 'margin-left': '0px' }, 'slow');
//   }
// });

// $('.close').on('click', function () {
// 	$('.sidebar').hide();
// });

/* ------------------------------------------------ FAILED */ 

// $('.sidebar').hide();

// $('.hamburger').on('click', function (e) {
//   e.preventDefault();
 
//   // $(this).toggleClass('active');
//   // $('.side').toggleClass('active');

//     if( $('.sidebar').is('show') ) {
//         $('.sidebar').hide();
//     		$('.content').animate({ 'margin-left': '0px' }, 'slow');
    		
//     }
//     else {
//         $(this).toggleClass('active');
//         $('.sidebar').show();
//         $('.content').animate({ 'margin-left': '240px' }, 'slow');
//     }
// });

/* ------------------------------------------------ SUCCEEDED */  

$('.hamburger').on('click', function (e) {
  e.preventDefault();
 
  $(this).toggleClass('active');
  $('.sidebar').toggleClass('show');
  $('.content').toggleClass('contentMoveRight');
  $('a').toggleClass('moveRight');
  $('h2').toggleClass('moveRight');

});

















