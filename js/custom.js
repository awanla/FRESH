$(document).ready(function() {
	$('#fullpage').fullpage({
	// 連結初始化
	anchors:['firstPage', 'secondPage', 'thirdPage','4thPage','5thPage'],
	menu: '#js-menu',
	autoScrolling: false,
	scrollingSpeed:1200
});
	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 150){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
	})
	// rellax initialize
	var rellax = new Rellax('.rellax',{
		// 避免跑板
		center:true
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[],
	dots: false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
});
