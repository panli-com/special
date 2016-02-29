;(function(){
  
  
   //touchstart:    
   //touchmove:     
   //touchend:    
   //touchcancel:     
  

    
 

 
 PD(window).scroll(function () {
    var scrollTop = PD(window).scrollTop();
    PD('.floor-nav-wrap')[scrollTop > 400 ? 'show' : 'hide']();
    
    });
 
 
})();


