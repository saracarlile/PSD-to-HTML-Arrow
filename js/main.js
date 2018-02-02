$(document).ready(function () {

    new WOW().init();

    $('.js-wp-2').waypoint(function (direction) {

        $('.js-wp-2').addClass('animated slideInUp');

    }, {
            offset: '70%'
        });

    $('.js-wp-3').waypoint(function (direction) {

        $('.js-wp-3').addClass('animated fadeIn');

    }, {
            offset: '70%'
        });

    $('.js-wp-4').waypoint(function (direction) {

        $('.js-wp-4').addClass('animated fadeIn');

    }, {
            offset: '30%'
        });

    /* had to change instructor's code here to use setTimeout instead of just using JQuery's delay function to get animation working */

    setTimeout(function () { $('.iphone-btn').animate({ bottom: "+=-3" }, 300).animate({ top: "+=-3" }, 300).delay(800) }, 1500);

    
    $('.burger-nav').on('click', function(){
        $('.container nav ul').toggleClass('open');
    });




});