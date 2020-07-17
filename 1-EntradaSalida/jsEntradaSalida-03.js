/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;//declaro o creo

    //cargo o asigno
	//nombreIngresado=txtIdNombre.value
	nombreIngresado=document.getElementById('txtIdNombre').value

    //mostrar
	alert("Su nombre es: "+nombreIngresado);


}


