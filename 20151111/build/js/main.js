(function($){
  $.fn.autoTextarea = function(options) {
    var defaults={
      maxHeight:null,
      minHeight:$(this).height()
    };
    var opts = $.extend({},defaults,options);
    return $(this).each(function() {
      $(this).bind("paste cut keydown keyup focus blur",function(){
        var height,style=this.style;
     
        this.style.height = opts.minHeight+ 'px';
        if (this.scrollHeight > opts.minHeight) {
          if (opts.maxHeight && this.scrollHeight > opts.maxHeight) {
            height = opts.maxHeight;
            style.overflowY = 'scroll';
          } else {            
            if(navigator.userAgent.indexOf("MSIE 9.0")>0 && !window.innerWidth){
               height = this.scrollHeigh+20;
            }else{
               height = this.scrollHeight-20;
            }          
            style.overflowY = 'hidden';
          }
          style.height = height + 'px';
        }
      });
    });
  };
})(jQuery);
// 使用
$(function() {
      $("textarea").autoTextarea();
});
;(function(){
  $(function(){
    $(".num-jia").on("click",function(){
      var _tN = $(".num-input"),
          _tNV = parseInt(_tN.val()),
          proN = parseInt($("#pro-number").text());
          if(_tNV == proN){
            return;
          }
          _tN.val(_tNV+1);
          vidataNum();
    })
    $(".num-jian").on("click",function(){
      var _tN = $(".num-input"),
          _tNV = parseInt(_tN.val()),
          proN = parseInt($("#pro-number").text());
          if(_tNV == 1){
            return;
          }
          _tN.val(_tNV-1);
          vidataNum();
    })

    $(".num-input").on('input propertychange',function(){
      var _t = $(this),
          _tV = _t.val(),
          proN = parseInt($("#pro-number").text());          
       _t.val(_tV.replace(/\D/g,''));
      if(parseInt(_tV) > proN){
        _t.val(proN);
      }
      
      if(parseInt(_tV) < 1 || parseInt(_tV)== ''){
          _t.val(1);
      }
      
      vidataNum();
    })
    vidataNum();
  });

})();

;(function(){
  $(function(){

    $("#Form1").submit(function(e){
       if(!vidataNum()){
         
         var mst = '您的余额不足, 请充值后再下单',
            proN = parseInt($("#pro-number").text());
        
         if(proN == 0){
           mst = '库存不足';
         }
          //PL.msg(mst);
          PL.alert(mst, {icon: 5});
          return false;
       }
       
       var pwd = $(".password");
       if(pwd.val() == ''){
         PL.alert('请输入密码', {icon: 5});         
         return false;
       }
    });

  });
})();

function vidataNum(){
  var proPrice = Number($("#product-price").text()),
      _tNV = $(".num-input").val(),
      over = Number($("#user-over").text());
      if(_tNV == "" || _tNV == null || _tNV == NaN){
        $(".num-input").val(1);
        _tNV=1;      
      }
    var  proN = parseInt($("#pro-number").text());
    if(proN == 0){
      $(".num-input").val(0);
      _tNV = 0;
    }
    var  playPrice = proPrice * parseInt(_tNV);

  $("#playPrice").html(playPrice.toFixed(2));
  if(proN == 0){
     return false;
  }
  if(playPrice > over){
    $(".goto-paly-a").show();
    return false;
  } else {
    $(".goto-paly-a").hide();
    return true; 
  }
}


// v04
function appV(){
  return "0.0.5"; 
}
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
        mainOfL = $(".z-thinks-head").offset().left;
        
    if(winW >= 1484){
      var oFright = mainOfL+1200+55;
      $('.back-Top').css("left",oFright)
    }else {
      $('.back-Top').css({"left":'',right:"55px"});
    }
  }

})();
