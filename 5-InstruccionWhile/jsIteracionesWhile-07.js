/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{ 	
	let numero;
	let acumulador;
	let respuesta;
	let promedio;
	let contador;

	acumulador=0;
	contador=0;

		do {

			numero = parseInt(prompt("Ingrese un numero: "));

			acumulador = acumulador + numero;

			contador++;

			respuesta = prompt("Quiere ingresar otro numero? ");

		}while (respuesta == 'si')


	promedio = acumulador / 5;
	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = promedio;

	/*
	let numero;
	let acumulador;
	let respuesta;
	let promedio;
	let contador;

	acumulador=0;
	contador=0;
	respuesta='si';

		while( respuesta == 'si'){

			numero = parseInt(prompt("Ingrese un numero: "));

			acumulador = acumulador + numero;

			contador++;

			respuesta = prompt("Quiere ingresar otro numero? ");

		}


	promedio = acumulador / 5;
	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = promedio;
	*/

}//FIN DE LA FUNCIÓN