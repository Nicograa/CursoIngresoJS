/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio
	contador=0;
	acumulador=0;
	respuesta='si';
	while(respuesta=="si")
	{
		
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("desea continuar?");
	}
	

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN