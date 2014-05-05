//ventana de prueba
var win = Ti.UI.createWindow({
	backgroundColor: "white"
});
var moment = require('moment.min');

//recepcion de json

xhr = Ti.Network.createHTTPClient({
	onload:function(x){
	},
	onerror:function(x){},
	onsendstream:function(x){
		loadJson(JSON.parse(this.responseText));
	},
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
  font: { fontSize:32},
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
  font: { fontSize:32},
  text: 'Ventana de Guatevision',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 30,
  width: Ti.UI.SIZE, height: Ti.UI.SIZEWW
});
winGuatevision.add(labelwinGuatevision);
//inicio de la aplicacion

function funJson(){
		
		url ="http://apibananatv-chaqui.rhcloud.com/?canal=1";
		xhr.open('GET',url);
		xhr.send();
}

//funcion usando Json 
function loadJson(json){
	var table = Ti.UI.createTableView();
	for (var i=0; length = json.canal.lenght ; i++) {
		var canal = json.canal[i];
		 database("insert","canal",canal.nombre,id,null);
		 for (var i=0; length = canal.canales.lenght; i++) {
		   var programa = canal.canales;
		   		database("insert","programa",programa.nombre,programa.id,programa.hora);
		 };
	};	
}

//funcion de iniciar 
function iniciar(){
	moment.lang(Ti.Locale.getCurrentLanguage());
	alert(moment().format('LLL'));
	database("create",null,null,null,null);
	funJson();
	
}
iniciar();
