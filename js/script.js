$('.form__input').focus( movePlaceholder );
$('.form__textarea').focus( movePlaceholder );


function movePlaceholder() {
	$inputWrapper = $(this).parent();
	$inputWrapper.addClass('form__placehold--active');
}


//help
// $(function(){
//     var loc = window.location.pathname;
//     $('.how-to-buy-menu__link').each(function(){
//         $(this).toggleClass('this', $(this).attr('href') == loc);
//     });
// });


// var menu_selector = '.how-to-buy-menu';
 
// function onScroll(){
//     var scroll_top = $(document).scrollTop();
//     $(menu_selector + " a").each(function(){
//         var hash = $(this).attr("href");
//         var target = $(hash);
//         if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
//             $(menu_selector + " .how-to-buy-menu__link--active").removeClass("how-to-buy-menu__link--active");
//             $(this).addClass("how-to-buy-menu__link--active");
//         } else {
//             $(this).removeClass("how-to-buy-menu__link--active");
//         }
//     });
// }
 
// $(document).ready(function () {
 
//     $(document).on("scroll", onScroll);
 
//     $("a[href^=#]").click(function(e){
//         e.preventDefault();
 
//         $(document).off("scroll");
//         $(menu_selector + ".how-to-buy-menu__link--active").removeClass("how-to-buy-menu__link--active");
//         $(this).addClass("how-to-buy-menu__link--active");
//         var hash = $(this).attr("href");
//         var target = $(hash);
 
//         $("html, body").animate({
//             scrollTop: target.offset().top
//         }, 500, function(){
//             window.location.hash = hash;
//             $(document).on("scroll", onScroll);
//         });
 
//     });
 
// });

//header-menu
$('.header-menu__open').click(function() {
	$('.header-menu').animate({  
        right: '0' 
    }, 400); 
    $(this).fadeOut('fast'); 
});

$('.header-menu__close').click(function() {  
    $('.header-menu').animate({  
        right: '200%' 
    }, 400); 
    $('.header-menu__open').fadeIn('fast'); 
});   
 	
//prod
$('.open-prod-btn').click(function() {
	$('.sec-prod__box').slideDown();
	$(this).hide();
});

//story
$('.sec-story__btn').click(function() {
	$('.sec-story__box').slideDown();
	$(this).hide();
});


//help mobile
$('.how-to-buy-mob__title').click(function() {
	$text = $(this).parent().find('.how-to-buy-mob__text--first');
	$decore = $(this).parent().find('.how-to-buy-mob__decore');

	if ( !$(this).hasClass('how-to-buy-mob__item--active') ) {

        $('.how-to-buy-mob__decore').removeClass('how-to-buy-mob__decore--rotate');
        $decore.addClass('how-to-buy-mob__decore--rotate');

        $('.how-to-buy-mob__text').slideUp('slow');
        $text.slideDown('slow');
     }
})

$('.how-to-buy-mob__more').click(function() {
	$(this).parent().parent().find('.how-to-buy-mob__text').slideDown();
	$(this).hide();
})

//lisitngPage

$('.lispahe-mob-btn').click(function() {
	$('.listpage__item').slideDown().css('display', 'block');
	$(this).hide();
})

//corpor

$('.corpor__more').click(function() {
	$('.corpor__text').slideDown();
	$(this).hide();
});

$('.corpor-mob').slick();

//bag
$('.bag-prod__close').click(function() {
	$(this).parent().hide('200');
})