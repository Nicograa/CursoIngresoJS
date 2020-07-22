function mostrar()
{
		var edadIngresada;
		
		edadIngresada=txtIdEdad.value;
		edadIngresada=parseInt(edadIngresada);

		if(edadIngresada>17 || edadIngresada<13)
		{
			alert("no es adolescente");
		}
	
	



		
	}



	/*errores
	if(edadIngresada>17 && edadIngresada<13)//ninguna
	{
		alert("nunca entra");
	}

	if(edadInresada<18 || edadInresada>12   )//todas
	{
		alert("adolescentes");
	}*/



	/*fin errores

	if( edadIngresada<13)
	{
		alert("no es adolescentes");
	}

	if(edadIngresada>17)
	{
		alert("no es adolescentes");
	}*/

	/* 
	if(edadIngresada>17 || edadIngresada<13)
	{
		alert("no es adolescentes");
	}

	if(!(edadInresada<18 && edadIngresada>12))
	{
		alert("no es adolescentes");
	}

	if(edadInresada<18 && edadIngresada>12   )
	{
		
	}else
	{
		alert("no es adolescentes");
	}*/


//FIN DE LA FUNCIÓN