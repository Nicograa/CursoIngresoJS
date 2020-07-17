function mostrar()
{
	var parejaUno;
	var parejaDos;
	var pesoUno;
	var pesoDos;
	var pesoAmbos;
	var promedio;

	
    parejaUno=prompt("ustedes se llaman:")
    parejaDos=prompt("y:");

    pesoUno=prompt("y pesan:");
    pesoUno=parseInt(pesoUno);
    pesoDos=prompt("y:");
    pesoDos=parseInt(pesoDos);

    pesoAmbos=pesoUno+pesoDos;
    pesoAmbos=parseInt(pesoAmbos);

    promedio=pesoAmbos/2;


    alert("ustedes se llaman: "+parejaUno+" y "+parejaDos+ " pesan "+pesoUno+" y "+pesoDos+" kilos, que sumados son: "+pesoAmbos+ "kilos y el promedio de peso es: "+promedio );




  
}
