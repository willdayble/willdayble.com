
$(document).ready(function() {

	/* about rotator */
	/* -------------------------------------- */
	var phrases = [
    "Less think,<br> more do.",
    "Same same, but very different."
	];

	var rotator = 0;
	setInterval(function() {
	    if (rotator == phrases.length) {rotator = 0};
	    $(".js_rotator").html(phrases[rotator]);
	    rotator++;
	}, 2 * 2000);


});