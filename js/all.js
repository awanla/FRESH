$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', '5thPage'],
        menu: '#myMenu'
    });
    $('.menu_icon').click(function (event) {
        /* Act on the event */
        $('body').toggleClass('open');
    });

});