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
