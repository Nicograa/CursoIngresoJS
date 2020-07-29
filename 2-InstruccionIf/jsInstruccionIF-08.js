function mostrar()
{
	    var edadIngresada;
		var	estadoCivilIngresado;

		edadIngresada=txtIdEdad.value;
		edadIngresada=parseInt(edadIngresada);

		estadoCivilIngresado=estadoCivil.value;
		
		
		switch(edadIngresada)
		{
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
				alert("respeta a tus mayores");
				alert("hagan la tarea");
				break;
			case 14:
			case 15:
			case 16:
			case 17:
				alert("respeta a tus mayores");
				switch(estadoCivilIngresado)
				{
					case "Soltero":
						break;
					case "Casado":
						alert("sos muy joven para no ser soltero");
						break;	
					case "Divorciado":
						alert("sos muy joven para no ser soltero");
						alert("a intentarlo nuevamente");
						break;
				}
				break;
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
				alert("se responsable");
				switch(estadoCivilIngresado)
				{
					case "Soltero":
						alert("a vivir la vida");
						break;
					case "Casado":
						alert("a disfrutar la pareja");
						break;	
					case "Divorciado":
						alert("a intentarlo nuevamente");
						break;
				}
				break;
			default:
				alert("se responsable");
				alert("sos persona de riesgo");
				switch(estadoCivilIngresado)
				{
					case "Soltero":
						alert("a vivir la vida");
						break;
					case "Casado":
						alert("a disfrutar la pareja");
						break;	
					case "Divorciado":
						alert("a intentarlo nuevamente");
						break;
				}
				break;
			
			
				
		}














		/* if(edadIngresada<18)
		{
			alert("respeta a tus mayores");
		
			if(estadoCivilIngresado!="Soltero")
			{
				alert("sos muy joven para no ser soltero");
			}
			if(edadIngresada<13)
			{
				alert("hagan la tarea");
			}
		}
				
		if(edadIngresada>17)
		{
			alert("se responsable");
		
			if(edadIngresada>59)
			{
				alert("sos persona de riesgo");
			}
			if(estadoCivilIngresado=="Soltero")
		    {
			    alert("a vivir la vida");
			}else{
			if (estadoCivilIngresado=="Casado")
			{
			 	alert("a disfrutar la pareja");
			}
		}
		}
		if(estadoCivilIngresado=="Divorciado")
		{
			alert("a intentarlo nuevamente")
		}




	var edadIngresada;
	var estado;	
	

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estado=estadoCivil.value;

	
	
	
	if( estado=="Soltero" && edadIngresada>17)
	{
		alert("Es soltero y no es menor.");
	} */
		


}