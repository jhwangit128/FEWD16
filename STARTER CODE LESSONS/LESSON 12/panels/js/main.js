$('article').hide();
$('#home').show();

$('li').on('click', function() {
	

		$("li").removeClass("active");
		$(this).addClass("active");
		$("article").hide();
		var content_show = $(this).attr("data-panel");
		$(content_show).show();
		// $($(this).attr("data-panel")).show;
	
	// 

});






