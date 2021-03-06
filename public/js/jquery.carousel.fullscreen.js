/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini
     http://www.responsivewebmobile.com
******************************************************************************/
$(window).load(function() {

	var counter =0;

  setInterval(function() {
      counter = (counter + 0.35) % 100;
      $(".progressbar").css("width", counter + "%");
      if (counter > 99.6) {
      	$('.carousel').carousel('next')
      }
   }, 20);

});

jQuery(document).ready(function() {

	$('#mp-logo').mouseover(function(){
		$(this).stop().animate({ top: 0 });
	});
	$('#mp-logo').mouseout(function(){
		$(this).animate({ top: -45 });
	});

	$('.carousel').carousel({
    	pause: "false",
    	interval: false
	});

	$(".fancybox").fancybox({
        'hideOnContentClick': true,
        'autoScale': true,
        'height': 'auto',
        'scrolling': 'no',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'centerOnScroll': true
	});

	$(".fancybox2").fancybox({
        'hideOnContentClick': true,
        'autoScale': true,
        'height': 'auto',
        'scrolling': 'no',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'centerOnScroll': true
	});

	$('.carousel').css({'margin': 0, 'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
	$('.carousel .item').css({'position': 'fixed', 'width': '100%', 'height': '100%'});
	$('.carousel-inner div.item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background': 'url('+imgSrc+') center center no-repeat', '-webkit-background-size': '100% ', '-moz-background-size': '100%', '-o-background-size': '100%', 'background-size': '100%', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover'});
		$(this).remove();
	});

	$(window).on('resize', function() {
		$('.carousel').css({'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
	});

	var path = window.location.pathname.split("/")[1]

	switch (path){
		case '':
			$('ul.nav.navbar-nav li.main').addClass("active");
			$('.progressbar').addClass("red");
			break;
		case 'service':
			$('ul.nav.navbar-nav li.service').addClass("active");
			$('.progressbar').addClass("blue");
			break;
		case 'references':
			$('ul.nav.navbar-nav li.service').addClass("active");
			$('.progressbar').addClass("blue");
			break;
		case 'contact':
			$('ul.nav.navbar-nav li.contact').addClass("active");
			$('.progressbar').addClass("yellow");
			break;
	}

  $("#MyModal").modal();
  $("#MyModal2").modal();
  $("#MyModal3").modal();

});