/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado !="m"){

		sexoIngresado = prompt("Ingrese un sexo valido");
	}

	if( sexoIngresado == "f"){
		alert (" Su sexo es femenino");
	}else
		alert(" Su sexo es masculino");

	
}//FIN DE LA FUNCIÓN