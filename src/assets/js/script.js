$(function () {
    var nextWork = '';
    var prevWork = '';
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

    $('.our-works-left-arrow').click(function () {
        $('.our-works__slider').slick('slickPrev');
    });

    $('.our-works-right-arrow').click(function () {
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


    // function dataImgName() {
    //
    //     var dataNamePrev = $('.our-works__slider .slick-current .mask-container img').data('name');
    //     $('.our-works-left-arrow').text(dataNamePrev);
    //
    //     var dataNameNext = $('.our-works__slider .slick-current .mask-container img').data('name');
    //     $('.our-works-right-arrow').text(dataNameNext);
    //
    // }
    // $('.our-works-left-arrow').click( dataImgName());
    // $('.our-works-right-arrow').click( dataImgName());


    // $('.our-works__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //     var test = $('.our-works__slider .slick-current');
    //     console.log($(slick.$slides.get(currentSlide.test)).data('data-slick-index'));
    // });

    // $('.our-works-left-arrow').on('click', function (e) {
    //     var currentIndex = $('.our-works__slider .slick-current .mask-container img').data('name');
    //     $('.prev-work').text(currentIndex);
    //
    // });

        // $('.our-works-right-arrow').on('click', function (e) {
        //     var currentIndex = $('.our-works__slider .slick-current .mask-container img').data('name');
        //     var currentIndex2 = $('.our-works__slider .slick-current').data('data-slick-index');
        //     $('.next-work').html(currentIndex);
        //     console.log(currentIndex);
        // });

    function getWorks(index1, index2) {
        prevWork = $('.our-works__slider *[data-slick-index="'+ index1 +'"] .mask-container img').attr('data-name');
        nextWork = $('.our-works__slider *[data-slick-index="'+ index2 +'"] .mask-container img').attr('data-name');
        $('.next-work').text(nextWork);
        $('.prev-work').text(prevWork);
    }

    getWorks(-1, 1);

    $('.our-works__slider').on('afterChange', function(event, slick, currentSlide){
        getWorks((+currentSlide-1), (+currentSlide+1));
    });




    });





// // Init AOS
// AOS.init();