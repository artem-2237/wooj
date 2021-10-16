$('.info__size-item').click(function() {
    $('.info__size-item').removeClass('size-item_active');
    $(this).addClass('size-item_active');
});
$('.info__count-dec-button').click(function(){
    if (Number($('.info__count').text()) > 0) {
        $('.info__count').text( Number($('.info__count').text()) - 1 );
    }
});
$('.info__count-inc-button').click(function(){
    $('.info__count').text( Number($('.info__count').text()) + 1 );
});
$('.info__tabs > div').click(function(){
    $('.info__tabs > div').removeClass('info__tab-active');
    $('.info__tab').hide();
    $(this).addClass('info__tab-active');

    $('img.info__tab_active').hide();
    $('img.info__tab_deactive').css('display', 'inline-block');

    $(this).children('img.info__tab_deactive').hide();
    $(this).children('img.info__tab_active').css('display', 'inline-block');

    switch ($(this).attr('class')) {
        case 'info__delivery info__tab-active': $('.info__tab-delivery').show();
        break;
        case 'info__description info__tab-active': $('.info__tab-description').show();
        break;
        case 'info__specifications info__tab-active': $('.info__tab-specifications').show();
        break;
    }
})
