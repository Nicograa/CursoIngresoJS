function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	//condicion verdadera para los valores de edad que estan por debajo o por encima del rango 13-17
	if (edad <13 || edad >17) 
	{
		alert("No es adolescente");
	}


	/* pregunto si no estoy fuera del rango

	if( !(edad >= 13 && edad <= 17))
	{
		alert("No es adolescente");
	}
	*/
  } 