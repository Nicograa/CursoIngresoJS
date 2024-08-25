function mostrar()
{
	let numero;
	let contadorDivisores;

	contadorDivisores = 0;
	

	numero = parseInt(prompt("Ingrese su numero"));
	

	for(i = 1; i <= numero; i++){

		if(numero % i == 0){
			contadorDivisores++;
			console.log(i);
		}
	}
	console.log("divisores encontrados "+ contadorDivisores);

}//FIN DE LA FUNCIÓN