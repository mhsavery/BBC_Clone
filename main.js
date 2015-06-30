$(document).ready(function(){
	
	$('#more-bar-button').click(function(){
		$('#more-bar').slideToggle();
	});
	
	$('#hidden-nav-bar').click(function(){
  		if ($('#lower-nav-hidden').css('visibility') == 'hidden')
    			$('#lower-nav-hidden').css('visibility','visible');
  		else
    			$('#lower-nav-hidden').css('visibility','hidden');
	});
});
