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


function getServerTimeStamp2(e) {
    PD.ajax({
        type: "POST",
        cache: !1,
        async: !1,
        url: "http://www.panli.com/App_Services/wsDefault.asmx/GetDateTimeStamp",
        dataType: "json",
        contentType: "application/json;utf-8",
        timeout: 1e4,
        error: function() {},
        success: function(t) {
            t && e(parseInt(1e3 * t.d))
        }
    })
}
;(function(){
  
  
   //touchstart:    
   //touchmove:     
   //touchend:    
   //touchcancel:     
  

    
 

 
 PD(window).scroll(function () {
    var scrollTop = PD(window).scrollTop();
    PD('.floor-nav-wrap')[scrollTop > 400 ? 'show' : 'hide']();
    
    });
 
 
})();


