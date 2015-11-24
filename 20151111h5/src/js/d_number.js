;(function(){
  $(function(){
    $(".num-jia").on("touchend",function(){
      var _tN = $(".num-input"),
          _tNV = parseInt(_tN.val()),
          proN = parseInt($("#pro-number").text());
          if(_tNV == proN){
            return;
          }
          _tN.val(_tNV+1);
          vidataNum();
    })
    $(".num-jian").on("touchend",function(){
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
