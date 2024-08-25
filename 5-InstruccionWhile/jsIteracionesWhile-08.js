/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let positivos;
	let negativos;
	let seguir;
	let flag;

	positivos = 0;
	negativos = 1;
 	flag = 0;
 	
 	do {
 		numero = parseInt(prompt("Ingrese un numero: "));

 		if(numero >=0){

 			positivos = positivos + numero;

 		}else{
 			flag = 1;
 			negativos = negativos * numero;

 		} 

 		seguir = prompt("Quiere ingresar otro numero? ");
 	} while (seguir == 'si')

 	
		if (flag == 0) {
			negativos = 0;
		}



	document.getElementById('txtIdSuma').value = positivos;
	document.getElementById('txtIdProducto').value = negativos;
 	


}