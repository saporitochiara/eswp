/**
 * s49.js
 * 
 * Slide 49
 */
$(function() {
    let target = $('#target');
    
    $('a').click(function(event) {
        alert('You should not use any link on this page!');
        event.preventDefault();
    });

    $('html').dblclick(function(e) {
        target.append('Double-click detected at ' + e.pageX + ', ' + e.pageY + '\n');
    });
});
