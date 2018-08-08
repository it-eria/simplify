
$(function () {
    $('.prev-slide').click(function () {
        $('.our-news__slider').slick('slickPrev');
    });

    $('.next-slide').click(function () {
        $('.our-news__slider').slick('slickNext');
    });

    $('.our-news__slider').slick({
        dots: false,
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
            }
        ]
    });

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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
            }
        ]
    });

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

$(function() {
    $('.default-title').each(function() {
        var str = $(this).find('h2').text();
        var lastSymbol = str[str.length - 1];
        console.log(lastSymbol);
        if (lastSymbol == '?') $(this).find('h2').append('<i class="dot dot--question"></i>')
        else if (lastSymbol == '!') $(this).find('h2').append('<i class="dot dot--attension"></i>')
        else if (lastSymbol == '.') $(this).find('h2').append('<i class="dot dot--dot"></i>')
        else  $(this).find('h2').append('<i class="dot"></i>')
    });

    $('.who-we-are__global-block__default').each(function() {
        var str = $(this).find('h2').text();
        var lastSymbol = str[str.length - 1];
        console.log(lastSymbol);
        if (lastSymbol == '?') $(this).find('h2').append('<i class="dot dot--question"></i>')
        else if (lastSymbol == '!') $(this).find('h2').append('<i class="dot dot--attension"></i>')
        else if (lastSymbol == '.') $(this).find('h2').append('<i class="dot dot--dot"></i>')
        else  $(this).find('h2').append('<i class="dot"></i>')
    });
});


// // Init AOS
// AOS.init();