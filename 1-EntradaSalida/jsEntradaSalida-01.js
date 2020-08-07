
function mostrar()
{ 
	var cantidadAnimales;
	var razaIngresada;
	var pesoIngresado;
	var	temperaturaIngresada;
	var peligroDeExtincion;
	var edadIngresada;
	var contador;
	var acumulador;
	var promedioEdad;
	var razaDelMasPesado;
	var pesoMasGrande;
	var acumuladorAnimalEnextincion;
	var temperaturaMinima;
	var temperaturaMaxima;
	var banderaDelPrimero;
	var banderaMaximaTemperatura;

	respuesta="si";
	contador=0;
	acumulador=0;
	acumuladorAnimalenExtincion=0;
	banderaDelPrimero=0;
	banderaMaximaTemperatura=0;
	

	while(respuesta=="si")
	{
		razaIngresada=prompt("ingrese raza del animal");

		pesoIngresado=prompt("ingrese peso del animal");
		pesoIngresado=parseInt(pesoIngresado);

		temperaturaIngresada=prompt("ingrese temperatura del lugar donde habita");
		temperaturaIngresada=parseInt(temperaturaIngresada);

		

		edadIngresada=prompt("ingrese edad del animal");
		edadIngresada=parseInt(edadIngresada);
		acumulador=acumulador+edadIngresada;

		peligroDeExtincion=prompt("ingrese si esta en peligro de extincion( si o no)");
		while(peligroDeExtincion!="si" && peligroDeExtincion!="no")
		{
			peligroDeExtincion=prompt("Error reingrese si esta en peligro de extincion( si o no)");
		}

		

		if(contador==0)
		{
			pesoMasGrande=pesoIngresado;
			razaDelMasPesado=razaIngresada;
		}else
			{
				if(pesoIngresado>pesoMasGrande)
				{
					pesoMasGrande=pesoIngresado;
					razaDelMasPesado=razaIngresada;
				}
			}

		if(peligroDeExtincion=="si")
		{
			acumuladorAnimalenExtincion=acumuladorAnimalenExtincion+1;
			if(banderaMaximaTemperatura==0)
			{
				banderaMaximaTemperatura=1;
				temperaturaMaxima=temperaturaIngresada;
			}else
				{
					if(temperaturaIngresada>temperaturaMaxima)
						{
							temperaturaMaxima=temperaturaIngresada;
						}
				}
		}

			
			
		

			

		if(banderaDelPrimero==0)
		{
			banderaDelPrimero=1;
			temperaturaMinima=temperaturaIngresada;
		}else
			{	if(temperaturaIngresada<temperaturaMinima)
				{
					temperaturaMinima=temperaturaIngresada;
				}

			}
			

		contador=contador+1;
		respuesta=prompt("desea continuar?")	
		
		
	}

	
	promedioEdad=acumulador/contador;

document.write("El promedio de edad total es: "+promedioEdad);
document.write("<br> La raza mas pesada es: "+razaDelMasPesado);
document.write("<br>La cantidad de animales en extincion: "+acumuladorAnimalenExtincion);
document.write("<br>La temperatura maxima de los animales en extincion es: "+temperaturaMaxima);
document.write("<br>La temperatura minima es: "+temperaturaMinima);


}






/*
Maria 	F 45
nicolas	M 3
facundo	M 18
sofia	M 17
mario	M 50

function mostrar()
{ 
	var edadIngresada;
	var sexoIngresado;
	var nombreIngresado;
	var contador;
	var contadorMayores;
	var contadorMenores;
	var	contadorAdolescentes;
	var edadMaxima;
	var edadMinima;
	var banderaDelPrimero;
	var edadMasVieja;
	var edadMasJoven;

	
	respuesta="si";
	contador=0;
	contadorMayores=0;
	contadorMenores=0;
	contadorAdolescente=0;
	banderaDelPrimero=true;


	while(respuesta=="si")
	{	
		nombreIngresado=prompt("ingrese su nombre");
		contador=contador+1;

		sexoIngresado=prompt("ingrese su sexo f o m ");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("ERROR ingrese su sexo f o m ");
		}


		edadIngresada=prompt("Ingrese su edad (0 a 120)");
		edadIngresada=parseInt(edadIngresada);

		while(edadIngresada<0 || edadIngresada>120)
		{
			
			edadIngresada=prompt("ERROR ingrese su edad (0 a 120)");
			
		}	
						
		respuesta=prompt("desea continuar?");	
		}
		
	if(edadIngresada<18)
	{
		contadorMenores=contadorMenores+1;
	}else			
		{
			contadorMayores=contadorMayores+1;
		}
	if(edadIngresada>12 && edadIngresada<18)
	{
		contadorAdolescente=contadorAdolescente+1;
	}	

	if(banderaDelPrimero=="true")
	{
		edadMasVieja=numeroIngresado;
		edadMasJoven=numeroIngresado;
		banderaDelPrimero="ya esta";
	}else
		{
			if(numeroIngresado>edadMasVieja)
			{
				edadMasVieja=numeroIngresado;
			}
			if(numeroIngresado<edadMasJoven)
			{
				edadMasJoven=numeroIngresado;
			}
		}	
			
	

document.write("su nombre es: "+nombreIngresado);
document.write("<br> cuantas personas son: "+contador);
document.write("<br> cuantas personas mayores son: "+contadorMayores );
document.write("<br> cuantas personas menores son: "+contadorMenores);
document.write("<br> cuantas personas adolescentes son: "+contadorAdolescente); */