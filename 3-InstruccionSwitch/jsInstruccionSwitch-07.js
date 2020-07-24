function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case("Bariloche"):
			alert("Se encuentra al Oeste de nuestro pais");
			break;
		case("Cataratas"):
			alert("Se encuentra al Norte de nuestro pais");
			break;
		case("Mar del plata"):
			alert("Se encuentra al Este de nuestro pais");
			break;
		case("Ushuaia"):
			alert("Se encuentra al Sur de nuestro pais");
			break;
	}

}//FIN DE LA FUNCIÓN