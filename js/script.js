$(document).ready(function() {

	//main slider
	$('.main-slider').slick({
		dots: false,
		arrows: false,
		fade: true,
		autoplay: true,
		pauseOnHover: false
	});
	//

	//form
	$('.form__input').focus( movePlaceholder );
	$('.form__textarea').focus( movePlaceholder );


	function movePlaceholder() {
		$inputWrapper = $(this).parent();
		$inputWrapper.addClass('form__placehold--active');
	}

	//header-menu
	$('.header-menu__open').click(function() {
		$('.header-menu').animate({  
	        right: '0' 
	    }, 400); 
	    $(this).fadeOut('fast'); 
	});

	$('.goods-menu-toggle').click(function( event ) {
		event.preventDefault();
		$(this).toggleClass('goods-menu-toggle--rotate');
		$(this).parent().parent().find('.goods-menu').slideToggle();

	});
		

	$('.header-menu__close').click(function() {  
	    $('.header-menu').animate({  
	        right: '200%' 
	    }, 400); 
	    $('.header-menu__open').fadeIn('fast'); 
	});   

	$('.lang__toggle').click(function() {
		$(this).toggleClass('lang__toggle--rotate');
		$('.lang__item--hidden').fadeToggle();
	})
	 	
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
		$item = $(this).parent();
		$text = $(this).parent().find('.how-to-buy-mob__text--first');
		$decore = $(this).parent().find('.how-to-buy-mob__decore');

		if ( !$item.hasClass('how-to-buy-mob__item--active') ) {

			$('.how-to-buy-mob__item').removeClass('how-to-buy-mob__item--active');
			$item.addClass('how-to-buy-mob__item--active');
	        $('.how-to-buy-mob__decore').removeClass('how-to-buy-mob__decore--rotate');
	        $decore.addClass('how-to-buy-mob__decore--rotate');
	        $('.how-to-buy-mob__text').slideUp('slow');
	        $text.slideDown('slow');
	        $('.how-to-buy-mob__more').slideDown();

	     }	else {
	     	$item.find('.how-to-buy-mob__text').slideUp();
	     	$item.removeClass('how-to-buy-mob__item--active');
	     	$decore.removeClass('how-to-buy-mob__decore--rotate');
	     }
	})

	$('.how-to-buy-mob__more').click(function() {
		$(this).parent().parent().find('.how-to-buy-mob__text').slideDown();
		$(this).hide();
	})

	//lisitngPage

	$('.lispahe-mob-btn').click(function() {
		$('.listpage__link').slideDown().css('display', 'block');
		$(this).hide();
	})

	//corpor

	$('.corpor__more').click(function() {
		$('.corpor__text').slideDown();
		$(this).hide();
	});

	$('.mob-img-slider').slick();

	//bag
	$('.bag-prod__close').click(function() {
		$(this).parent().hide('200');
	})

	//article
	$('.article__more').click(function() {
		$('.article__text').slideDown();
		$(this).hide();
	});

	//help
	var lastId;
	var howToBuyMenu = $('.how-to-buy-menu');
	var headerHeight = $('hedaer').outerHeight()+80;
	var howToBuyMenuLinks = howToBuyMenu.find('a');

	var scrollHowToBuyMenuLinks = howToBuyMenuLinks.map(function() {
		var item = $( $(this).attr('href') );
		if (item.length) {
			return item;
		}
	});

	howToBuyMenuLinks.click(function(e) {
		var href = $(this).attr("href");
		var offsetTop = href === "#" ? 0 : $(href).offset().top-headerHeight+1;

		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 300);
		e.preventDefault();
	});

	$(window).scroll(function() {
		var fromTop = $(this).scrollTop()+headerHeight;
		var cur = scrollHowToBuyMenuLinks.map(function() {
			if( $(this).offset().top < fromTop )
				return this;
		});

		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId =id;

			howToBuyMenuLinks.removeClass('how-to-buy-menu__link--active')
			.filter("[href='#"+id+"']").addClass('how-to-buy-menu__link--active');
		};
	});


	//prodCard

	$('.prod-card-slider').slick({
		dots: false,
		arrows: true,
		asNavFor: '.prod-card-subslider',
		fade: true,
	});


	$('.prod-card-subslider').slick({
		vertical: true,
		asNavFor: '.prod-card-slider',
		slidesToShow: 6,
		focusOnSelect: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        
		        slidesToShow: 5
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 3
		      }
		    }
  		]
	});

	$('.prod-card-slider').click(function() {
		// $(this).slick('unslick');

		// var $newSlider = $('.prod-card-slider').clone();

		$('.popup-slider').append($('.prod-card-slider'));

		$('.popup-slider').css('display', 'flex');

		
	});	

	$('.popup-slider__close').click(function() {
		$('.prod-slider-wrapper').append($('.prod-card-slider'));
		$('.popup-slider').hide();
	});

	$('.prod-card-mob-open-c').click(function() {
		$(this).parent().find('.prod-card__color--hidden').slideToggle();
		$(this).toggleClass('prod-card-mob-open--rotate');
	});
	
	$('.prod-card-mob-open-s').click(function() {
		$(this).parent().find('.prod-card__size--hidden').slideToggle();
		$(this).toggleClass('prod-card-mob-open--rotate');
	});
});



//
