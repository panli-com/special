;(function(){

  $(function(){
    $('.back-Top').on("click",function(){
      $('html,body').animate({ scrollTop: 0 }, 800);
    })

    backTopOF();

    $(".product-sml-u li").first().addClass("on");
    // img show
    $(".product-sml-u li").on("hover",function(){
      var _t = $(this),
          _img = _t.attr("data-img");
          $(".product-sml-u li").removeClass('on');
          _t.addClass("on");
          $(".product-big-box img").attr('src',_img);
    });

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
    })
  });


  $(window).scroll(function(){
    
  	var  scrollTop =  $(window).scrollTop(),bodyHeight = $(window).height(); 
    var submitBtn = $(".submit-btn").offset().top;
   
    	if(scrollTop > submitBtn+50){
       
    		$('.back-Top').fadeIn("slow");
    	}else{
    		$('.back-Top').fadeOut("slow");
    	}
  })

  $(window).resize(function(){
    backTopOF();
  })


  function backTopOF(){
    var winW = $(window).width(),
        mainOf = $(".z-thinks-head").offset(),
        mainOfL = mainOf.left;
        
    if(winW >= 1484){
      var oFright = mainOfL+1200+55;
      $('.back-Top').css("left",oFright)
    }else {
      $('.back-Top').css({"left":'',right:"55px"});
    }
  }

})();
