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