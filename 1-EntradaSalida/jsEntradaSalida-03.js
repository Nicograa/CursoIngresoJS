/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{	
	var razaIngresada;
	var pesoIngresado;
	var temperaturaIngresada;
	var edadIngresada;
	var peligroExtincion;
	var contador;
	var promedioEdad;
	var razaMasPesada;
	var mayorPeso;
	var banderaDelPrimero;
	var temperaturaMaxima;

	respuesta="si";
	contador=0;
	promedioEdad=0;
	banderaDelPrimero=true;

	while(respuesta=="si")
	{
		razaIngresada=prompt("ingrese la raza");

		pesoIngresado=prompt("ingrese el peso del animal");
		pesoIngresado=parseInt(pesoIngresado);

		temperaturaIngresada=prompt("ingrese temperatura media del lugar donde habita");
		temperaturaIngresada=parseInt(temperaturaIngresada);

		edadIngresada=prompt("ingrese edad del animal");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<0 || edadIngresada>120)
		{
			edadIngresada=prompt("Error reingrese edad del animal");
			edadIngresada=parseInt(edadIngresada);
		}

		peligroExtincion=prompt("Esta en peligro de extincion? (si o no)");
		while(peligroExtincion!="si" && peligroExtincion!="no")
		{
			peligroExtincion=prompt("Error, esta en peligro de extincion? (si o no)");
		}
	
		promedioEdad=promedioEdad+edadIngresada;

		if(contador==0)
 		{
 			mayorPeso=pesoIngresado;
 			razaMasPesada=razaIngresada;	
 		}else
 			{
 				if (pesoIngresado>mayorPeso) 
 				{	
 					mayorPeso=pesoIngresado;
 					razaMasPesada=razaIngresada;
 				}
 			}

 		if(peligroExtincion=="si")
 		{
 			if(banderaDelPrimero==true)
 			{
 				banderaDelPrimero=false;
 				temperaturaMaxima=temperaturaIngresada;

 			}else
 				{
 					if(temperaturaIngresada>temperaturaMaxima)
 					{
 						temperaturaMaxima=temperaturaIngresada;
 					}
 				}
 		}


		contador=contador+1;
		respuesta=prompt("desea continuar?");
	}




 promedioEdad=promedioEdad/contador;


document.write("El promedio de edad total es: "+promedioEdad);
document.write("<br>La raza mas pesada es: "+razaMasPesada);
if(banderaDelPrimero!=true)
{
	document.write("<br>La temperatura maxima de los animales en extincion es: "+temperaturaMaxima);
}else
	{
		document.write("<br>No hay animales en extincion");
	}











}
	





	/*var contador;
	var numeroRandom;
	//break;
	contador=0;
	while(contador<10)
	{
		console.log("vuelta :"+contador);
		numeroRandom=Math.floor(Math.random() * 10) + 1; 
		console.log("el ganador es:"+numeroRandom);
		if(numeroRandom>5)
		{
			break;
		}
		contador++;

	}
	console.log("el contador termino con: "+contador);*/



/*var nombreIngresado;//declaro o creo

    //cargo o asigno
	//nombreIngresado=txtIdNombre.value
	nombreIngresado=document.getElementById('txtIdNombre').value

    //mostrar
	alert("Su nombre es: "+nombreIngresado);*/


/*var contador;
	var numeroRandom;
	//break;
	contador=0;
	while(contador<10)
	{
		console.log("vuelta :"+contador);
		numeroRandom=Math.floor(Math.random() * 10) + 1; 

		if(numeroRandom>3)
		{
			continue;
		}
		console.log("el ganador es:"+numeroRandom);
		contador++;
		console.log("fin del while");

	}
	console.log("el contador termino con: "+contador);*/