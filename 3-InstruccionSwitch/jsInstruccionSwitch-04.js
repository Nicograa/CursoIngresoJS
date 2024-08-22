function mostrar()
{
	let mes; 

	mes = document.getElementById("txtIdMes").value;

	 switch(mes){

	 	case "Febrero":
	 		alert("tiene 28 días.");
	 		break;

	 	case "Enero":
	 	case "Marzo":
	 	case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 dias.");
	 		break;

	 	default:	
	 		alert("tiene 30 días.");

	 	/* case "Abril":	
	 	case "Junio":	
	 	case "Septiembre":
	 	case "Noviembre":
	 		alert("tiene 30 días.");
	 		break;
	 	*/
	 		
	 

	 }

}//FIN DE LA FUNCIÓN