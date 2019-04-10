$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', '5thPage'],
        menu: '#myMenu',
        scrollingSpeed: 1000,
        autoScrolling: false,
        fitToSection: false
    });
    $('.menu_icon').click(function (event) {
        /* Act on the event */
        $('body').toggleClass('open');
    });
    var rellax = new Rellax('.rellax');
    
    $(window).resize(function () {
    var windowWidth = $(window).width();
    if (jQuery(window).width() < 425) {
        $('.left_pic').addClass('all');
    }
    else{
         $('.left_pic').removeClass('all');
    }
        var windowWidth = $(window).width();
        if (jQuery(window).width() < 425) {
            $('.col-xs-8').addClass('all');
        }
        else {
            $('.col-xs-8').removeClass('all');
        }
        var windowWidth = $(window).width();
        if (jQuery(window).width() < 425) {
            $('.tp').addClass('all');
        }
        else {
            $('.tp').removeClass('all');
        }
    
       
    });
    
   
    
});
