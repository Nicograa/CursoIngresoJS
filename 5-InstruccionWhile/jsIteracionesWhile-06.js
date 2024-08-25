function mostrar()
{ 
	let numero;
	let promedio;
	let acumulador = 0;
	let i = 0;

	while(i < 5){

			numero = parseInt(prompt("Ingrese su numero: "));

			acumulador = acumulador + numero;

			i++;

	}

	promedio = acumulador / 5;
	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = promedio;
 
 /* let numero = 0;
 	let i = 0;

 		while( i < 5){
			numero = numero + paseInt(prompt("ingrese un numero"));
			i++;
 		}
 	document.getElementById('txtIdSuma').value = numero;
	document.getElementById('txtIdPromedio').value = numero / 5;
 
	*/	




}//FIN DE LA FUNCIÓN