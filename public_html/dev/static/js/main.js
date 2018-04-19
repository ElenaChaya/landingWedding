$(document).ready(function () {
    $('.sandwich').click(function () {
        var menu = $('.header-nav__list');
        $(this).toggleClass('active');
        if (menu.is(':visible')) {
            menu.slideUp();
        } else {
            menu.slideDown();
        }
    });


    $('.js-review-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '.reviews-slider__prev',
        nextArrow: '.reviews-slider__next',
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
    });

    $('.scroll-link').click(function () {
        if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
                ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('.popup-link').magnificPopup({
        type: 'inline'
    });

    $('#close-popup').on("click", function () {
        $.magnificPopup.close();
    });

    $("form").on("submit", function () {
        var formID = '#' + $(this).attr("id");
        $(formID).validate({
            rules: {
                name: 'required',
                phone: 'required'
            },
            messages: {
                name: 'enter the correct data',
                phone: 'enter the correct data'
            }
        });
        if ($(formID).valid()) {
            $(this).hide();
            ;
            $(this).parent().find('.success-form').addClass('success-show');

        }
        return false;
    });

    $('.js-price-item__wrap').slick({
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.price-slider__prev',
        nextArrow: '.price-slider__next',
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }, {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true
                }
            }]
    });
    
    

});
