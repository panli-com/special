(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    
    var Copytext = new CopyText('.btn-copy');

    Copytext.on('success', function(e) {
        // console.info('Action:', e.action);
        // console.info('Text:', e.text);
        // console.info('Trigger:', e.trigger);
    
        // e.clearSelection();
        
        console.log(e);
        alert(e.text);
        e.clearSelection();
    });
    
    Copytext.on('error', function(e) {
        // console.error('Action:', e.action);
        // console.error('Trigger:', e.trigger);
        
        console.log(e);
    });
    
    
  }); // end of document ready
})(jQuery); // end of jQuery name space


function SetToBold () {
   document.execCommand ('bold', false, null);
}


copyCode();

function copyCode(){ 
	var testCode=document.getElementById('foo').value; 
	copy_clip(testCode) 
} 


function copy_clip(copy) {
	if (window.clipboardData) {
		window.clipboardData.setData("Text", copy);
	} else if (window.netscape) {
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if (!clip) return;
		var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if (!trans) return;
		trans.addDataFlavor('text/unicode');
		var str = new Object();
		var len = new Object();
		var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copytext = copy;
		str.data = copytext;
		trans.setTransferData("text/unicode", str, copytext.length * 2);
		var clipid = Components.interfaces.nsIClipboard;
		if (!clip) return false;
		clip.setData(trans, null, clipid.kGlobalClipboard);
	}
	
	return false;
}
	