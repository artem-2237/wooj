$('#main-slider').slick({
    infinite: true,
    nextArrow: $('.main-slider__arrow-right'),
    prevArrow: $('.main-slider__arrow-left'),
    dots: true,
    dotsClass: 'main-slider__dots'
});

$('#info-slider').slick({
    infinite: true,
    nextArrow: $('.info-slider__arrow-right'),
    prevArrow: $('.info-slider__arrow-left'),
    dots: true,
    dotsClass: 'info-slider__dots'
});

$('#popup-slider').slick({
    infinite: true,
    nextArrow: $('#popup-next'),
    prevArrow: $('#popup-prev'),
    dots: true,
    dotsClass: 'info-slider__dots'
});

const stockSlider = new Swiper('.stock-slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    slidesPerGroupSkip: 1,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: '.stock-slider__nextArr',
        prevEl: '.stock-slider__prevArr',
    },
    scrollbar: {
        el: '.stock-slider__scrollbar', 
    },
    breakpoints: {
        1560: {
            slidesPerView: 3,
        },
        860: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
})
