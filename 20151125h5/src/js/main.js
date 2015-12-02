;(function(){
  
  
   //touchstart:    
   //touchmove:     
   //touchend:    
   //touchcancel:     
  
  $(function(){
     
     
      // $("#red-packet-wrap").on("click",".red-packet-btn-no",function(){       
      //   ReturnLayer(4);
      // });    
    
      // $("#red-packet-wrap").on("click",".red-packet-btn-yes",function(){       
      //   ReturnLayer(3);
      // });
    
      // $("#red-packet-wrap").on("click",".red-packet-btn-2",function(){       
      //   ReturnLayer(2);
      // });
     
      $(".go-to-btn").on("touchstart touchmove",function(){
        $(this).addClass("on");
      });
      
      $(".go-to-btn").on("touchend touchcancel",function(){
        $(this).removeClass("on");
      });
    // $(".red-packet-btn").on("touchend",function(){
    //   var _t = $(this);     
    //     PL.open({
    //       type: 2,
    //       content: '正在加载中',
    //       shadeClose: false
    //     });
       
    // })
    
    // $(".red-packet-btn-no").on("touchend",function(){     
    //    PL.open({            
    //         content: '啊喔, 这张券已经被大家抢光了呢'
    //     });
    //       Log(_t);
    // });    
    
    // $(".red-packet-btn-yes").on("touchend",function(){   
     
    //    PL.open({            
    //         content: '这张券已经抢过了哦'
    //     });
    //     Log(_t);
    // });
    
    // $(".red-packet-btn-2").on("touchend",function(){   
    //  PL.open({            
    //         content: '每个人只能领两张券哦'
    //     });
    //    Log(_t);
    // });
    
    
    
  });
    
 
})();
