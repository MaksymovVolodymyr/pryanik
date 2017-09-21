$(document).ready(function() {

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


});