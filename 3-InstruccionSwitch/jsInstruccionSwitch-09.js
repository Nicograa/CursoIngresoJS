function mostrar()
{
	let destino;
	let estacion;
	let precioFinal;
	let aumento;
	let descuento;
	const PRECIO = 15000;

	destino = document.getElementById("txtIdDestino").value

	estacion = document.getElementById("txtIdEstacion").value

	switch(estacion){
		
		case "Invierno":
			switch(destino){	
				case "Bariloche":
					aumento = PRECIO * 20 / 100;
					precioFinal = PRECIO + aumento;
					alert("El precio final es "+ precioFinal);
				break;
				case "Mar del plata":
					descuento = PRECIO * 20 / 100;
					precioFinal = PRECIO - descuento;
					alert("El precio final es "+ precioFinal);
				break;
				case "Cordoba":
				case "Cataratas":
					descuento = PRECIO * 10 / 100;
					precioFinal = PRECIO - descuento;
					alert("El precio final es "+ precioFinal);
				break;
			}
			break;

		case "Verano":
			switch(destino){	
				case "Bariloche":
					descuento = PRECIO * 20 / 100;
					precioFinal = PRECIO - descuento;
					alert("El precio final es "+ precioFinal);
				break;
				case "Mar del plata":
					aumento = PRECIO * 20 / 100;
					precioFinal = PRECIO + aumento;
					alert("El precio final es "+ precioFinal);
				break;
				case "Cordoba":
				case "Cataratas":
					aumento = PRECIO * 10 / 100;
					precioFinal = PRECIO + aumento;
					alert("El precio final es "+ precioFinal);
				break;
			}
			break;
		case "Otoño":
		case "Primavera":
				switch(destino){	
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					aumento = PRECIO * 10 / 100;
					precioFinal = PRECIO + aumento;
					alert("El precio final es "+ precioFinal);
				break;
				case "Cordoba":
				alert("El precio final es "+ PRECIO);
				break;
			}	
		break;	

	}

	

}//FIN DE LA FUNCIÓN