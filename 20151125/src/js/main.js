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
                 $('body,html').animate({ scrollTop: _afloTop-130 }, 300);
      });
      $("#back-top").on("click",function(){              
                 $('body,html').animate({ scrollTop: 0 }, 300);
      });   
      
      
      $("#red-packet-wrap").on("click",".red-packet-btn-no",function(){       
        ReturnLayer(4);
      });    
    
      $("#red-packet-wrap").on("click",".red-packet-btn-yes",function(){       
        ReturnLayer(3);
      });
    
      $("#red-packet-wrap").on("click",".red-packet-btn-2",function(){       
        ReturnLayer(2);
      });
      
      floorNnav();
    
  });
    
 
 $(window).resize(function(){
    floorNnav();
  })



 
 
})();
