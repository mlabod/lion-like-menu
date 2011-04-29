/* Basic Lion Menu Plugin v0.1 by www.inlovewithcss.com */

$.fn.lionMenu = function() {
    
    nav = this,
    currentPageItem = this.children(":first");
             
    $('<li id="active"></li>').css({
        width : currentPageItem.outerWidth(),
        height : currentPageItem.outerHeight(),
        left : currentPageItem.position().left,
        top : currentPageItem.position().top,
    }).appendTo(this);
                  
    $('li:not(#active)').click(function() {
        $('#active').animate(
            {
                left : $(this).position().left,
                width : $(this).width()
            }, 200
        );
    });    
};


$(function(){

	$('#menu').lionMenu();

});


