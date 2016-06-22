$('nav li a').on('click', function(){


	$(this).addClass('active');
	// $(this).find('panel').slideDown();
	$('section').slideDown(500);
  $('#slide-down').slideDown(500);
  var anotherNav = $(this).attr("href");
  $(content_show).show();
  // $(this).find('panel').slideDown();
  // $(this).removeClass('active');

});

	