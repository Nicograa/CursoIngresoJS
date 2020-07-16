/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);


	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	alert("el resultado es: "+resultado);	
}

function restar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);


	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno-numeroDos;

	alert("el resultado es: "+resultado);

	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);


	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno*numeroDos;

	alert("el resultado es: "+resultado);

	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);


	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno/numeroDos;

	alert("el resultado es: "+resultado);
	
}

