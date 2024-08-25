function mostrar()
{
	//declarar variables
	let numero;
	let contadorPar = 0;

	// pedir un numero
	numero = parseInt(prompt("Ingrese su numero"));

	//tengo que hacer que una variable tome los valores desde el 1 hasta el numero ingresado
	for(let i = 1; i <= numero; i++){

		// para cada uno de los valores que toma la variable analizo si es par
		// cuando encuentro un par lo cuento y lo muestro 
		if(i % 2 == 0){
			contadorPar++;
			console.log(i);
		}

		
	}

	console.log("pares encontrados "+ contadorPar);
	// una vez que analice todos los vcalores muestro la cantidad de pares



}//FIN DE LA FUNCIÓN