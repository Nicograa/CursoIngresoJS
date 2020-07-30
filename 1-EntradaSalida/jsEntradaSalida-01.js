/*
Maria 	F 45
nicolas	M 3
facundo	M 18
sofia	M 17
mario	M 50
*/
function mostrar()
{ 
	var edadIngresada;
	var sexoIngresado;
	var nombreIngresado;
	var contador;
	

	contador=0;
	
	
	//edad

	edadIngresada=prompt("ingrese su edad (entre 0 y 120)");
	edadIngresada=parseInt(edadIngresada);
	
	while(edadIngresada<0 || edadIngresada>120)
	{
		edadIngresada=prompt("ingrese su edad(entre 0 y 120");
		contador=contador+1
		
	}








}

