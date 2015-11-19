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
  if(playPrice > over || proN == 0){
    $(".goto-paly-a").show();
    return false;
  } else {
    $(".goto-paly-a").hide();
    return true;
  }
}

//
function UserBalance(uName,callback) {  
     $.ajax({
            type: "POST",
            url: "/App_Services/wsSendMessage.asmx/Testsum5",
            dataType: "json",
            data: '{userName:"' + uName + '"}',
            contentType: "application/json;utf-8",
            timeout: 10000,
            error: function () {
                //alert("500");
            },
            success: function (data) {
                callback(data);         

            }
        });    
}

// v  
function appV(){
  return "0.0.4";
}