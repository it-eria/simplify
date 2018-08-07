$(function() {
    var slickParameters = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 15,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    centerMode: false,
                    focusOnSelect: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
            }

        ]
    };

    function slickUnslickClients() {
        var windowWidth = $(window).width();
        if (windowWidth < 768) {
            if (!$('.client-block__brands-block').hasClass('slick-slider')) {
                $('.client-block__brands-block').slick(slickParameters);
            }
        } else {
            if ($('.client-block__brands-block').hasClass('slick-slider')) {
                $('.client-block__brands-block').slick('unslick');
            }
        }
    }

    slickUnslickClients();

    $('.our-works-left-arrow').click(function(){
        $('.our-works__slider').slick('slickPrev');
    });

    $('.our-works-right-arrow').click(function(){
        $('.our-works__slider').slick('slickNext');
    });

    $('.our-works__slider').slick({
        dots: false,
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});





// // Init AOS
// AOS.init();