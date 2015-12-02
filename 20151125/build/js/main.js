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
// 宝贝收藏接口
function addFavorite(obj,callback){
    var radNub = randomWord(false, 18);
    console.log(obj);   
    $.ajax({
            type: "POST",
            url: "/App_Services/wsFavorite.asmx/AddFavorite?time="+radNub,
            dataType: "json",
            contentType: "application/json;utf-8",
            //data: "{name:'" + obj.name + "',href:'" + obj.href + "',picture:'" + obj.picture  + "',price:'" + obj.picture + "',shopName:'" + obj.shopName + "',shopHref:'" + obj.shopHref + "',remark:'',tags:'" + obj.tags + "',siteName:'" + obj.siteName  + "'}",
            data:JSON.stringify(obj),
            timeout: 10000,
            error: function() { 
                PL.closeAll();
                PL.msg("请求错误");
             },
            success: function(res) {
              callback(res);
            }
        });

}

//抢代金券领取接口
function getDouble12(obj,callback) {
    var radNub = randomWord(false, 18);
   
     $.ajax({
            type: "POST",
            url: "/App_Services/wsSpecial.asmx/getDouble12?time="+radNub,
            dataType: "json",
            //data: '{userName:"' + obj.userName + '",UserID:"' + obj.UserID + '",cotype:"' + obj.cotype + '"}',
            data:JSON.stringify(obj),
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
            $("#coupon-type-"+_type).addClass("on").attr("no-click", 4);
       }      
    }   
    
}

//验证数字
function isNumber(num){
    // var reg = new RegExp("^[0-9]*$");
    // 
    // if(!reg.test(num)){  
    // }
    // if(!/^[0-9]*$/.test(num)){   
    // }
    
    var reg=/^\d+(\.\d+)?$/;
   
    if(reg.test(num)==false){
        return false;
    }
    
    return num;
    
}


function ReturnLayer(num){
   if(!isNumber(num)){
       PL.msg("返回错误");
       return;
   } 
    
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
  return "0.0.5";
}
// 是否为空
function isOfNull(stc) {  
    if (!stc && typeof(stc)!="undefined" && stc!=0){
       return false;
    }
    return stc;
}

function floorNnav(){
var winW = $(window).width(),       
    mainOfL = $(".product-main").offset().left;
    
    if(winW >= 1484){
        var oFright = mainOfL+1000+55;
        $('.floor-nav-wrap').css("left",oFright)
    }else {
        $('.floor-nav-wrap').css({"left":'',right:"55px"});
    }
}





//快速登陆面板
window.Panli.LoginPanel = {
    d: {}, //dialog对象
    t: {}, //标题栏，包含关闭按钮 
    f: {}, //iframe对象
    url: {}, //URL
    init: function () {
        window.Panli.LoginPanel.d = $('<div style="width:555px;height:454px;position:fixed;margin:-227px 0 0 -227px;background:#ffa500;top:50%;left:50%;overflow:hidden;z-index:1000000;display:none;"></div>');
        window.Panli.LoginPanel.t = $('<div style="background:url(http://sf.panli.com/FrontEnd/images20090801/AddItemPanel/yj.gif) no-repeat left top;margin -2px 0 0;position:relative;height:32px;"><h2 style="color:#FFF;font-size:14px;font-weight:100;float:left;line-height:32px;margin:0 0 0 10px;display:inline;">' + '登录' + '</h2><a onclick="window.Panli.LoginPanel.toggle()" title="关闭" style="margin:10px 10px 0px 0px;display:inline;width:21px;background:url(http://sf.panli.com/FrontEnd/images20090801/AddItemPanel/close.gif) no-repeat 0px -14px;float:right;height:14px;cursor:pointer;"></a></div>');
        window.Panli.LoginPanel.f = $('<iframe style="width:535px;height:411px;margin:0 0 0 10px" border="0" allowtransparency="true" scrolling="no" frameBorder="0" src="http://passport.panli.com/UI/QuickLogin.aspx?ReturnUrl=' + encodeURI(window.Panli.LoginPanel.url) + '"></iframe>');

        window.Panli.LoginPanel.d.append(window.Panli.LoginPanel.t);
        window.Panli.LoginPanel.d.append(window.Panli.LoginPanel.f);
        $('body').append(window.Panli.LoginPanel.d);
        if (typeof document.body.style.maxHeight == "undefined") {
            window.Panli.LoginPanel.d.css('position', 'absolute');
            window.Panli.LoginPanel.d.css('margin-top', '0px');
            window.Panli.LoginPanel.d.css("top", (divY + document.documentElement.scrollTop).toString());
            $(window).scroll(function () { window.Panli.LoginPanel.d.css("top", divY + document.documentElement.scrollTop + ""); });
        }
    },
    open: function () {
        Panli.Overlay.open();
        if ($('div', window.Panli.LoginPanel.d).length <= 0)
            window.Panli.LoginPanel.init();
        try {
            window.Panli.LoginPanel.f.src = 'http://passport.panli.com/UI/QuickLogin.aspx?ReturnUrl=' + encodeURI(window.Panli.LoginPanel.url);
        } catch (e) { }
        window.Panli.LoginPanel.d.show();
    },
    close: function () {
        window.Panli.LoginPanel.d.hide();
        Panli.Overlay.close();
    },
    toggle: function () { $(":visible", window.Panli.LoginPanel.d).length > 0 ? window.Panli.LoginPanel.close() : window.Panli.LoginPanel.open(); }
}

//快速登陆方法
window.Panli.Login = function (tempURL) {
    window.Panli.LoginPanel.url = document.location.href;
    try {
        if (typeof (tempURL) != "undefined" && tempURL != null && tempURL != "" && tempURL.length > 0) {
            window.Panli.LoginPanel.url = tempURL;
        }
    } catch (e) { window.Panli.LoginPanel.url = document.location.href; }
    window.Panli.LoginPanel.toggle();
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
                 $('body,html').animate({ scrollTop: _afloTop-130 }, 300);
      });
      $("#back-top").on("click",function(){              
                 $('body,html').animate({ scrollTop: 0 }, 300);
      });   
      
      
      // $("#red-packet-wrap").on("click",".red-packet-btn-no",function(){       
      //   ReturnLayer(4);
      // });    
    
      // $("#red-packet-wrap").on("click",".red-packet-btn-yes",function(){       
      //   ReturnLayer(3);
      // });
    
      // $("#red-packet-wrap").on("click",".red-packet-btn-2",function(){       
      //   ReturnLayer(2);
      // });
      
      floorNnav();
    
  });
    
 
 $(window).resize(function(){
    floorNnav();
  })



 
 
})();
