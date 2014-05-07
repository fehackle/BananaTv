var id=0;
//librerias auxiliares 
//var moment = require('libs/moment');
//conexion a base de datos 
var database  = require('js/database');


///////*****recepción de Json*****/////// 
xhr = Ti.Network.createHTTPClient({
	onload:function(x){
	},
	onerror:function(x){},
	onsendstream:function(x){
		alert(this.responseText);
		loadJson(JSON.parse(this.responseText));
	},
	timeout:5000	
});


///////////////////////////////////////


///////*****ventana Principal*****/////// 
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
labelGuatevision.addEventListener('click',function(e){
	winGuatevision.open();
});
///////////////////////////////////////////

///////*****ventana Guatevision*****/////// 
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
		for (var i=1; i <= 2; i++) {
			id= i;
			url ="http://apibananatv-chaqui.rhcloud.com/?canal="+id.toString();
			alert(url);
			xhr.open('GET',url);
			xhr.send();
		};
		
}

//funcion usando Json 
function loadJson(json){
	alert("que onda");
	for (var i=0; length = json.canal.lenght ; i++) {
		var canal = json.canal[i];
		 database("insert","canal",canal.nombre,id,null);
		 for (var i=0; length = canal.canales.lenght; i++) {
		   var programa = canal.canales;
		   		database("insert","programa",programa.nombre,programa.id,programa.hora);
		 };
	};	
}

//funcion para agregar propiedades a la ventana principal e inicializarla
function ventanas(){
	winPrincipal.add(labelGuatevision);
	winPrincipal.open();
}

//funcion de iniciar 
function iniciar(){
	if (Ti.Network.online == true  ) {
		database("create",null,null,null,null);
		alert("que onda 1");
		funJson();
	}
	else{
		alert("necesita conexion a internet para actualizar horarios");
	}
	ventanas();
}
iniciar();

