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
