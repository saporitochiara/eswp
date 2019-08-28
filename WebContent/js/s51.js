/**
 * s51.js
 * 
 * Slide 51
 */
$(function() {
    $('#colorOn').click(function() {
        $('#msg1').addClass('red');
    });

    $('#colorOff').click(function() {
        $('#msg1').removeClass('red');
    });

    $('#swapColor').click(function() {
        $('#msg2').toggleClass('red');
    });
});
