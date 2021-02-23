
;
jQuery(document).ready(function($) {

    /*  Window scroll function
    ============================================= */
    let a = 0;
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        // Scroll function for header
        if (scroll) {
            $('.header').addClass('bg-white');
        } else {
            $('.header').removeClass('bg-white');
        }


        // Counting Effect
        let oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counting-number').each(function() {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
                },

                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }

                });
            });
            a = 1;
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
    });

    /*  Team Slider
    ============================================= */
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});