$(function(){
	$(window).resize(resetHomeSize);
	resetHomeSize()
	function resetHomeSize(){
		$('.home-page').css('minHeight',$(window).height())
	}	
})