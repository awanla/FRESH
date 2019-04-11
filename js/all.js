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


    // 當 input 是 focus 的狀態下
    $(".js-input").focus(function () {
        // 找到 .label-text 元素並加上 .is-active
        $(this).parent().find(".label-text").addClass("is-active");
    })
    // 當 input 是 blur 的狀態下
    $(".js-input").blur(function () {
        // 如果裡面沒有內容
        if ($(this).val().length == 0) {
            // 找到 .label-text 元素並移除 .is-active
            $(this).parent().find(".label-text").removeClass("is-active");
        }
    })
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > 863) {
            $("header").addClass("header_scroll");
        }
        else {
            $('header').removeClass('header_scroll');
        }
    });
    
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
