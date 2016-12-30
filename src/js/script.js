$(document).ready(function() {

	// hamburger menu

	$('.hamburger').on('click', function() {
		$('.menu').toggleClass('js-open');
	});

	$('.menu__link').on('click', function(e) {

		$('.js-active').removeClass('js-active');
		$(this).addClass('js-active');

		$('.menu').toggleClass('js-open');
	});


	// smooth scrolling

	$('.menu a').on('click', function(e) {

		var $navHeight = $('.navigation').outerHeight();
		var $link = $(this).attr('href');
		var $window = $(window);

		$('html, body').animate({
		scrollTop: $($link).offset().top - $navHeight
		}, 1000, function () {
			window.location.hash = $link;
		});
		return false;
		e.preventDefault();
		$window.trigger('scroll');
	});


	// scroll header icon

	$('.scroll').on('click', function() {

		var $navHeight = $('.navigation').outerHeight();

		$('html, body').animate({
			scrollTop: $('#about').offset().top - $navHeight
		}, 500);
	});



	// "read more" function

	$('.posts__row--second').hide();

	$('.btn--red').on('click', function() {

		var $this = $(this);
		var $posts = $('.posts__row--second');


		if($(this).text() === 'view more') {
			$(this).text('back');
			$posts.slideDown(300);
			
		} else {
			$(this).text('view more');
			$posts.slideUp(300);
		}
	});

});