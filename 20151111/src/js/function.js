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
