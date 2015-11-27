;(function(){
  
  
   //touchstart:    
   //touchmove:     
   //touchend:    
   //touchcancel:     
  
  $(function(){ 

      $(".floor-nav-a").on("click",function(){
                var _t = $(this),
                    _tf = _t.attr("floor");
                var _afloTop = $("#floor-"+_tf).offset().top;
                 $('body,html').animate({ scrollTop: _afloTop }, 300);
      });
      $("#back-top").on("click",function(){              
                 $('body,html').animate({ scrollTop: 0 }, 300);
      })
    
  });
    
 
})();
