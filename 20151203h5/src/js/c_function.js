;(function(){
     
    
})();


function UserBalance(uName,callback) {  
     $.ajax({
            type: "POST",
            url: "/App_Services/wsSendMessage.asmx/Testsum5",
            dataType: "json",
            data: '{userName:"' + uName + '"}',
            contentType: "application/json;utf-8",
            timeout: 20000,
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
            timeout: 20000,
            error: function () {
                PL.closeAll();
                PL.open({
                    content: '请求错误，请再试',
                    time: 2
                });
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
            timeout: 20000,
            error: function () {
                PL.open({
                    content: '请求错误，请再试',
                    time: 2
                });
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
            $("#coupon-type-"+_type).removeClass("red-packet-btn").addClass("on").attr("no-click", 4);
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
 
  PL.open({
    content: text[num-1],
    time: 5
});
}

// v  
function appV(){
  return "0.0.2";
}

//获取服务端数据 
function getSeverData(url,obj,callback) {
    var radNub = randomWord(false, 18);
     $.ajax({
            type: "POST",
            url: url+"?time="+radNub,
            dataType: "json",
            data: obj,
            contentType: "application/json;utf-8",
            timeout: 20000,
            error: function () {
                PL.open({
                    content: '请求错误，请再试',
                    time: 2
                });
               
            },
            success: function (data) {
                callback(data);
            }
        });    
}


// 这里是一些常用的函数
// 2015年9月25日 11:38:51

/*
* 判断是否是pc
* */

function is_pc(){
    var os = new Array("Android","iPhone","Windows Phone","iPod","BlackBerry","MeeGo","SymbianOS");  // 其他类型的移动操作系统类型，自行添加
    var info = navigator.userAgent;
    var len = os.length;
    for (var i = 0; i < len; i++) {
        if (info.indexOf(os[i]) > 0){
            return false;
        }
    }
    return true;
};

// 获取服务器时间
function getServerTime(callback){
  $.ajax({
       type: "POST",
       cache: false,
       async: false,
       url: "/App_Services/wsDefault.asmx/GetDateTime",
       dataType: "json",
       contentType: "application/json;utf-8",
       timeout: 10000,
       error: function () {
       },
       success: function (data) {
           if(data){
             callback(parseInt(data.d));
           }
       }
    });
}
// 获取服务器时间 
function getServerTimeStamp(callback){
  $.ajax({
       type: "POST",
       cache: false,
       async: false,
       url: "/App_Services/wsDefault.asmx/GetDateTimeStamp",
       dataType: "json",
       contentType: "application/json;utf-8",
       timeout: 10000,
       error: function () {
       },
       success: function (data) {
           if(data){
             callback(parseInt(data.d * 1000));
           }
       }
    });
}

function get_Cookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
};
function del_Cookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=get_Cookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
};

function set_Cookie(name,value,time,path)
{

    var exp = new Date();
    exp.setTime(time);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+"; path=" + path;
};
function getsec(str)
{

    var str1=str.substring(1,str.length)*1;
    var str2=str.substring(0,1);
    if (str2=="s")
    {
        return str1*1000;
    }
    else if (str2=="h")
    {
        return str1*60*60*1000;
    }
    else if (str2=="d")
    {
        return str1*24*60*60*1000;
    }
};
// 今日 结束时间
function getDateEnd(date) {
    var _date = new Date(date);
    var year = _date.getFullYear(),
       month = _date.getMonth(),
       day = _date.getDate();
    return new Date(year, month, day, 23, 59, 59);
}
//这是有设定过期时间的使用示例：
//s20是代表20秒
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30



//倒计时 PLCountdown(1451404800000)
function PLCountdown(end,sta,i){
   function p(s) {
            return s < 10 ? '0' + s : s;
   } 
    
  if(!i){
    i = 1
  }
  if(!sta){
    sta = new Date().getTime();
  }
  var t = parseInt(end) - parseInt(sta),
   d=Math.floor(t/1000/60/60/24),
   h=Math.floor(t/1000/60/60%24),
   m=Math.floor(t/1000/60%60),
   s=Math.floor(t/1000%60),
   index = i+1;
  if(t < 0){
    d = h = m = s = '00';
  }

  var time = {
    d:p(d),
    h:p(h),
    m:p(m),
    s:p(s),
    i:p(index),
    end:p(end),
    sta:p(sta)
  };
  return time;
}


function removeEle(removeObj) {
    removeObj.parentNode.removeChild(removeObj);
};


// JavaScript Document
function loadjscssfile(filename,filetype){

    if(filetype == "js"){
        var fileref = document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src",filename);
    }else if(filetype == "css"){
    
        var fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href",filename);
    }
   if(typeof fileref != "undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
    
}

function htmlScroll(data,call){   
    
    var _html = '';     
    for(var i= 0;i<data.length;i++){
        var name = data[i].Name,
            proName = data[i].ProductName,
            url = 'javascript:void(0);';
            if(data[i].Url){
              url = data[i].Url;
            }
         _html +=  '<li><span class="name">'+ name +': </span>'+
                       '<a href="'+ url +'" target="_blank" class="pro-name">'+
                        '' + proName + '</a></li>';
                      
                    
        
    }    
    $("#scroll-main-u1").html(_html);
    call(); 
    return _html;
}

//滚动动画
function scrollAnmi(e) {
    $(e).ZScroll({ line: 1, speed: 1000, timer: 3000, up: "but_up", down: "but_down" });
}

function enTimeF(endTime,nowTime){
		var TimeJson = PLCountdown(endTime,nowTime),
			d = TimeJson.d,
			h = TimeJson.h,
			m = TimeJson.m,
			s = TimeJson.s;
			
			if( parseInt(d) == 0){
				
				$('.banner7').hide();
				$('.banner8').fadeIn("slow");
			}
		$(".time-day").text(d);
		$(".time-hour").text(h);
		$(".time-minute").text(m);
		$(".time-second").text(s);
		
		setTimeout(function(){
			enTimeF(endTime-1000,nowTime)
		},1000)
	}