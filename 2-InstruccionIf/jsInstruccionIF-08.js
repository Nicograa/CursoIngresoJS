function mostrar()
{
	var edadIngresada;
	var estado;	
	

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estado=estadoCivil.value;

	
	
	
	if( estado=="Soltero" && edadIngresada>17)
	{
		alert("Es soltero y no es menor.");
	} 
		


}//FIN DE LA FUNCIÓN