// 1. Make array

var imgs = ["images/image_1.jpg","images/image_2.jpg","images/image_3.jpg",
  "images/image_4.jpg","images/image_5.jpg","images/image_6.jpg"];

// 2. Keep track of index


// 3. switch image


// 4. stops at the end or loop

// $('#next').on('click', function() {
// 	$('img').attr('src', 'images/image_2.jpg')
// });

var imgIndex = 1;

$('#next').on('click', function() {
	imgChangerNext(imgIndex);
});

$('#prev').on('click', function() {
	imgChangerPrev(imgIndex);
});

function imgChangerNext() {
	$('img').attr('src', imgs[imgIndex]);

	if (imgIndex < imgs.length -1) {
    imgIndex += 1;
    $('#prev').prop("disabled", false);


  } else if (imgIndex = 5) {
  	$('#prev').prop("disabled", false);
  	
    } else {
      imgIndex = 0;
      
		}
};

function imgChangerPrev() {
	$('img').attr('src', imgs[imgIndex]);

	if (imgIndex > 0) {
    imgIndex -= 1;
  } else {
    imgIndex = imgs.length - 1;
    }
};




