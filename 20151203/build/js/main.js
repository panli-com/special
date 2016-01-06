(function($){
$.fn.extend({
        ZScroll:function(opt,callback){
                //参数初始化
                if(!opt) var opt={};
                var _btnUp = $("#"+ opt.up);//Shawphy:向上按钮
                var _btnDown = $("#"+ opt.down);//Shawphy:向下按钮
                var timerID;
                var _this=this.eq(0).find("ul:first");
                var     lineH= 17, //获取行高
                        line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
                        speed=opt.speed?parseInt(opt.speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
                        timer=opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
                if(line==0) line=1;
                var upHeight=0-line*lineH;
                //滚动函数
                var scrollUp=function(){
                        _btnUp.unbind("click",scrollUp); //Shawphy:取消向上按钮的函数绑定
                        _this.animate({
                                marginTop:upHeight
                        },speed,function(){
                                for(i=1;i<=line;i++){
                                        _this.find("li:first").appendTo(_this);
                                }
                                _this.css({marginTop:0});
                                _btnUp.bind("click",scrollUp); //Shawphy:绑定向上按钮的点击事件
                        });

                }
                //Shawphy:向下翻页函数
                var scrollDown=function(){
                        _btnDown.unbind("click",scrollDown);
                        for(i=1;i<=line;i++){
                                _this.find("li:last").show().prependTo(_this);
                        }
                        _this.css({marginTop:upHeight});
                        _this.animate({
                                marginTop:0
                        },speed,function(){
                                _btnDown.bind("click",scrollDown);
                        });
                }
               //Shawphy:自动播放
                var autoPlay = function(){
                        if(timer)timerID = window.setInterval(scrollUp,timer);
                };
                var autoStop = function(){
                        if(timer)window.clearInterval(timerID);
                };
                 //鼠标事件绑定
                _this.hover(autoStop,autoPlay).mouseout();
                _btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);//Shawphy:向上向下鼠标事件绑定
                _btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);

        }
})
})(jQuery);

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
  return "0.0.9";
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
		$(".time-day").text(p(d));
		$(".time-hour").text(p(h));
		$(".time-minute").text(p(m));
		$(".time-second").text(p(s));
		
		setTimeout(function(){
			enTimeF(endTime-1000,nowTime)
		},1000)
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

      
      
     
      
      
     //$("#z-list-hide").ZScroll({ line: 1, speed: 1000, timer: 3000, up: "but_up", down: "but_down" });
      
      //$(".scroll-main").textSlider({line:1,speed:500,timer:3000});
    
  });
    
 




 
 
})();



// $(function () {
//     var scrtime;

//     var $ul = $(".scroll-main ul");
//     var liFirstHeight = $ul.find("li:first").height();//第一个li的高度
//     $ul.css({ top: "-" + liFirstHeight - 20 + "px" });//利用css的top属性将第一个li隐藏在列表上方	 因li的上下padding:10px所以要-20

//     $(".scroll-main").hover(function () {
//         $ul.pause();//暂停动画
//         clearInterval(scrtime);
//     }, function () {
//         $ul.resume();//恢复播放动画	
//         scrtime = setInterval(function scrolllist() {
//             //动画形式展现第一个li
//             $ul.animate({ top: 0 + "px" }, 1500, function () {
//                 //动画完成时
//                 $ul.find("li:last").prependTo($ul);//将ul的最后一个剪切li插入为ul的第一个li
//                 liFirstHeight = $ul.find("li:first").height();//刚插入的li的高度
//                 $ul.css({ top: "-" + liFirstHeight - 20 + "px" });//利用css的top属性将刚插入的li隐藏在列表上方  因li的上下padding:10px所以要-20					
//             });
//         }, 3300);

//     }).trigger("mouseleave");//通过trigger("mouseleave")函数来触发hover事件的第2个函数

// });