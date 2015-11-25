;(function(){
  
  
   //touchstart:    
   //touchmove:     
   //touchend:    
   //touchcancel:     
  
  $(function(){
     
    $(".red-packet-btn").on("touchend",function(){
      var _t = $(this);
      Log(_t);
       Pan.open({
            type: 2,
            content: '加载..'
        });
    })
    
    $(".red-packet-btn-no").on("touchend",function(){
      Log("S");
       Pan.open({           
            content: '啊喔, 这张券已经被大家抢光了呢'
        });
    });    
    
    $(".red-packet-btn-yes").on("touchend",function(){   
      Pan.open("这张券已经抢过了哦");
    });
    
    $(".red-packet-btn-2").on("touchend",function(){
     Pan.open("每个人只能领两张券哦");
    });
    
    
    
  });

})();
