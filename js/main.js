$(function () {

    "use strict";

    // Drop Down Menu 
    $(".main_pages_link").on("click", function() {

        $(".sub_pages_link").slideToggle("fast");

    });

    // hide dropdown menu on click outside of the element
    $(document).on('click', function(e) {

        var $trigger = $(".main_pages_link");
        if( $trigger !== e.target && !$trigger.has(e.target).length ) {
            $(".sub_pages_link").slideUp("fast") }
    });

    



    // Contact Textarea Max Value
    var max = 200;
    $('.contact__form textarea').keyup(function(){

        var length = $(this).val().length;
        var char = max - length;

        if( char === max ) {

            $('#show_number').text("The Reminds Words Is: " + char).hide();

        } else {

            $('#show_number').text("The Reminds Words Is: " + char).show();

            if( char === 0 ){
                $('#show_number').text("Can't Enter More Letters").show().css('color', 'red');
            } else {
                $('#show_number').text("The Reminds Words Is: " + char).show().css('color', '#848e9f');
            }
        }

    });


    
    // Top Button
    $(window).on('scroll', function() {

        var sc = $(window).scrollTop();

        if( sc >= 850 ) {

            $(".top_btn").fadeIn();

        } else {

            $(".top_btn").fadeOut();
        }

        $(".top_btn").on("click", function() {

            $(window).scrollTop({});
        });

    });

    

    // Loader Page
    $(window).on("load", function() { $(".loader").fadeOut(3000) });


});




// Check Network Status
    
// const network__status = document.querySelector('.network__status');
// const wifiStatus = document.querySelector('.fa-wifi');
// const msgStatus = document.getElementById('msg__status');
// const body = document.querySelector('body');

// window.onload = function () {
//     if (window.navigator.onLine) {
//         onLine();
//     } else {
//         offLine();
//     }
// }

// window.addEventListener("online", function () {
//     onLine();
// })

// window.addEventListener("offline", function () {
//     offLine();
// })

// function onLine() {
//     msgStatus.innerHTML = "You Are Online Now!";
//     wifiStatus.classList.add('wifi__online');
//     wifiStatus.classList.remove('wifi__offline');
// }

// function offLine() {
//     msgStatus.innerHTML = "You Are Offline Now!";
//     wifiStatus.classList.add('wifi__offline');
//     wifiStatus.classList.remove('wifi__online');
// }

// network__status.onclick = function() {
//     this.style.display = 'none';
// }