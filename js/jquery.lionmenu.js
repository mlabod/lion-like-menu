/* Basic Lion Menu Plugin v0.1 by www.inlovewithcss.com */

$.fn.lionMenu = function(options	) {
    
    options = $.extend({
    
   		speed     : 200,      // Animation Speed
   		animation : 'true'    // Animation on/off
    
    }, options);
        
    nav = this,
    currentPageItem = this.children(":first");
             
    $('<li id="active"></li>').css({
        width : currentPageItem.outerWidth(),
        height : currentPageItem.outerHeight(),
        left : currentPageItem.position().left,
        top : currentPageItem.position().top,
    }).appendTo(this);
                  
    $('li:not(#active)').click(function() {
    
	    if(options.animation === 'true') {
	    
	        $('#active').animate(
	            {
	                left : $(this).position().left,
	                width : $(this).width()
	            }, options.speed
	        );
	    }
	    
	    else if (options.animation === 'false') {
	        $('#active').css(
	            {
	                left : $(this).position().left,
	                width : $(this).width()
	            }
	        );
	    }
    });    
};