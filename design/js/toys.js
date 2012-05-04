$(document).ready(function(){

	$('.js_get_js').hide();

  /* fix up the height on browsers that are too big */
  $('.js_yelling').css('height', $(window).height());
  $(window).resize(function() {
	  $('.js_yelling').css('height', $(window).height());
	});  
  
  $.localScroll();
  
  
  var love = [
  	{
  		person : 'Victoria Taylor',
  		quote : 'is charming.'
  	},
  	{
  		person : 'Victoria Taylor',
  		quote : 'is disarming.'
  	},  	
  	{
  		person : 'Charlie Gleason',
  		quote : 'never sleeps.'
  	},
  	{
  		person : 'Michael Wu',
  		quote : 'has ADHD.'
  	},
  	{
  		person : 'Kirsty Dayman',
  		quote : 'is batshit mental.'
  	},
  	{
  		person : 'Ben Prendergast',
  		quote : 'is inspired.'
  	},
  	{
  		person : 'Effie Rose Pryer',
  		quote : 'is involved.'
  	},
  	{
  		person : 'Michelle Steigerwalt',
  		quote : 'vomits rainbows.'
  	},
  	{
  		person : 'Lisa Rime',
  		quote : 'lacks impulse control.'
  	},
  	{
  		person : 'Dane Hunnerup',
  		quote : 'is a honey badger.'
  	}
  ];
  

  
	var timer = setInterval( boast, 1000);
	
	var counter = 0;
	
	function boast() {
	  if (counter ==0) { counter++; return; }
	
		
		$('.js_quote').text(love[counter].quote);
		$('.js_person').text(love[counter].person);

		
	  counter = love.length-1 ? counter = 0 : counter++; 
	
	}  
  
});

$(window).bind("load", function() { 
	$('.js_loading').fadeOut();
});