//ventana de prueba
var win = Ti.UI.createWindow({
	backgroundColor: "white"
});
var moment = require('moment.min');

//recepcion de json
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


//////////////////////////////////////7
//ventana Principal 
var winPrincipal = Ti.UI.createWindow({
	backgroundColor:"White",
});

//label para Guatevision
var labelGuatevision = Ti.UI.createLabel({
  color: '#000',
  font: { fontSize:16},
  text: 'Guatevision',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 30,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});
winPrincipal.add(labelGuatevision);
labelGuatevision.addEventListener('click',function(e){
	winGuatevision.open();
});
///////////////////////////////////////////
//ventana Guatevision 
var winGuatevision = Ti.UI.createWindow({
	backgroundColor:"White",
});
var labelwinGuatevision = Ti.UI.createLabel({
  color: '#000',
  font: { fontSize:16},
  text: 'Ventana de Guatevision',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 30,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});
winGuatevision.add(labelwinGuatevision);
//inicio de la aplicacion
function iniciar(){
	xhr.open('GET',url);
	xhr.send();
	moment.lang(Ti.Locale.getCurrentLanguage());
	alert(moment().format('LLL'));
	winPrincipal.open();
}
iniciar();
