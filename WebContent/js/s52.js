/**
 * s52.js
 * 
 * Slide 52
 */
$(function() {
	let important = false;

	$('#changeMsg1').click(function() {
		let msg = $('#msg1');
		$('#target').html(msg.html());
		if (important) {
			msg.html('An <b>important</b> message');
		} else {
			msg.html('A <i>plain</i> message');
		}
		important = !important;
	});

	$('#changeTextMsg1').click(function() {
		let msg = $('#msg1');
		$('#target').text(msg.text());
		if (important) {
			msg.text('An <b>important</b> message');
		} else {
			msg.text('A <i>plain</i> message');
		}
		important = !important;
	});

	$('#changeMsg2').click(function() {
		let msg = $('#msg2');
		$('#target').text(msg.val());
		if (important) {
			msg.val('Important');
		} else {
			msg.val('Plain');
		}
		important = !important;
	});

	$('#upsize').click(function() {
		let msg = $('#msg3');
		let cur = parseInt(msg.css('font-size'));
		msg.css('font-size', cur * 2);
	});

	$('#downsize').click(function() {
		let msg = $('#msg3');
		let cur = parseInt(msg.css('font-size'));
		msg.css('font-size', cur > 1 ? cur / 2 : 1);
	});

	let countRoller = 0;
	let winStat = 0;
	
	$('#roller').click(function() {
		let result = Math.floor(Math.random() * 6) + 1;
		$('#diceImg').prop('src', './pic/' + result + '.png');
		countRoller += 1;
		
		let elem;
		if(result > 3) {
			elem = $('<div>You have won!</div>').css({color: 'green'});
			winStat += 1;
		} else {
			elem = $('<div>You have lost.</div>').css({color: 'red'});
		}		
		elem.appendTo('#results');
		$('#results').prop('title', Math.round(winStat / countRoller * 100) + '%');
	});
});
