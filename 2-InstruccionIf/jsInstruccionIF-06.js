function mostrar()
{

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) 
	{
		alert("Sos mayor de edad");	
	}  
	else{

		if (edad <=12) 
		{
			alert("Sos menor de edad");
		}
	else	

		alert("Sos adolescente");
	}




}//FIN DE LA FUNCIÓN