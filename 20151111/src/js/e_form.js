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
