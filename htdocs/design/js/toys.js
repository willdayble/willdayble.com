
$(document).ready(function() {

	/* about rotator */
	/* -------------------------------------- */
	var phrases = [
    "Keynotes without over-rehearsed buzzwords.",
    "Tech strategy normal humans can understand.",
    "Same same, but different.",
    "Social enterprise without the bullshit." 
	];

	var rotator = 0;
	setInterval(function() {
	    if (rotator == phrases.length) {rotator = 0};
	    $(".js_rotator").html(phrases[rotator]);
	    rotator++;
	}, 2 * 2000);


});