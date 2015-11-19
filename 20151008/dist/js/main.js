$(function(){
   $(window).scroll(function(){
      var wst =  $(window).scrollTop();
      var winH = $(window).height();
        var floorTop = $("#z-floor-1").offset().top;
        if(wst+winH/2 < floorTop){
          $("#nav-z-floor-1").removeClass("on");
        }else {
          for (i=1; i<8; i++){
             if($("#z-floor-"+i).offset().top<=wst+winH/2){
               $('.floor-nav-u li').removeClass("on");
               $("#nav-z-floor-"+i).addClass("on");
           }
        }
    }
  });

  $('.floor-nav-u li').click(function(){
    $('.floor-nav-u li').removeClass("on");
    $(this).addClass("on");
  });
});
