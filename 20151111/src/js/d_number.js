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
