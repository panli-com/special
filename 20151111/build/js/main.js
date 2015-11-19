(function() {
  
  if (!document.querySelectorAll) {
    document.querySelectorAll = function (selectors) {
        var style = document.createElement('style'), elements = [], element;
        document.documentElement.firstChild.appendChild(style);
        document._qsa = [];

        style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
        window.scrollBy(0, 0);
        style.parentNode.removeChild(style);

        while (document._qsa.length) {
            element = document._qsa.shift();
            element.style.removeAttribute('x-qsa');
            elements.push(element);
        }
        document._qsa = null;
        return elements;
    };
}
  
  function adjustHeight(textareaElement, minHeight) {
      var outerHeight = parseInt(window.getComputedStyle(el).height, 10);
      var diff = outerHeight - el.clientHeight;
      el.style.height = 0;
      el.style.height = Math.max(minHeight, el.scrollHeight + diff) + 'px';
  }
  var textAreas = document.querySelectorAll('textarea[data-adaptheight]');
  for (var i = 0, l = textAreas.length; i < l; i++) {
      var el = textAreas[i];
      el.style.boxSizing = el.style.mozBoxSizing = 'border-box';
      el.style.overflowY = 'hidden';
      var minHeight = el.scrollHeight;
      el.addEventListener('input', function() {
          adjustHeight(el, minHeight);
      });
      window.addEventListener('resize', function() {
          adjustHeight(el, minHeight);
      });
      adjustHeight(el, minHeight);
  }
}());

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

    $(".num-input").on('input change',function(){
      var _t = $(this),
          _tV = parseInt(_t.val()),
          proN = parseInt($("#pro-number").text());
      if(_tV > proN){
        _t.val(proN);
      }
      if(_tV < 1){
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
