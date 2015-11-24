;(function(){

	function redPacketReder(params) {
		var packet = [
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
		];
		
		var html = '';
		for(var i = 0 ;i <= packet.length;i++){
			html += '<span>'+ i +'</span>';
		}
		
	}

	
})();

// v04
function appV(){
  return "0.0.5"; 
}
;(function(){
	
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
  });
  

  

  
})();
