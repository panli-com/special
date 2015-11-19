function textareaAuto() {
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
}
