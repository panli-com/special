function enTimeF(endTime,nowTime){
    
       
    
		var TimeJson = PLCountdown2(endTime,nowTime),
			d = addling(TimeJson.d).toString(),
			h = addling(TimeJson.h).toString(),
			m = addling(TimeJson.m).toString(),
			s = addling(TimeJson.s).toString();       
        
        PD(".Countdown_Day").text(d.slice(0,1));
        PD(".Countdown_Days").text(d.slice(1,2));
        PD(".Countdown_When").text(h.slice(0,1));
        PD(".Countdown_time").text(h.slice(1,2));
        PD(".Countdown_Branch").text(m.slice(0,1));
        PD(".Countdown_component").text(m.slice(1,2));
        PD(".Countdown_Seconds").text(s.slice(0,1));
        PD(".Countdown_Sec").text(s.slice(1,2));
        
        
		setTimeout(function(){
			enTimeF(endTime,nowTime+1000)
		},1000);
        
        
}


function addling(s) {
      return s < 10 ? '0' + s:s;
}

function PLCountdown2(e, t, n) {
    n || (n = 1),
    t || (t = (new Date).getTime());
    var r = parseInt(e) - parseInt(t)
      , i = Math.floor(r / 1e3 / 60 / 60 / 24)
      , o = Math.floor(r / 1e3 / 60 / 60 % 24)
      , a = Math.floor(r / 1e3 / 60 % 60)
      , s = Math.floor(r / 1e3 % 60)
      , l = n + 1;
    0 > r && (i = o = a = s = 0);
    var u = {
        d: i,
        h: o,
        m: a,
        s: s,
        i: l,
        end: e,
        sta: t
    };
    return u
}


// 获取服务器时间 
function getServerTimeStamp2(callback){
  PD.ajax({
       type: "POST",
       url: "http://www.panli.com/App_Services/wsDefault.asmx/GetDateTimeStamp",
       dataType: "json",
       contentType: "application/json;utf-8",
       timeout: 10000,
       error: function () {
           callback(false);  
       },
       success: function (data) {
           if(data.d){
             callback(parseInt(data.d * 1000));
           }else{
             callback(false);  
           }
       }
    });
}

// 获取服务器时间 

function getServerTimeStamp3(callback){
  PD.ajax({
        type: "GET",
        url: "http://apis.baidu.com/3023/time/time",
        dataType: "json",
        headers:{"apikey":"0cf8f62993aca0679807aa4dd505356c"},
       timeout: 10000,
       error: function () {
           callback(false);  
       },
       success: function (data) {
           if(data.stime){
             callback(data.stime * 1000);
           }else{
             callback(false);  
           }
       }
    });
}


// 获取服务器时间 

function getServerTimeStamp4(callback){
  PD.ajax({
        type: "GET",
        url: "http://www.timeapi.org/utc/now.json",
        dataType: "jsonp",
       timeout: 10000,
       error: function () {
           callback(false);  
       },
       success: function (data) {
           if(data.dateString){
             callback(data.dateString);
           }else{
             callback(false);  
           }
       }
    });
}

function getTimeClirToServe(){
    var d = new Date(),
        of = d.getTimezoneOffset();
        
        
    
    
    
}
;(function(){
  
  

 

 
})();


