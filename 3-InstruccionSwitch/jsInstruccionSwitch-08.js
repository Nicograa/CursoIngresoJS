function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case("Bariloche"):
		case("Ushuaia"):
			alert("Hace frio en este destino.");
			break;
		case("Cataratas"):
		case("Mar del plata"):
			alert("Hace calor en este destino.");
			break;
	}

}//FIN DE LA FUNCIÓN