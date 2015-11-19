;(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }


    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {}));

(function($){
$.fn.extend({
        ZScroll:function(opt,callback){
                //参数初始化
                if(!opt) var opt={};
                var _btnUp = $("#"+ opt.up);//Shawphy:向上按钮
                var _btnDown = $("#"+ opt.down);//Shawphy:向下按钮
                var timerID;
                var _this=this.eq(0).find("ul:first");
                var     lineH=_this.find("li:first").height(), //获取行高
                        line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
                        speed=opt.speed?parseInt(opt.speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
                        timer=opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
                if(line==0) line=1;
                var upHeight=0-line*lineH;
                //滚动函数
                var scrollUp=function(){
                        _btnUp.unbind("click",scrollUp); //Shawphy:取消向上按钮的函数绑定
                        console.log(upHeight);
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

               //Shawphy:自动播放
                var autoPlay = function(){
                        if(timer)timerID = window.setInterval(scrollUp,timer);
                };
                var autoStop = function(){
                        if(timer)window.clearInterval(timerID);
                };
                 //鼠标事件绑定
                _this.hover(autoStop,autoPlay).mouseout();


        }
})
})(jQuery);


// function ZScroll(This,line,speed,timer){
//     var _this=This.eq(0).find("ul").first();
//     var     lineH=_this.find("li").first().height(), //获取行高
//             line=line?parseInt(line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
//             speed=speed?parseInt(speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
//           //  timer=timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
//     if(line==0) line=1;
//     var upHeight=0-line*lineH;
//
//     var scrollUp=function(){
//         _this.animate({marginTop:upHeight,opacity:'1'
//                   },800,'ease-in-out',function(){
//                     upHeight+=upHeight;
//                     window.setTimeout(scrollUp,timer);
//           });
//     }
//
//     window.setInterval(scrollUp,timer)
//
// }


// ;(function($){
//    $.fn.ZScroll = function(option){
//      var opt = $.extend({}, $.fn.ZScroll.defaults  , option);
//       // this.css('backgroundColor',opts.color);
//       console.log("Ss");
//       var timerID;
//
//       //滚动函数
//       var scrollUp=function(){
//
//               // _this.animate({
//               //         marginTop:upHeight
//               // },opt.speed,function(){
//               //         for(i=1;i<=line;i++){
//               //                 _this.find("li").first().appendTo(_this);
//               //         }
//               //         _this.css({marginTop:0});
//               //
//               // });
//               _this.animate({marginTop:upHeight,opacity:'1'
//                         },800,'ease-in-out',function(){
//
//                         for(i=1;i<=line;i++){
//                             _this.find("li").first().appendTo(_this);
//                         }
//                           _this.css({marginTop:0});
//                 });
//       }
//      //Shawphy:自动播放
//      window.setTimeout(scrollUp,opt.timer)
//       var autoPlay = function(){
//               if(timer)timerID = window.setInterval(scrollUp,timer);
//       };
//       var autoStop = function(){
//               if(timer)window.clearInterval(timerID);
//       };
//
//
//
//
//
//    };
//    $.fn.ZScroll.defaults = {
//         line: 1, speed: 1000, timer: 3000, up: "but_up", down: "but_down"
//    };
// })(Zepto);

$(function(){
  

});
