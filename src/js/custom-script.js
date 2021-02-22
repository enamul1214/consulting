
;
jQuery(document).ready(function($) {

    /*  Window scroll function
    ============================================= */
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        // Scroll function for header
        if (scroll) {
            $('.header').addClass('bg-white');
        } else {
            $('.header').removeClass('bg-white');
        } 
    });

    /*  Our Work Slider
    ============================================= */
    $('.our-work-slider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
        centerMode: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    });

    /*  Team Slider
    ============================================= */
    $('.team-slider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    })
});


jQuery(window).on('load', function(){
    //wow js
    var wow = new WOW(
      {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       40,          // distance to the element when triggering the animation (default is 0)
          mobile:       false,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
      }
    );
     <!--[if !IE]> -->
        wow.init();
    <!-- <![endif]-->

});