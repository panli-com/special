;(function(){
  
  
   //touchstart:    
   //touchmove:     
   //touchend:    
   //touchcancel:     
  
  $(function(){
     
  // var swiper = new Swiper('.swiper-container', {
  //       pagination: '.swiper-pagination',
  //       slidesPerView: 'auto',
  //       paginationClickable: true,
  //       spaceBetween: 30
  //   });    
  
  //  var swiper = new Swiper('.swiper-container', {
  //       pagination: '.swiper-pagination',
  //       slidesPerView: 'auto',
  //       centeredSlides: true,
  //       paginationClickable: true,
  //       spaceBetween: 20
  //   });
    
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      centeredSlides: !0,
      watchSlidesProgress: !0,	
      paginationClickable: !0,
      pagination: '.swiper-pagination',
      onProgress: function(a) {
        var b, c, d;
        for (b = 0; b < a.slides.length; b++) c = a.slides[b],
        d = c.progress,
        scale = 1 - Math.min(Math.abs(.2 * d), 1),
        es = c.style,
        es.opacity = 1 - Math.min(Math.abs(d / 2), 1),
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = "translate3d(0px,0," + -Math.abs(150 * d) + "px)"
      },
      onSetTransition: function(a, b) {
        for (var c = 0; c < a.slides.length; c++) es = a.slides[c].style,
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = b + "ms"
      }
    });
   
   var layzr = new Layzr({}); 

    $(".text-placeholder").on('click',function(){
        $(this).next().focus();
    });

    $(".text-placeholder-input").on("focus",function(){
      $(this).prev().css('display','none');
    })
    $(".text-placeholder-input").on("blur",function(){
      var _t = $(this);
      if(_t.val() == ''){
          $(this).prev().css('display','block');
      }
    });
    
    $(".list-count .no").on("touchend",function(){
        //alert("已售空了");
    });
    
    //关闭支付弹框
    
    $(".play-close,.layer-bg").on("touchend",function(){
      $(".product-show-text").css("display","block");
      $(".layer-bg").css("display","none");
      $(".fixb0").css("display","none");
    })
    
    // 弹出支付
    $(".goto-buy").on("touchend",function(){
     
      $(".product-show-text").css("display","none");
      $(".layer-bg").css("display","block");
      $(".fixb0").css("display","block");
       textareaAuto();
    })
    
  });

})();
