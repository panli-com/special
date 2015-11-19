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
