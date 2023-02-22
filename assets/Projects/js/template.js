jQuery(document).ready(function($) {
	var my_nav = $('.navbar-sticky'); 
	var sticky_navigation_offset_top = my_nav.offset().top;
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop();
		if (scroll_top > sticky_navigation_offset_top) { 
			my_nav.addClass( 'stick' );
		} else {
			my_nav.removeClass( 'stick' );
		}   
	};
	sticky_navigation();
	$(window).scroll(function() {
		 sticky_navigation();
	});
});