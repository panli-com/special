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


//验证数字
function isNumber(num){
    
    var reg=/^\d+(\.\d+)?$/;
   
    if(reg.test(num)==false){
        return false;
    }
    
    return num;
    
}



// v  
function appV(){
  return "0.0.8";
}
// 是否为空
function isOfNull(stc) {  
    if (!stc && typeof(stc)!="undefined" && stc!=0){
       return false;
    }
    return stc;
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
            timeout: 10000,
            error: function () {
                PL.msg("请求错误");
               
            },
            success: function (data) {
                callback(data);
            }
        });    
}


//获取最新滚动信息
function newDataInfo(callback) {
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

//滚动消息
function getScrollData(call) {
    /* json 数据的 请求 url 地址 */
    var dataJsonUrl = "./data/data.json";

    /* 获取json 数据 */
    $.getJSON(dataJsonUrl, function (data) {
        call(data);       
    });
}

function htmlScroll(data,call){   
    
    var _html = '';     
    for(var i= 0;i<data.length;i++){
        var name = data[i].Name,
            proName = data[i].ProductName,
            url = data[i].Url;
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
    $(e).ZScroll({ line: 2, speed: 1000, timer: 3000, up: "but_up", down: "but_down" });
}

function enTimeF(endTime,nowTime){
    function p(s) {
            return s < 10 ? '0' + s : s;
     } 
    
    
		var TimeJson = PLCountdown(endTime,nowTime),
			d = TimeJson.d,
			h = TimeJson.h,
			m = TimeJson.m,
			s = TimeJson.s; 
			
			if( parseInt(d) == 0){
				
				$('.banner7').hide();
				$('.banner8').fadeIn("slow");
			}
		$(".time-day").text(Number(p(d))+1);
		$(".time-hour").text(p(h));
		$(".time-minute").text(p(m));
		$(".time-second").text(p(s));
		
		setTimeout(function(){
			enTimeF(endTime-1000,nowTime)
		},1000)
}