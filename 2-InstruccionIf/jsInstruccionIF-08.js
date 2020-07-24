function mostrar()
{
	    var edadIngresada;
		var	estadoCivilIngresado;

		edadIngresada=txtIdEdad.value;
		edadIngresada=parseInt(edadIngresada);

		estadoCivilIngresado=estadoCivil.value;
		
		if(edadIngresada<18)
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




	/*var edadIngresada;
	var estado;	
	

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estado=estadoCivil.value;

	
	
	
	if( estado=="Soltero" && edadIngresada>17)
	{
		alert("Es soltero y no es menor.");
	} */
		


}