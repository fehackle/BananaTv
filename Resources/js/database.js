function database(request,tabla,nombre,id,hora){
	switch(request){
		case 'create':{
			try{
			var db = Ti.Database.open("canales");
			db.execute("DROP TABLE IF EXISTS 'canal'; DROP TABLE IF EXISTS 'programa'; CREATE  TABLE IF NOT EXISTS `canal` ( `idcanales` INT NOT NULL ,  `nombre` VARCHAR(45) NULL ,  PRIMARY KEY (`idcanales`) ) ENGINE = InnoDB; CREATE  TABLE IF NOT EXISTS `programa` ( `idprogramas` INT NOT NULL , `nombre` VARCHAR(60) NULL, `horaDeInicio` VARCHAR(60) NULL , `canales_idcanales` INT NOT NULL , PRIMARY KEY (`idprogrmas`, `canales_idcanales`) , INDEX `fk_progrmas_canales` (`canales_idcanales` ASC) , CONSTRAINT `fk_progrmas_canales` FOREIGN KEY (`canales_idcanales` ) REFERENCES `canal` (`idcanales` )");
			alert ("bd creada");
			db.close();
			}
			catch(e){
				alert("error");
			}
			}
		case 'insert':{
			switch(tabla){
				case "canal":{
					var db = Ti.Database.open("canales");
					db.execute("INSERT INTO canal VALUES("+id+",'"+nombre+"')");
					alert ("bd insertado canal");
					db.close();
					break;	
				}
				
				case "programa":{
					var db = Ti.Database.open("canales");
					db.execute("INSERT INTO programa VALUES("+id+",'"+nombre+"','"+hora+"')");
					alert ("bd insertado programa");
					db.close();
					break;
				}
			}
		}
		case 'select':{
			switch(tabla){
				case "canal":{
					var db = Ti.Database.open("canales");
					var resultado =db.execute("SELECT * FROM canal");
					db.close();
					return resultado;
					break;	
				}
				
				case "programa":{
					var db = Ti.Database.open("canales");
					var resultado =db.execute("SELECT * FROM programa");
					db.close();
					return resultado;
					break;
				}
			}
		}
		}
	}
module.exports =database;
