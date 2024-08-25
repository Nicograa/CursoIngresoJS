/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let seguir;
	let contador;
	let flag;

	flag = 0;

	 // armo el bucle del tipo mientras el usuario quiera (do while)
	do {
		// pido un numero
		numero = parseInt(prompt("Ingrese un numero: "));
		
		// debo reconocer si estoy pidiendo para primera vez
		if (flag == 0){
			// si es asi analizo el max y el min
			maximo = numero;
			
			minimo = numero;
		
			flag = 1;
		}

		//caso contrario me fijo si tengo un nuevo maximo o un nuevo minimo
		// y los actualizo de ser necesario...

		if( numero > maximo){

			maximo = numero;

		}else if (numero < minimo){
			minimo = numero;

		}	


		seguir = prompt("Quiere ingresar otro numero? ");

 	} while (seguir == 's')

//muestro la info (max/Min)


	document.getElementById('txtIdMaximo').value = maximo;
	document.getElementById('txtIdMinimo').value = minimo;
 	




}