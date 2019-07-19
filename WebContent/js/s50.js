/**
 * s50.js
 * 
 * Slide 50
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
