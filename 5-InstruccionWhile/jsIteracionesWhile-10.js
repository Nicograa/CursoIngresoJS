/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var contador;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCero;
	var contadorPares;
	var sumaPositivos;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPyN;
	var promedio;



	sumaNegativos=0;
	sumaPositivos=0;
	respuesta="si";
	contador=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorCero=0;
	contadorPares=0;
	

	while(respuesta=="si")
	{	
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1

		if(numeroIngresado>0)
 		{
 			sumaPositivos=sumaPositivos+numeroIngresado;
 			contadorPositivos=contadorPositivos+1;
 			promedioPositivos=sumaPositivos/contadorPositivos;

 		}else
 		{
	 		if (numeroIngresado<0) 
	 		{
	 			sumaNegativos=sumaNegativos+numeroIngresado;
	 			contadorNegativos=contadorNegativos+1;
	 			promedioNegativos=sumaNegativos/contadorNegativos;
	 		}else
	 			{
	 				contadorCero=contadorCero+1;
	 			}
 		}		
 		if (numeroIngresado%2==0) 
 		{
 			contadorPares=contadorPares+1;
 		}
 		diferenciaPyN=sumaPositivos+sumaNegativos;


		
		respuesta=prompt("desea continuar?");
	}//fin del while

		
		document.write("la suma de negativos es: "+sumaNegativos);
		document.write("<br>la suma de positivos es: "+sumaPositivos);
		document.write("<br>la cantidad de positivos es: "+contadorPositivos);
		document.write("<br>la cantidad de negativos es: "+contadorNegativos);
		document.write("<br>la cantidad de ceros es: " +contadorCero);
		document.write("<br>la cantidad de numeros pares es: "+contadorPares);
		document.write("<br>el promedio de numeros positivos es: "+promedioPositivos);
		document.write("<br>el promedio de numeros negativos es: "+promedioNegativos);
		document.write("<br>diferencia entre positivos y negativos es: "+diferenciaPyN);

}//FIN DE LA FUNCIÓN