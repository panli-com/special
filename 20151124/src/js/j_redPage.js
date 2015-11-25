;(function(){
	function redPacketReder(params) {
		var packet = {
			success: true,
			data:[
				{
					img:"images/red-packet-2.png",
					rid:1,
					price:340
				},
				{
					img:"images/red-packet-2.png",
					rid:2,
					price:350
				},
				{
					img:"images/red-packet-2.png",
					rid:3,
					price:160
				}
			]
		};
		
		var html = '';
		// for(var i = 0 ;i <= packet.length;i++){
		// 	html += '<span>'+ i +'</span>';
		// }
		
		
		  var rtmpl = $('#r-tmpl').html();
  		  var doRedTtmpl = doT.template(rtmpl);
			doRedTtmpl(packet )
		  $("#red-packet-wrap").html(doRedTtmpl(packet ));
		 
	}
	
	redPacketReder();
	
})();