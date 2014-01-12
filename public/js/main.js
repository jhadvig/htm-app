$(window).load(function() {
  $(".loader").fadeOut("slow");
})

$(window).ready(function(){
	htm_init();
});

function htm_init(){
	main_menu();
}

function main_menu(){

	var path = window.location.pathname.split("/")[1]

	switch (path){
		case '':
			$('.nav-justified.main-menu li.main').addClass("active");
			console.log("1");
			break;
		case 'service':
			$('.nav-justified.main-menu li.service').addClass("active");
			console.log("2");
			break;
		case 'projects':
			$('.nav-justified.main-menu li.projects').addClass("active");
			console.log("3");
			break;
		case 'about':
			$('.nav-justified.main-menu li.about').addClass("active");
			console.log("4");
			break;
		case 'contact':
			$('.nav-justified.main-menu li.contact').addClass("active");
			console.log("5");
			break;
	}
}