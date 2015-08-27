function navigator() {
	var topMargin = 240;

	//enables the module-sliding navigation
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		var target = this.hash,
			$target = $(target);
		$('.section').removeClass('hide').slideUp();
		$target.addClass('hide').slideDown();
	});
};
