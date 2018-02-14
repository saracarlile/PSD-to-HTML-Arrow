$(document).ready(function () {

    new WOW().init();  // initialize wow.js animation

    //waypoints animation

    $('.js-wp-1').waypoint(function (direction) {

        $('.js-wp-1').addClass('animated fadeIn');

    }, {
            offset: '70%'
        });

    $('.js-wp-2').waypoint(function (direction) {

        $('.js-wp-2').addClass('animated fadeInUp');

    }, {
            offset: '70%'
        });
        
    $('.js-wp-3').waypoint(function (direction) {

        $('.js-wp-3').addClass('animated fadeOutDown');

    }, {
            offset: '80%'
        });





    $('.flex-container-clients div').on('click', function(e) {  
        $(this).addClass('triangle-logo').siblings().removeClass('triangle-logo');  //add triangle to bottom of client img when clicked
        
        if (jQuery(this).attr('id') == 'google') {
            $('.review-text').text('Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.');
            $('.review-person').text('Sundar Pichai, Google.com');
        }
        else if (jQuery(this).attr('id') == 'booking') {
            $('.review-text').text('Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ');
            $('.review-person').text('Gillian Tans, Booking.com');
        }
        else if (jQuery(this).attr('id') == 'dropbox') {
            $('.review-text').text('The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.');
            $('.review-person').text('Drew Houston, Dropbox.com');
        }
        else if (jQuery(this).attr('id') == 'facebook') {
            $('.review-text').text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
            $('.review-person').text('Mark Zuckerberg, Facebook.com');
        }
        else if (jQuery(this).attr('id') == 'groupon') {
            $('.review-text').text('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.');
            $('.review-person').text('Rich Williams, Groupn.com');
        }
        else if (jQuery(this).attr('id') == 'paypal') {
            $('.review-text').text('Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.');
            $('.review-person').text('Daniel Schulman, Paypal.com');
        }
    });

        

});