/* Laura Doktorova https://github.com/olado/doT */
(function(){function p(b,a,d){return("string"===typeof a?a:a.toString()).replace(b.define||h,function(a,c,e,g){0===c.indexOf("def.")&&(c=c.substring(4));c in d||(":"===e?(b.defineParams&&g.replace(b.defineParams,function(a,b,l){d[c]={arg:b,text:l}}),c in d||(d[c]=g)):(new Function("def","def['"+c+"']="+g))(d));return""}).replace(b.use||h,function(a,c){b.useParams&&(c=c.replace(b.useParams,function(a,b,c,l){if(d[c]&&d[c].arg&&l)return a=(c+":"+l).replace(/'|\\/g,"_"),d.__exp=d.__exp||{},d.__exp[a]=
d[c].text.replace(new RegExp("(^|[^\\w$])"+d[c].arg+"([^\\w$])","g"),"$1"+l+"$2"),b+"def.__exp['"+a+"']"}));var e=(new Function("def","return "+c))(d);return e?p(b,e,d):e})}function k(b){return b.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var f={version:"1.0.3",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0},m;f.encodeHTMLSource=function(b){var a={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},d=b?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(b){return b?
b.toString().replace(d,function(b){return a[b]||b}):""}};m=function(){return this||(0,eval)("this")}();"undefined"!==typeof module&&module.exports?module.exports=f:"function"===typeof define&&define.amd?define(function(){return f}):m.doT=f;var r={start:"'+(",end:")+'",startencode:"'+encodeHTML("},s={start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("},h=/$^/;f.template=function(b,a,d){a=a||f.templateSettings;var n=a.append?r:s,c,e=0,g;b=a.use||a.define?p(a,b,d||{}):b;b=("var out='"+(a.strip?
b.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):b).replace(/'|\\/g,"\\$&").replace(a.interpolate||h,function(b,a){return n.start+k(a)+n.end}).replace(a.encode||h,function(b,a){c=!0;return n.startencode+k(a)+n.end}).replace(a.conditional||h,function(b,a,c){return a?c?"';}else if("+k(c)+"){out+='":"';}else{out+='":c?"';if("+k(c)+"){out+='":"';}out+='"}).replace(a.iterate||h,function(b,a,c,d){if(!a)return"';} } out+='";e+=1;g=d||"i"+e;a=k(a);return"';var arr"+
e+"="+a+";if(arr"+e+"){var "+c+","+g+"=-1,l"+e+"=arr"+e+".length-1;while("+g+"<l"+e+"){"+c+"=arr"+e+"["+g+"+=1];out+='"}).replace(a.evaluate||h,function(a,b){return"';"+k(b)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"");c&&(a.selfcontained||!m||m._encodeHTML||(m._encodeHTML=f.encodeHTMLSource(a.doNotSkipEncoded)),b="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+f.encodeHTMLSource.toString()+
"("+(a.doNotSkipEncoded||"")+"));"+b);try{return new Function(a.varname,b)}catch(q){throw"undefined"!==typeof console&&console.log("Could not create a template function: "+b),q;}};f.compile=function(b,a){return f.template(b,null,a)}})();

// v01
function appV(){
  return "0.0.1"; 
}
//一个随机数
function GetRandomNum(Min,Max){   
  var Range = Max - Min;   
  var Rand = Math.random();   
  return(Min + Math.round(Rand * Range));   
}   
;(function(){
	function getJson(callback){		
		 $.ajax({
			url: 'data/json.json',
			dataType: 'json',
			success: function(data) {
				callback(data);
			},
			statusCode: {
				404: function() {
				alert("没有找到相关文件~~");
				}
			}
    	});
	}
	function redPacketReder() {		
		
		getJson(function(data){
			var packet = data;
			var rtmpl = $('#r-tmpl').html();
  			var doRedTtmpl = doT.template(rtmpl);
			doRedTtmpl(packet );
		 	 $("#red-packet-wrap").html(doRedTtmpl(packet ));		
			
		}); 
		 
	}
	
	redPacketReder();
	
})();
;(function(){
	var RedPacketGo = {
		"v":"0.0.1",
		"a":"zan",
		"init":function(obj){			
			
		var setTimeOut = setInterval(function(){
				RedPacketGo.timeOut(obj)
			},500);
		},
		"timeStop":function(obj){
			//var stop = 0;
		},
		"timeOut":function(obj) {
			var stop = 0;		
			$(obj).each(function(){
				var _t = $(this),
					_tO = _t.text(),
					_ps = _t.parents(".card"),
					_btn = _ps.find(".red-packet-btn"),
					radn = GetRandomNum(0,10),
					_tN = parseInt(_tO) - radn;
					if(_tN < 0){
						_tN = 0;
						_btn.addClass("disabled red-packet-btn-no");
						_btn.removeClass("red-packet-btn");
						_btn.text("已抢完");
						return;
					}
					_t.text(_tN);
				
			});
		}
	};
	
	window.RedPacketGo = RedPacketGo;
	
})();

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
      var _t = $(this),
          _p = _t.parents(".card"),
          _name = _p.find(".packet-name").text(),         
          _id = _p.find(".packet-name").attr("data-id");
      var packCokie = get_Cookie("doubleTwelve");
      if(packCokie == 2){
        PL.alert("每个人只能领两张券哦",{icon: 5});
        return;
      };
      PL.load();      
      var radn = GetRandomNum(0,3);
     
      setTimeout(function(){        
        foRedPacketLayer(radn,_name,_t);
      },2000);
      
    })
    
    $("#red-packet-wrap").on("click",".red-packet-btn-no",function(){
      PL.alert("啊喔, 这张券已经被大家抢光了呢",{icon: 5});
    })
    
    
    $("#red-packet-wrap").on("click",".red-packet-btn-yes",function(){
      PL.alert("这张券已经抢过了哦",{icon: 5});
    })
    
    $("#red-packet-wrap").on("click",".red-packet-btn-2",function(){
      PL.alert("每个人只能领两张券哦",{icon: 5});
    })
    
  });
  
  
  
  function foRedPacketLayer(num,name,_btn){
    PL.closeAll();
    Log(_btn);
    if(num == 1){
      _btn.addClass("disabled red-packet-btn-yes");
      _btn.removeClass("red-packet-btn");
      _btn.text("已抢到");
      PL.alert("恭喜 ，获得"+ name +"的红包!",{icon: 6});
      PacketSetCookie();
    }else{
      PL.alert("没有抢到!",{icon: 5});
    }
  }
  
  function PacketSetCookie(){
    var packCokie = get_Cookie("doubleTwelve");
    var day = new Date(),
        dayTime = day.getTime()+ 1*24*60*60*1000;
        Log(dayTime);
    if(!packCokie){
      set_Cookie('doubleTwelve',1,dayTime,'/');
    }else{
      set_Cookie('doubleTwelve',2,dayTime,'/');
    }
  }
  
})();
