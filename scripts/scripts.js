/*
* conotroller for my entire website
*/
$(document).ready(function(){	

    $('.contact-link').on('click', function() {
		if ($('#Contact').hasClass('hide')) {
			$('#Contact').removeClass('hide');
		}
	});

	$('.x-button').on('click', function() {
		if (!($('#Contact').hasClass('hide'))) {
			$('#Contact').addClass('hide');
		}
		if (!($('#imageContainer').hasClass('hide'))) {
			$('#imageContainer').addClass('hide');
		}
	});

	$('.expandable-img').on('click', function() {
		$('#image').css('background-image', 'url("' + $(this).attr('src').replace('thumb', 'img') + '")');
		$('#imageContainer').removeClass('hide');
	})
});