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

(function($){
	
	$.fn.snowText = function(options){	
			var $flake 			= $('<div id="snowbox" />').css({'position': 'absolute', 'top': '-50px'}).html('&#10052;'),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 10,		//雪花的最小尺寸
									maxSize		: 20,		//雪花的最大尺寸
									newOn		: 1000,		//雪花出现的频率
									flakeColor	: "#FFFFFF"	
								},
				options			= $.extend({}, defaults, options);
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$flake.clone().appendTo('body').css({
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}).animate({
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},durationFall,'linear',function(){
							$(this).remove()
						}
					);
					
			}, options.newOn);
	
	};
	
})(jQuery);
var snow2 = {
	info : {
		top : 0,
		left : 0,
		zIndex : 999999,
		number : 70
	},
	down : function(){
		//获取页面的大小
		var win_Width = window.innerWidth;
		var win_Height = window.innerHeight;
		//创建场景
		var oCanvas = document.createElement('canvas');
		oCanvas.style.position = 'fixed';
		oCanvas.style.pointerEvents = 'none';
		oCanvas.style.top = snow2.info.top + 'px';
		oCanvas.style.left = snow2.info.left + 'px';
		oCanvas.style.zIndex = snow2.info.zIndex;
		oCanvas.width = win_Width;
		oCanvas.height = win_Height;
		document.body.appendChild(oCanvas);
		//创建雪
		var arrSnow = [];
		for(var i = 0; i < snow2.info.number; i++){
			arrSnow.push({
				x : Math.random() * win_Width,//雪的横坐标
				y : Math.random() * win_Height,//雪的纵坐标
				r : Math.random() * 4 + 1,//雪的半径
				n : Math.random() * 70
			});
		}
		var gd = oCanvas.getContext('2d');//用来绘制元素
		var speed = 0;
		//处理动画效果
		setInterval(function(){
			gd.clearRect(0, 0, win_Width, win_Height);
			gd.fillStyle = 'rgba(255, 255, 255, 0.6)';
			gd.shadowBlur = 5;
			gd.shadowColor = 'rgba(255, 255, 255, 0.9)';
			gd.beginPath();
			//绘制雪
			for(var i = 0; i < 70; i++){
				var _snowObj = arrSnow[i];
				gd.moveTo(_snowObj.x, _snowObj.y);
				gd.arc(_snowObj.x, _snowObj.y, _snowObj.r, 0, Math.PI * 2, 0);
			}
			gd.fill();
			speed += 0.01;
			//处理雪下落
			for(var i = 0; i < 70; i++){
				var _snowObj = arrSnow[i];
				_snowObj.y += Math.cos(speed + _snowObj.n) + _snowObj.r / 2;
				_snowObj.x += Math.sin(speed) * 2;
				if(_snowObj.x > win_Width + 5 || _snowObj.x < -5 || _snowObj.y > win_Height){
					arrSnow[i] = i % 3 > 0 ? {x : Math.random() * win_Width, y : -10, r : _snowObj.r, n : _snowObj.n} : Math.sin(speed) > 0 ? {x : -5, y : Math.random() * win_Height, r : _snowObj.r, n : _snowObj.n} : {x : win_Width + 5, y : Math.random() * win_Height, r : _snowObj.r, n : _snowObj.n};
				}
			}
		},15);
	}
};
;(function(){
  
  
   //touchstart:    
   //touchmove:     
   //touchend:    
   //touchcancel:     
  
  $(function(){ 

      $(".floor-nav-u a").on("click",function(){
                var _t = $(this),
                    _tf = _t.attr("floor");
                var _afloTop = $("#floor-"+_tf).offset().top;
                 $('body,html').animate({ scrollTop: _afloTop-110 }, 300);
      });
      $(".back-top").on("click",function(){              
                 $('body,html').animate({ scrollTop: 0 }, 300);
      });      
      
     $(".sign-up-btn").on("click",function(){              
              var _t = $(this),
                _src = _t.attr("data-src");
                console.log(_src);
           var html =  $(".layer-html-"+_src).html();
                PL.open({
                  type: 1,
                  title: false,
                  closeBtn: false,
                  area: ['961px', '749px'],
                  shadeClose: true,
                  skin: 'layui-Pan-nobg', //没有背景色
                  content: html
              });
     });  
     
     $(".sign-up-more-btn").on("click",function(){              
                 var _t = $(this),
                _src = _t.attr("data-src");
                console.log(_src);
           var html =  $(".layer-html-"+_src).html();
                PL.open({
                  type: 1,
                  title: false,
                  closeBtn: false,
                  area: ['990px', '770px'],
                  shadeClose: true,
                  skin: 'layui-Pan-nobg', //没有背景色
                  content: html
              });
     });    
      
      
      $("body").on("click",".close-layer",function(){
        PL.closeAll();
      })
        
      
     
     
    
      
      // if(isXie8() < 9){
      //    $.fn.snowText({ 
      //     minSize: 5,		//雪花的最小尺寸
      //     maxSize: 50, 	//雪花的最大尺寸
      //     newOn: 300		//雪花出现的频率 这个数值越小雪花越多
      //   });
      // }else{
      //    snow2.down();
      // }
      
      
      floorNnav();
      
       snow2.down();
  });
    
 
 $(window).resize(function(){
    floorNnav();
  })
 
 
 $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $('.floor-nav-wrap')[scrollTop > 400 ? 'show' : 'hide']();
    
});
 
 
})();


