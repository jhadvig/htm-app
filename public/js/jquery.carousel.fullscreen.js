/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini
     http://www.responsivewebmobile.com
******************************************************************************/
jQuery(document).ready(function() {
	$('.carousel').carousel({
    	pause: "false",
    	interval: 6000
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
			console.log("1");
			break;
		case 'service':
			$('ul.nav.navbar-nav li.service').addClass("active");
			console.log("2");
			break;
		case 'about':
			$('ul.nav.navbar-nav li.about').addClass("active");
			console.log("4");
			break;
		case 'contact':
			$('ul.nav.navbar-nav li.contact').addClass("active");
			console.log("5");
			break;
	}

	var counter =0;

  setInterval(function() {
      counter = (counter + 0.35) % 100;
      $(".progressbar").css("width", counter + "%");
   }, 20);

  $("#MyModal").modal();
  $("#MyModal2").modal();
  $("#MyModal3").modal();

});