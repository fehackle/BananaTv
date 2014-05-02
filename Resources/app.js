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
var winPrincipal = Ti.UI.createWindow({
	backgroundColor:"White",
});
var labelGuatevision = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:16},
  shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  shadowRadius: 3,
  text: 'Guatevision',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 30,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});
winPrincipal.add(labelGuatevision);
function iniciar(){
	xhr.open('GET',url);
	xhr.send();
	winPrincipal.open();
}
iniciar();
