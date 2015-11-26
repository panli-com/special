;!function(win){
    "use strict";
    var version = '0.0.5'
    var path = ''; //所在路径，如果非模块加载不用配置 
    path = path ? path : document.scripts[document.scripts.length-1].src.match(/[\s\S]*\//)[0];

    var doc = document, query = 'querySelectorAll', claname = 'getElementsByClassName', S = function(s){
        return doc[query](s);
    };

//插入css
    document.head.appendChild((function(){
        var link = doc.createElement('link');
        link.href = path + 'skin/panli.min.css?v='+version;
        link.type = 'text/css';
        link.rel = 'styleSheet'
        link.id = 'layermcss';
        return link;
    }()));

//默认配置
    var config = {
        type: 0,
        shade: true,
        shadeClose: true,
        fixed: true,
        anim: true
    };

    win.ready = {
        extend: function(obj){
            var newobj = JSON.parse(JSON.stringify(config));
            for(var i in obj){
                newobj[i] = obj[i];
            }
            return newobj;
        },
        timer: {},
        end: {}
    };

//点触事件
    ready.touch = function(elem, fn){
        var move;
        elem.addEventListener('touchmove', function(){
            move = true;
        }, false);
        elem.addEventListener('touchend', function(e){
            e.preventDefault();
            move || fn.call(this, e);
            move = false;
        }, false);
    };

    var index = 0, classs = ['layermbox'], Layer = function(options){
        var that = this;
        that.config = ready.extend(options);
        that.view();
    };

    Layer.prototype.view = function(){
        var that = this, config = that.config, layerbox = doc.createElement('div');

        that.id = layerbox.id = classs[0] + index;
        layerbox.setAttribute('class', classs[0] + ' ' + classs[0]+(config.type || 0));
        layerbox.setAttribute('index', index);

        var title = (function(){
            var titype = typeof config.title === 'object';
            return config.title
                ? '<h3 style="'+ (titype ? config.title[1] : '') +'">'+ (titype ? config.title[0] : config.title)  +'</h3><button class="layermend"></button>'
                : '';
        }());

        var button = (function(){
            var btns = (config.btn || []).length, btndom;
            if(btns === 0 || !config.btn){
                return '';
            }
            btndom = '<span type="1">'+ config.btn[0] +'</span>'
            if(btns === 2){
                btndom = '<span type="0">'+ config.btn[1] +'</span>' + btndom;
            }
            return '<div class="layermbtn">'+ btndom + '</div>';
        }());

        if(!config.fixed){
            config.top = config.hasOwnProperty('top') ?  config.top : 100;
            config.style = config.style || '';
            config.style += ' top:'+ ( doc.body.scrollTop + config.top) + 'px';
        }

        if(config.type === 2){
            config.content = '<i></i><i class="laymloadtwo"></i><i></i><div>' + (config.content||'') + '</div>';
        }

        layerbox.innerHTML = (config.shade ? '<div '+ (typeof config.shade === 'string' ? 'style="'+ config.shade +'"' : '') +' class="laymshade"></div>' : '')
            +'<div class="layermmain" '+ (!config.fixed ? 'style="position:static;"' : '') +'>'
            +'<div class="section">'
            +'<div class="layermchild '+ (config.className ? config.className : '') +' '+ ((!config.type && !config.shade) ? 'layermborder ' : '') + (config.anim ? 'layermanim' : '') +'" ' + ( config.style ? 'style="'+config.style+'"' : '' ) +'>'
            + title
            +'<div class="layermcont">'+ config.content +'</div>'
            + button
            +'</div>'
            +'</div>'
            +'</div>';

        if(!config.type || config.type === 2){
            var dialogs = doc[claname](classs[0] + config.type), dialen = dialogs.length;
            if(dialen >= 1){
                Pan.close(dialogs[0].getAttribute('index'))
            }
        }

        document.body.appendChild(layerbox);
        var elem = that.elem = S('#'+that.id)[0];
        config.success && config.success(elem);

        that.index = index++;
        that.action(config, elem);
    };

    Layer.prototype.action = function(config, elem){
        var that = this;

        //自动关闭
        if(config.time){
            ready.timer[that.index] = setTimeout(function(){
                Pan.close(that.index);
            }, config.time*1000);
        }

        //关闭按钮
        if(config.title){
            var end = elem[claname]('layermend')[0], endfn = function(){
                config.cancel && config.cancel();
                Pan.close(that.index);
            };
            ready.touch(end, endfn);
            end.onclick = endfn;
        }

        //确认取消
        var btn = function(){
            var type = this.getAttribute('type');
            if(type == 0){
                config.no && config.no();
                Pan.close(that.index);
            } else {
                config.yes ? config.yes(that.index) : Pan.close(that.index);
            }
        };
        if(config.btn){
            var btns = elem[claname]('layermbtn')[0].children, btnlen = btns.length;
            for(var ii = 0; ii < btnlen; ii++){
                ready.touch(btns[ii], btn);
                btns[ii].onclick = btn;
            }
        }

        //点遮罩关闭 
        if(config.shade && config.shadeClose){
            var shade = elem[claname]('laymshade')[0];
            ready.touch(shade, function(){
                Pan.close(that.index, config.end);
            });
            shade.onclick = function(){
                Pan.close(that.index, config.end);
            };
        }

        config.end && (ready.end[that.index] = config.end);
    };

    var Pan = {
        v: version,
        index: index,
        auth: 'zan',
        //核心方法
        open: function(options){
            var o = new Layer(options || {});
            return o.index;
        },

        close: function(index){
            var ibox = S('#'+classs[0]+index)[0];
            if(!ibox) return;
            ibox.innerHTML = '';
            doc.body.removeChild(ibox);
            clearTimeout(ready.timer[index]);
            delete ready.timer[index];
            typeof ready.end[index] === 'function' && ready.end[index]();
            delete ready.end[index];
        },

        //关闭所有layer层
        closeAll: function(){
            var boxs = doc[claname](classs[0]);
            for(var i = 0, len = boxs.length; i < len; i++){
                Pan.close((boxs[0].getAttribute('index')|0));
            }
        },
        /* 谷歌统计代码 */
        googleCount:function(){
            var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
            
            loadjscssfile(gaJsHost+'google-analytics.com/ga.js','js');
            
            try { var pageTracker = _gat._getTracker("UA-436090-1"); pageTracker._trackPageview(); } catch (err) { };
            
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                        (i[r].q = i[r].q || []).push(arguments)
                    }, i[r].l = 1 * new Date(); a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-436090-2', 'auto');ga('require', 'displayfeatures');
            ga('send', 'pageview');
        },
        googleCountBall:function () {
            try { var pageTracker = _gat._getTracker("UA-436090-1"); pageTracker._trackPageview(); } catch (err) { };
        },
        /* rem 字体转换  */
        remFontSize:function(){
            var fontsize = function () {
                var W = document.body.getBoundingClientRect().width, defaultW = 720, defaultSize = 40;
                W = W > defaultW ? defaultW : W < 320 ? 320 : W;
                window.W = W; document.documentElement.style.fontSize = (W / defaultW * defaultSize).toFixed(2) + 'px';
            };
            var fontset = setTimeout(fontsize, 300);
            window.addEventListener('resize', function () { clearTimeout(fontset); fontset = setTimeout(fontsize, 300) });
            window.addEventListener("DOMContentLoaded", fontsize);
            setTimeout(fontsize, 300);

        },
    };

    'function' === typeof define ? define(function() {
        return Pan;
    }) : win.PL = Pan;

}(window);

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
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
};

function set_Cookie(name,value,time)
{

    var exp = new Date();
    exp.setTime(time);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
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
//var username=document.cookie.split(";")[0].split("=")[1];
////JS操作cookies方法!
////写cookies
//function setCookie(name,value)
//{
//    var Days = 30;
//    var exp = new Date();
//    exp.setTime(exp.getTime() + Days*24*60*60*1000);
//    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
//}
/*  myDate.getYear();        //获取当前年份(2位)
 myDate.getFullYear();    //获取完整的年份(4位,1970-????)
 myDate.getMonth();       //获取当前月份(0-11,0代表1月)
 myDate.getDate();        //获取当前日(1-31)
 myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
 myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
 myDate.getHours();       //获取当前小时数(0-23)
 myDate.getMinutes();     //获取当前分钟数(0-59)
 myDate.getSeconds();     //获取当前秒数(0-59)
 myDate.getMilliseconds();    //获取当前毫秒数(0-999)
 myDate.toLocaleDateString();     //获取当前日期
 var mytime=myDate.toLocaleTimeString();     //获取当前时间
 myDate.toLocaleString( );        //获取日期与时间*/

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

/**
 * Created by Administrator on 2015/9/11.
 */
/*
* 2015年9月14日15:29:04
* */
