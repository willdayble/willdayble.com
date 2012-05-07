$(document).ready(function(){

	$('.js_get_js').hide();

  /* fix up the height on browsers that are too big */
/*
	if ($('.js_yelling').height() < $(window).height())
	{
	  $('.js_yelling').css('height', $(window).height());
	} else
	{
		$('.js_yelling').css('height', 'auto');
	}
	
	
  $(window).resize(function() {
  	
  	if ($('.js_yelling').height() < $(window).height())
  	{
		  $('.js_yelling').css('height', $(window).height());
  	} else
		{
			$('.js_yelling').css('height', 'auto');
		}
	}); 
*/ 
  
  //$.localScroll();
  
  
  var love = [
  	{
  		person : '~ Kirsty Dayman',
  		quote : 'is batshit mental.'
  	},
  	{
  		person : '~ Ben Prendergast',
  		quote : 'is inspired.'
  	},
  	{
  		person : '~ Effie Rose Pryer',
  		quote : 'is involved.'
  	},
  	{
  		person : '~ Michelle Steigerwalt',
  		quote : 'vomits rainbows.'
  	},
  	{
  		person : '~ Victoria Taylor',
  		quote : 'is charming.'
  	},
  	{
  		person : '~ Victoria Taylor',
  		quote : 'is disarming.'
  	},  	
  	{
  		person : '~ Charlie Gleason',
  		quote : 'never sleeps.'
  	},
  	{
  		person : '~ Michael Wu',
  		quote : 'has ADHD.'
  	},  	
  	{
  		person : '~ Lisa Rime',
  		quote : 'lacks impulse control.'
  	},
  	{
  		person : '~ Dane Hunnerup',
  		quote : 'is a honey badger.'
  	}
  ];
  

  
	var counter = 0;
	
	var timer = setInterval( boast, 1000);

	
	function boast() {

		if (counter == love.length-1) {counter = 0;}
		else {counter++;}
		
	
		$('.js_quote').fadeOut(500, function() {
			$('.js_quote').text(love[counter].quote).fadeIn();  
	  });

		$('.js_person').fadeOut(500, function() {
			$('.js_person').text(love[counter].person).fadeIn();  
	  });


		clearInterval(timer);
		timer = setInterval( boast, 4000);
	
	}  
  boast();
});

/*
$(window).bind("load", function() { 
	$('.js_loading').fadeOut();
});
*/