(function(){
	var win = Ti.UI.createWindow({
	backgroundColor: "white"
});
url ="http://apibananatv-chaqui.rhcloud.com/?canal=1";
xhr = Ti.Network.createHTTPClient({
	onload:function(x){
		alert(this.responseText);
	},
	onerror:function(x){},
	onsendstream:function(x){},
	ondatastream:function(x){},
	onreadystatechange:function(x){},
	timeout:5000	
});
xhr.open('GET',url);
xhr.send();
})();
