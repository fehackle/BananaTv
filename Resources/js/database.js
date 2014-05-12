function database(request,tabla,nombre,id,hora, idCanal){
	Ti.Database.install('bds/appBananaView.sqlite','appBananaView');
	switch(request){
		case 'insert':{
			switch(tabla){
				case "canal":{
					var db = Ti.Database.open("appBananaView");
					
					db.execute("INSERT INTO canal VALUES("+id+",'"+nombre+"');");
					alert ("bd insertado canal");
					db.close();
					break;	
				}
				
				case "programa":{
					var db = Ti.Database.open("appBananaView");
					db.execute("INSERT INTO programa VALUES("+id+",'"+nombre+"','"+hora+"',"+idCanal+");");
					alert ("bd insertado programa");
					db.close();
					break;
				}
			}
		}
		case 'select':{
			switch(tabla){
				case "canal":{
					var db = Ti.Database.open("appBananaView");
					var setResultado =db.execute("SELECT nombre, idcanales  FROM canal");
					var resultado = new Array();
					while (resultSet.isValidRow()){
						var fila = new Object();
						fila["nombre"]=setResultado.fieldByName("nombre");
						fila["id"]=setResultado.fieldByName("idcanales");
						resultado[resultado.length]=fila;
						setResultado.next();	
					}
					db.close();
					return resultado;
					break;	
				}
				
				case "programa":{
					var db = Ti.Database.open("appBananaView");
					var setResultado =db.execute("SELECT nombre, horaDeInicio FROM programa WHERE canales_idcanales = "+String.toString(id));
					var resultado = new Array();
					while (resultSet.isValidRow()){
						var fila = new Object();
						fila["nombre"]=setResultado.fieldByName("nombre");
						fila["horaDeInicio"]=setResultado.fieldByName("horaDeInicio");
						resultado[resultado.length]=fila;
						setResultado.next();	
					}
					setResultado.close();
					db.close();
					return resultado;
					break;
				}
			}
		}
		}
	}
module.exports =database;
