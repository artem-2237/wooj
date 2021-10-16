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
    }
})
