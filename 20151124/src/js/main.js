;(function(){

  $(function(){
    
    $('.back-Top').on("click",function(){
      $('html,body').animate({ scrollTop: 0 }, 800);
    })
    
    $('img').each(function() {
        $(this).load(function(){
          $(this).fadeIn();
        });
    });
    
    var imgNum=$('img').length;
    $('img').load(function(){
        if(!--imgNum){
            $("#loading").remove();
        }
    });
  
    $('.parallax').parallax();
    
  //   var obj = {
  //         success: true,
  //         data:[
  //                 {title:'item1',message:11},
  //                 {title:'item1',message:22}
  //         ]
  // }
  // var tmpl = $('#j-tmpl').html();
  // var doTtmpl = doT.template(tmpl);

      
    
  });
  

  

  
})();
