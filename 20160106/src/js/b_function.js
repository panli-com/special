function floorNnav(){
	var winW = $(window).width(),       
		mainOfL = $(".floor-sp").offset().left;
		var navW = $('.floor-nav-wrap').width();
		if(winW >= 1444){
			 var oFright = mainOfL-navW-15;
                   
			 $('.floor-nav-wrap').css("left",oFright)
		}else {
			$('.floor-nav-wrap').css({"left":'10px',right:''});
		}
}


function isXie8(){
	 var browser=navigator.appName 
      var b_version=navigator.appVersion 
      var version=b_version.split(";"); 
      var trim_Version=version[1].replace(/[ ]/g,""); 
      if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") 
      { 
        return 8;
      } 
      else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") 
      { 
      return 8; 
      } 
      else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") 
      { 
      return 8;
      } 
      else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0") 
      { 
      	return 8;
      }else{
		  return 100;
	  }
}