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
        
      
      snow2.down();
      
      // $.fn.snowText({ 
      //   minSize: 5,		//雪花的最小尺寸
      //   maxSize: 50, 	//雪花的最大尺寸
      //   newOn: 300		//雪花出现的频率 这个数值越小雪花越多
		  // });

      
      
      floorNnav();
    
  });
    
 
 $(window).resize(function(){
    floorNnav();
  })
 
 
})();


