// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function ($) {

	// Dev tools

	$(window).resize(function() {
		$('#ruler').html($(window).width() + 'x' + $(window).height());
	});

	/* trigger when page is ready */
	$(document).ready(function (){

		// Your functions go here

		$(window).resize();

	});

}(window.jQuery || window.$));