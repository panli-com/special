;(function(){

  $(function(){
    
    $('.back-Top').on("click",function(){
      $('html,body').animate({ scrollTop: 0 }, 800);
    })
    
    $('img').each(function() {
        $(this).load(function(){
          $(this).fadeIn();
        });
    });
    
    var imgNum=$('img').length;
    $('img').load(function(){
        if(!--imgNum){
            $("#loading").remove();
        }
    });
  
    $('.parallax').parallax();
    
    RedPacketGo.init(".last-number");

    $("#red-packet-wrap").on("click",".red-packet-btn",function(){
      var _t = $(this),
          _p = _t.parents(".card"),
          _name = _p.find(".packet-name").text(),         
          _id = _p.find(".packet-name").attr("data-id");
      var packCokie = get_Cookie("doubleTwelve");
      if(packCokie == 2){
        PL.alert("每个人只能领两张券哦",{icon: 5});
        return;
      };
      PL.load();      
      var radn = GetRandomNum(0,3); 
     
      setTimeout(function(){        
        foRedPacketLayer(radn,_name,_t);
      },radn * 2000);
      
    })
    
    $("#red-packet-wrap").on("click",".red-packet-btn-no",function(){
      PL.alert("啊喔, 这张券已经被大家抢光了呢",{icon: 5});
    })
    
    
    $("#red-packet-wrap").on("click",".red-packet-btn-yes",function(){
      PL.alert("这张券已经抢过了哦",{icon: 5});
    })
    
    $("#red-packet-wrap").on("click",".red-packet-btn-2",function(){
      PL.alert("每个人只能领两张券哦",{icon: 5});
    })
    
    $("#del_Cookie").on("click",function(){
      del_Cookie("doubleTwelve");
      PL.alert("清除成功，可重新测试抢购",{icon: 6});
      setTimeout(function(){
        window.location.href=window.location.href;
      },500)
      
    })
    
  });
  
  
  
  function foRedPacketLayer(num,name,_btn){
    PL.closeAll();
    Log(_btn);
    if(num == 1){
      _btn.addClass("disabled red-packet-btn-yes");
      _btn.removeClass("red-packet-btn");
      _btn.text("已抢到");
      PL.alert("恭喜 ，获得"+ name +"的红包!",{icon: 6});
      PacketSetCookie();
    }else{
      PL.alert("没有抢到!",{icon: 5});
    }
  }
  
  function PacketSetCookie(){
    var packCokie = get_Cookie("doubleTwelve");
    var day = new Date(),
        dayTime = day.getTime()+ 1*24*60*60*1000;
        Log(dayTime);
    if(!packCokie){
      set_Cookie('doubleTwelve',1,dayTime,'/');
    }else{
      set_Cookie('doubleTwelve',2,dayTime,'/');
    }
  }
  
})();
