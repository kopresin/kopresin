
jQuery(document).ready(function($) {

    // Search popup
    $('.search > .icon-search').click(function(){
       	$('.search_popup').slideDown('', function() {});
     	$('.search > .icon-search').toggleClass('active');
     	$('.search > .icon-remove').toggleClass('active');
    });

    $('.search > .icon-remove').click(function(){
       	$('.search_popup').slideUp('', function() {});
     	$('.search > .icon-search').toggleClass('active');
     	$('.search > .icon-remove').toggleClass('active');
    });

    // Mobile menu
    $('.menubutton').click(function(){
       	$('header nav').slideToggle('', function() {});
    });
	
	// Dropdown Menu
	if(jQuery().hoverIntent) {
		$('nav#primary-nav > ul > li').hoverIntent({
			over : function() { $(this).children('ul.sub-menu').fadeIn(); },
			out : function() { $(this).children('ul.sub-menu').fadeOut(); },
			timeout: 100
		});
	};
	
    // Responsive videos
    if (jQuery().fitVids) {
    	$(".post_video").fitVids();
        $(".post").fitVids();
	};
	
    // Gallery slider
    if (jQuery().flexslider) {
	    $('.flexslider').flexslider({
	        animation: "slide",
	        smoothHeight: true,
	    });
	};
});