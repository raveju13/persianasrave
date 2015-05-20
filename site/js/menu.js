$(function() {
    var pull = $('#Pull');
    menu = $('.Menu-lista');
    menuHeight = menu.height();

    $(Pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});
