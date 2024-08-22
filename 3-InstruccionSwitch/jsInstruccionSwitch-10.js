function mostrar()
{
	let destino;
	let estacion;

	destino = document.getElementById("txtIdDestino").value

	estacion = document.getElementById("txtIdEstacion").value

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					alert("Se viaja");
					break
				case "Cataratas":
				case "Mar del plata":
				case "cordoba":
					alert("No se viaja");
					break
			}
		break;	
		case "Verano":
			switch(destino){
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;
				case "cordoba":
				case "Bariloche":
					alert("No se viaja");
					break;
			}
		break;
		case "Otoño":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "cordoba":
					alert("Se viaja");
					break;
			}
		break;	
		case "Primavera":
			switch(destino){
				case "Bariloche":
					alert("No se viaja");
					break;
				default: 
					alert("Se viaja");	
		
			}
		break;	


	}

}//FIN DE LA FUNCIÓN