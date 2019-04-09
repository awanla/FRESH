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
});
