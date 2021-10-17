$('#tab2').hide();
$('#tab3').hide();
$('#tab4').hide();
$('#tab5').hide();
$('#tab6').hide();

$('.tab__next').click(function() {
    switch( $(this).parent().parent().attr('id') ) {
        case 'tab1': 
        $('#tab1').hide();
        $('#tab2').show();
        break;
        case 'tab2': 
        $('#tab2').hide();
        $('#tab3').show();
        break;
        case 'tab3': 
        $('#tab3').hide();
        $('#tab4').show();
        break;
        case 'tab4': 
        $('#tab4').hide();
        $('#tab5').show();
        break;
        case 'tab5': 
        $('#tab5').hide();
        $('#tab6').show();
        break;
        case 'tab6': 
        break;
    }
});
$('.tab-buttons__tab').click(function() {
    switch( $(this).attr('id') ) {
        case '1': 
        $('#tab1').show();
        $('#tab2').hide();
        $('#tab3').hide();
        $('#tab4').hide();
        $('#tab5').hide();
        $('#tab6').hide();
        break;
        case '2': 
        $('#tab1').hide();
        $('#tab2').show();
        $('#tab3').hide();
        $('#tab4').hide();
        $('#tab5').hide();
        $('#tab6').hide();
        break;
        case '3': 
        $('#tab1').hide();
        $('#tab2').hide();
        $('#tab3').show();
        $('#tab4').hide();
        $('#tab5').hide();
        $('#tab6').hide();
        break;
        case '4': 
        $('#tab1').hide();
        $('#tab2').hide();
        $('#tab3').hide();
        $('#tab4').show();
        $('#tab5').hide();
        $('#tab6').hide();
        break;
        case '5': 
        $('#tab1').hide();
        $('#tab2').hide();
        $('#tab3').hide();
        $('#tab4').hide();
        $('#tab5').show();
        $('#tab6').hide();
        break;
        case '6': 
        $('#tab1').hide();
        $('#tab2').hide();
        $('#tab3').hide();
        $('#tab4').hide();
        $('#tab5').hide();
        $('#tab6').show();
        break;
    }
});
