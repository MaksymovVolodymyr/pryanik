$('.form__input').focus( movePlaceholder );
$('.form__textarea').focus( movePlaceholder );


function movePlaceholder() {
	$inputWrapper = $(this).parent();
	$inputWrapper.addClass('form__placehold--active');
}



$(function(){
    var loc = window.location.pathname;
    $('.how-to-buy-menu__link').each(function(){
        $(this).toggleClass('this', $(this).attr('href') == loc);
    });
});


var menu_selector = '.how-to-buy-menu'; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " .how-to-buy-menu__link--active").removeClass("how-to-buy-menu__link--active");
            $(this).addClass("how-to-buy-menu__link--active");
        } else {
            $(this).removeClass("how-to-buy-menu__link--active");
        }
    });
}
 
$(document).ready(function () {
 
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + ".how-to-buy-menu__link--active").removeClass("how-to-buy-menu__link--active");
        $(this).addClass("how-to-buy-menu__link--active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
});