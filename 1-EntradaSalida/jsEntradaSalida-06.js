/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno
	//txtIdNumeroDos
	var NumeroUno;
	var NumeroDos;
	var resultado;
	
	numeroUno=txtIdNumeroUno.value;
    numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
    numeroDos=parseInt(numeroDos);


	resultado=numeroUno+numeroDos;

	alert("el resultado es: "+resultado);
}

