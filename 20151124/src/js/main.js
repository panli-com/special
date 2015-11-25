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
      var _t = $(this);
          _p = _t.parents(".card");
          _name = _p.find(".packet-name").text();
          _id = _p.find(".packet-name").attr("data-id");
          
      PL.load();      
      var radn = GetRandomNum(0,3);
      console.log(radn);
      setTimeout(function(){        
        foRedPacketLayer(radn,_name);
      },2000);
      
    })
    
    $("#red-packet-wrap").on("click",".red-packet-btn-no",function(){
      PL.alert("已经抢完了 ，敬请期待下一轮吧!");
    })
    
  });
  
  function foRedPacketLayer(num,name){
    PL.closeAll();
    if(num == 1){
      PL.alert("恭喜 ，获得"+ name +"的红包!");
    }else{
      PL.alert("没有抢到!");
    }
  }
  

  
})();
