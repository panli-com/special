function floorNnav(){
	var winW = $(window).width(),       
		mainOfL = $(".floor-sp").offset().left;
		
		if(winW >= 1444){
			var oFright = mainOfL+1000+15;
			$('.floor-nav-wrap').css("left",oFright)
		}else {
			$('.floor-nav-wrap').css({"left":'',right:"25px"});
		}
}
