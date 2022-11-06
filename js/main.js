$(function () {
  "use strict";

  // Loading Page
  $(window).on("load", function () {
    $(".loader").fadeOut(3000);
  });



  //SlideDown Nav-bar
  $(".navbar__content label").on("click", function(){
    $('.navbar__link').slideToggle();
  });



  // Drop Down Menu
  $(".main_pages_link").on("click", function () {
    $(".sub_pages_link").slideToggle("fast");
  });

  // hide dropdown menu on click outside of the element
  $(document).on("click", function (e) {
    var $trigger = $(".main_pages_link");
    if ($trigger !== e.target && !$trigger.has(e.target).length) {
      $(".sub_pages_link").slideUp("fast");
    }
  });


  
  // Contact Textarea Max Value
  var max = 200;
  $(".contact__form textarea").keyup(function () {
    var length = $(this).val().length;
    var char = max - length;

    if (char === max) {
      $("#show_number")
        .text("The Remaining Letters Is: " + char)
        .hide();
    } else {
      $("#show_number")
        .text("The Remaining Letters Is: " + char)
        .show();

      if (char === 0) {
        $("#show_number")
          .text("Can't Enter More Letters")
          .show()
          .css("color", "red");
      } else {
        $("#show_number")
          .text("The Remaining Letters Is: " + char)
          .show()
          .css("color", "#848e9f");
      }
    }
  });

  // Top Button
  $(window).on("scroll", function () {
    var sc = $(window).scrollTop();

    if (sc >= 850) {
      $(".top_btn").fadeIn();
    } else {
      $(".top_btn").fadeOut();
    }

    $(".top_btn").on("click", function () {
      $(window).scrollTop({});
    });
  });


  // OWL-CAROUSEL PRICING
  $('.owl-pricing').owlCarousel({
    rtl:false,
    loop:true,
    nav:true,
    mouseDrag: false,
    margin: 50,
    navText : [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});


  // OWL-CAROUSEL TESTIMONIAL
  $('.owl-testimonial').owlCarousel({
    rtl:false,
    loop:true,
    margin: 30,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

});//End jQuery..



//Set Date And Time In Input
function clock() {

  const inputDate = document.getElementById('date');
  const inputTime = document.querySelector('.time');
  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let flag = "AM";

  if (hours == 0) { //Morning
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;  //Afternon
    flag = "PM";
  }

  inputDate.addEventListener("focus", function() {
    inputDate.value = `${day} / ${month+1} / ${year}`;
  });

  inputTime.addEventListener("focus", function() {
    inputTime.value = `${hours} : ${minutes} ${flag}`;
  });


  setTimeout(function(){
    clock();
  }, 1000);

}
clock();




//Toggle Menu Icon
const btnIcon = document.querySelector('.bar-icon');
const menuIcon = document.querySelector('.fa-bars');

btnIcon.onclick = () => menuIcon.classList.toggle("fa-times");




//WOW.js Animation Plugin
new WOW().init();