;(function(){
	$(function(){
		 
		var nowTime = new Date().getTime(),
			endTime = new Date('2015/11/11 23:59:59').getTime(),
			host = window.location.host,
			host2=document.domain; 
			
		Log(host);
		Log(host2);
		enTimeF(endTime,nowTime);		  

		 // 获取服务器时间回调
		// getServerTimeStamp(function(e){        
		// 	enTimeF(endTime,e);		
		// })   
		 
		 
	});
	
	function enTimeF(endTime,nowTime){
		var TimeJson = PLCountdown(endTime,nowTime),
			d = TimeJson.d,
			h = TimeJson.h,
			m = TimeJson.m,
			s = TimeJson.s;
			Log(parseInt(d));
			if( parseInt(d) == 0){
				
				$('.banner7').hide();
				$('.banner8').fadeIn("slow");
			}
		$(".Countdown_Day").text(d);
		$(".Countdown_When").text(h);
		$(".Countdown_Branch").text(m);
		$(".Countdown_Seconds").text(s);
		
		setTimeout(function(){
			enTimeF(endTime-1000,nowTime)
		},1000)
	}
	
	function getTimeInfoPe(callback){
		
  	};
	
	  

})();