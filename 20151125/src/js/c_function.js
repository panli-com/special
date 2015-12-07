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
  return "0.0.7";
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



function  colorList(data,nu) {
    
    var mlc = nu,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl5 = [],fl6 = [],fl0 = [];
         
          for(var i=0;i<mlc;i++){
              fl0.push(data[i]);
          }
          for(var i=mlc;i<mlc*2;i++){
              fl1.push(data[i]);
          }
          for(var i=mlc*2;i<mlc*3;i++){
              fl2.push(data[i]);
          }
          for(var i=mlc*3;i<mlc*4;i++){
              fl3.push(data[i]);
          }
          for(var i=mlc*4;i<mlc*5;i++){
              fl4.push(data[i]);
          }
          for(var i=mlc*5;i<mlc*6;i++){
              fl5.push(data[i]);
          }
          for(var i=mlc*6;i<mlc*7;i++){
              fl6.push(data[i]);
          }

        
          FloorDataAll(fl0,'nz',1);
          FloorDataAll(fl1,'nr',2);
          FloorDataAll(fl2,'xx',3);
          FloorDataAll(fl3,'xb',4);
          FloorDataAll(fl4,'mz',5);
          FloorDataAll(fl5,'ps',6);
          FloorDataAll(fl6,'jj',7);
}



 function FloorDataAll(data,imgHead,id){
            var str = '';
            for(var i=0;i<data.length;i++){
               
                var name = data[i]['Name'],
                    price = data[i].pirceTb,
                    price2 = data[i].pircePl,
                    imgUrl = 'http://sf.panli.com/Ued/Special/20151126/build/images/product/'+imgHead+(i+1)+'.jpg',
                    proUrl = data[i].taobaoUrl,
                    shopName = data[i].shopName,
                    shopHref = data[i].shopHref,
                    siteName = data[i].siteName,
                    gouUrl = 'http://www.panli.com/Crawler.aspx?purl='+proUrl;
                str += '<li><div class="thumb">'+
                        '<a href="'+ gouUrl +'" target="_blank"><img src="'+ imgUrl +'" alt=""></a>'+
                        '</div>'+
                        '<div class="p-footer">'+
                            '   <a href="'+ gouUrl +'" class="title-a" target="_blank"><h6 class="name">'+ name +'</h6></a>'+
                            '  <p class="p1 del-link">专柜价：￥<span class="price-tao">'+ price +'</span></p>'+
                            ' <p class="p2"><span class="icon-do12-2">双12价 <i class="triangle"></i></span> ￥<span class="price">'+ price2 +' </span></p>'+
                            '<a href="javascript:void(0);" class="btn1 add-favorite"  data-href="'+ proUrl +'"  data-shopName="'+ shopName +'"  data-shopHref="'+ shopHref +'" data-siteName="'+ siteName +'" >点击收藏 <span class="jian"></span>'+
                                '   <span class="line line_top"></span>'+
                                '  <span class="line line_right"></span>'+
                                ' <span class="line line_bottom"></span>'+
                                '<span class="line line_left"></span>'+
                            '</a>'+
                            '<a href="'+ gouUrl +'" target="_blank" class="btn2">立即购买</a>'+
                        '</div></li>';
                        
                
            };
           
            $("#floor-"+id).find("ul").html(str);
 }