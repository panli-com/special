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