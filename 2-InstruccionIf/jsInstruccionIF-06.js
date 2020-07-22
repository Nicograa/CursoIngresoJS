function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<13)
	{
		alert("Es un niño");
	}else
		if(edadIngresada>17)
		{
			alert("Es mayor");
		}
		else
		{
			alert("Es adolescente");
		}



}//FIN DE LA FUNCIÓN