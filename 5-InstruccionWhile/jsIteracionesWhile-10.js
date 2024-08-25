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
	let numero;
	let seguir;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let acumuladorPositivo;
	let acumuladorNegativos;
	let promedioPositivo;
	let promedioNegativo;
	let diferencia;
	
	//declarar variables 
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	acumuladorPositivo = 0;
	acumuladorNegativos = 0;
	promedioNegativo = 0;
	promedioPositivo = 0;


	//generar un bucle del tipo mientras el usuario quiera(do while)

	do {

	//pido un numero
		numero = parseInt(prompt("Ingrese un numero: "));

	//analizar el signo del numero y actuar en consecuencia
		if(numero < 0){

			acumuladorNegativos += numero;
			contadorNegativos++;

		}else if( numero == 0){

			contadorCeros++;

		}
		else {
			acumuladorPositivo  += numero;
			contadorPositivos++;
		}

	//analizar si el numero es par 
	if (numero % 2 == 0) {
		contadorPares++;
	}

		seguir = prompt("Quiere ingresar otro numero?: ");
	} while (seguir == 's')
	
	if(contadorPositivos > 0){

		promedioPositivo = acumuladorPositivo / contadorPositivos;
	}
	
	if (contadorNegativos > 0) {

		promedioNegativo = acumuladorNegativos / contadorNegativos;
	}

	

	diferencia = contadorPositivos - contadorNegativos;

	console.log("1-Suma de los negativos: " + acumuladorNegativos);
	console.log("2-Suma de los positivos: " + acumuladorPositivo);
	console.log("3-Cantidad de positivos: " + contadorPositivos);
	console.log("4-Cantidad de negativos: " + contadorNegativos);
	console.log("5-Cantidad de ceros: " + contadorCeros);
	console.log("6-Cantidad de números pares: " + contadorPares);
	console.log("7-Promedio de positivos: " + promedioPositivo);
	console.log("8-Promedios de negativos: " + promedioNegativo);
	console.log("9-Diferencia entre positivos y negativos: " + diferencia);
		
	
}//FIN DE LA FUNCIÓN