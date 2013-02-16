/*
$(document).ready(function() {

	$('.js_get_js').hide();
  var love = ["slow food", "tech", "sustainability", "social enterprise", "coffee", "local food", "bikes", "motorbikes", "projects that make the world better"];
	var counter = 0;
	
	var timer = setInterval( boast, 3000);
	
	function boast()
  {
		counter = (counter == love.length - 1) ? 0 : counter + 1;
	
		$('.js_quote').fadeOut(500, function() {
			$('.js_quote').text(love[counter]).fadeIn();
    });

	}

});
*/


$(document).ready(function() {



	// menu
	// --------------------------------------------------------------------------------------------------------
	$('h1').click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
	});


	$('.arrow_next').click(function(e){
		e.preventDefault();
		
		if ($('.content .tab.active').next('.tab').length > 0)
		{			
		
			$('.content .tab.active').removeClass('active').next('.tab').addClass('active').prevAll('.tab').removeClass('upcoming').addClass('previously');
			$('.content .tab.active').nextAll('.tab').removeClass('previously').addClass("upcoming");
			
			/* le menu */
			$('.menu a').removeClass('active');
			$('.menu a[rel="' + $('.content .tab.active').attr('id') + '"]').addClass('active');			


			$('.arrow_prev').removeClass('off');
			
			/* if last */			
			if (!$('.content .tab.active').next('.tab').length > 0)
			{
				$('.arrow_next').addClass('off');
			}			
/*
			console.log($('.menu a').length-1);
			console.log($('.menu a.active').prevAll().length);
			console.log('----');
*/
			$('.where_we_at').css('width', "" + 100 - ((($('.menu a.active').nextAll().length / $('.menu a').length)) * 100) + "%");
			
		}
	});

	$('.arrow_prev').click(function(e){
		e.preventDefault();
		
		
		
		if ($('.content .tab.active').prev('.tab').length > 0)
		{			
			$('.content .tab.active').removeClass('active').prev('.tab').addClass('active').prevAll('.tab').removeClass('upcoming').addClass('previously');
			$('.content .tab.active').nextAll('.tab').removeClass('previously').addClass("upcoming");
	
			/* le menu */
			$('.menu a').removeClass('active');
			$('.menu a[rel="' + $('.content .tab.active').attr('id') + '"]').addClass('active');			
			
			$('.arrow_next').removeClass('off');
			
			/* if first */			
			if (!$('.content .tab.active').prev('.tab').length > 0)
			{
				$('.arrow_prev').addClass('off');
			}				
			
/*
			console.log($('.menu a').length-1);
			console.log($('.menu a.active').prevAll().length);
			console.log('----');
*/
			$('.where_we_at').css('width', "" + 100 - ((($('.menu a.active').nextAll().length / $('.menu a').length)) * 100) + "%");
			
		}

	});
	
	
	
	
	
	
	/* menu clix */
	$('.menu a').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		console.log();
		
		
		$('.menu a.active').removeClass('active');
		$(this).addClass('active');
		
		$('.content .tab.active').removeClass('active');
		$("#" + $(this).attr('rel')).addClass('active').prevAll('.tab').removeClass('upcoming').addClass('previously');
		$("#" + $(this).attr('rel')).nextAll('.tab').removeClass('previously').addClass("upcoming");
		
		
		$('.arrow_prev').removeClass('off');
		$('.arrow_next').removeClass('off');
		
		
		if (!$('.content .tab.active').prev('.tab').length > 0)
		{
			$('.arrow_prev').addClass('off');
		}				

		if (!$('.content .tab.active').next('.tab').length > 0)
		{
			$('.arrow_next').addClass('off');
		}			
		
		$('.where_we_at').css('width', "" + 100 - ((($('.menu a.active').nextAll().length / $('.menu a').length)) * 100) + "%");		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	// all the below is hax
	// --------------------------------------------------------------------------------------------------------
	
	var right_arrow = function() {
	    
	    var mX, mY, distance,
	        $distance = $('#distance'),
	        $element  = $('.arrows .arrow_next');
	
	    var calculateDistance = function (elem, mouseX, mouseY) {
	        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
	    }
	
	    $(document).mousemove(function(e) {  
	        mX = e.pageX;
	        mY = e.pageY;
	        distance = calculateDistance($element, mX, mY);
	        $distance.text(distance);



	        // now the fun stuff
	        
	        var arrow_offset = $('.arrows .arrow_next').offset().top;
	        var cursor_offset = e.pageY;
	        var rotation_amount = 0;
	        	        
	        if (distance < 150)
	        {
	        	$('#near').text("near");
	        	
	        	// now above or below
		        if (cursor_offset < (arrow_offset+35))
		        {
			        //above
			        $('#above').text("above");
			        rotation_amount = -(distance/15);
			        $('.arrows').css({ '-moz-transform': 'rotate(' + rotation_amount + 'deg)'});
			        
		        }
		        else if (cursor_offset < arrow_offset+70)
		        {
			        // over
			        $('#above').text("over");
		        }
		        else
		        {
		        	// below
			        $('#above').text("under");
			        rotation_amount = (distance/15);
			        $('.arrows').css({ '-moz-transform': 'rotate(' + rotation_amount + 'deg)'});
		        }		        
		        
	        }
	        else
	        {
		        $('#near').text("far");
		        $('.arrows').css({ '-moz-transform': 'rotate(' + 0 + 'deg)'});
	        }       
	    });
	
	};
	
	
	/* all again for the left */

	var left_arrow = function() {
	    
	    var mX, mY, distance,
	        $distance = $('#distance'),
	        $element  = $('.arrows .arrow_prev');
	
	    var calculateDistance = function(elem, mouseX, mouseY) {
	        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
	    }
	
	    $(document).mousemove(function(e) {  
	        mX = e.pageX;
	        mY = e.pageY;
	        distance = calculateDistance($element, mX, mY);


	        // now the fun stuff
	        
	        var arrow_offset = $('.arrows .arrow_prev').offset().top;
	        var cursor_offset = e.pageY;
	        var rotation_amount = 0;
	        	        
	        if (distance < 150)
	        {
        	
	        	// now above or below
		        if (cursor_offset < (arrow_offset+35))
		        {
			        //above
			        rotation_amount = -(distance/15);
			        $('.arrows').css({ '-moz-transform': 'rotate(' + rotation_amount + 'deg)'});
			        
		        }
		        else if (cursor_offset < arrow_offset+70)
		        {
			        // over

		        }
		        else
		        {
		        	// below

			        rotation_amount = (distance/15);
			        $('.arrows').css({ '-moz-transform': 'rotate(' + rotation_amount + 'deg)'});
		        }		        
		        
	        }
	        else
	        {

		        $('.arrows').css({ '-moz-transform': 'rotate(' + 0 + 'deg)'});
	        }       
	    });
	
	};
	
	// GO!
	// left_arrow();
	// right_arrow();


});