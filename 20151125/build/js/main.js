function UserBalance(uName,callback) {  
     $.ajax({
            type: "POST",
            url: "/App_Services/wsSendMessage.asmx/Testsum5",
            dataType: "json",
            data: '{userName:"' + uName + '"}',
            contentType: "application/json;utf-8",
            timeout: 10000,
            error: function () {
                //alert("500");
            },
            success: function (data) {
                callback(data);         

            }
        });    
}
/*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
使用方法

生成3-32位随机串：randomWord(true, 3, 32)
生成88位随机串：randomWord(false, 88)
*/
 
function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

//抢代金券领取接口
function getDouble12(obj,callback) {
    var radNub = randomWord(false, 18);
    console.log(obj);
     $.ajax({
            type: "POST",
            url: "/App_Services/wsSpecial.asmx/getDouble12?time="+radNub,
            dataType: "json",
            data: '{userName:"' + obj.userName + '",UserID:"' + obj.UserID + '",cotype:"' + obj.cotype + '"}',
            contentType: "application/json;utf-8",
            timeout: 10000,
            error: function () {
                PL.closeAll();
                PL.msg("请求错误")
               
            },
            success: function (data) {
                callback(data);
            }
        });    
}
//获取抢代金券剩余数量
function CouponNumberState(callback) {
    var radNub = randomWord(false, 18);
     $.ajax({
            type: "POST",
            url: "/App_Services/wsSpecial.asmx/Coupon_NumberState?time="+radNub,
            dataType: "json",
            data: '',
            contentType: "application/json;utf-8",
            timeout: 10000,
            error: function () {
                PL.msg("请求错误");
               
            },
            success: function (data) {
                callback(data);
            }
        });    
}


var moCoReact = [{"CouponType":50,"state":-1},{"CouponType":200,"state":-1},{"CouponType":300,"state":0},{"CouponType":0,"state":0}];

//代金券数量响应
function CouponReact(obj){    
    for(var i = 0;i< obj.length;i++){
       var  _type = obj[i].CouponType,
            _state = obj[i].state;        
       if(_state != 0){
            $("#coupon-type-"+_type).removeClass("red-packet-btn").addClass("on red-packet-btn-no");
       }      
    }   
    
}


function ReturnLayer(num){
  var icon = 5;
  var num = Number(num);
  num == 1 ? icon = 6 : "";
  var text = [
    "恭喜您成功抢到代金券",
    "每个人只能领两张券哦",
    "这张券已经抢过了哦",
    "啊喔, 这张券已经被大家抢光了呢"
  ];  
  
  var btn = [
    "确定",
    "我知道了",
    "好吧",
    "好吧"
  ];   
  PL.alert(text[num-1],btn[num-1],{icon: icon});
}

// v  
function appV(){
  return "0.0.1";
}

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
    
  });
    
 
})();
