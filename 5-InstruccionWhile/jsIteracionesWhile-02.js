/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var edadIngresada;
	var nombreIngresado;
	var alturaIngresada;
	var sexoIngresado;
	var dineroIngresado;
	var nombrePersonaMasGrande;
	var edadMasVieja;
	var cantidadHijosIngresada;
	var contador;
	var edadMasJoven;
	var nombreMujerMasJoven;
	var promedioAltura;
	var contadorMujeres;

	 contador=0;
	 contadorMujeres=0;
	 promedioAltura=0;



	while(contador<10)
	{
		//nombre ingresado
		nombreIngresado=prompt("ingrese su nombre");

		//edad ingresada
		edadIngresada=prompt("ingrese su edad");
		edadIngresada=parseInt(edadIngresada)
		while(edadIngresada<0 || edadIngresada>115)
		{
			edadIngresada=prompt("Error reingrese su edad");
			edadIngresada=parseInt(edadIngresada);
		}

		//altura ingresada
		alturaIngresada=prompt("ingrese su altura");
		alturaIngresada=parseInt(alturaIngresada);
		while(alturaIngresada<30 || alturaIngresada>230)
		{
			alturaIngresada=prompt("Error reingrese su altura");
			alturaIngresada=parseInt(alturaIngresada);
		}

		//sexo ingresado
		sexoIngresado=prompt("ingrese su sexo (f o m)");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error reingrese su sexo (f o m)");
		}

		//dinero ingresado
		dineroIngresado=prompt("ingrese dinero");
		dineroIngresado=parseInt(dineroIngresado);

		//cantidad de hijos
		cantidadHijosIngresada=prompt("ingrese cantidad de hijos");
		cantidadHijosIngresada=parseInt(cantidadHijosIngresada);
		while(cantidadHijosIngresada<0 || cantidadHijosIngresada>10)
		{
			cantidadHijosIngresada=prompt("Error reingrese cantidad de hijos");
		  	cantidadHijosIngresada=parseInt(cantidadHijosIngresada);

		}

		if(contador==0)
		{
			edadMasVieja=edadIngresada;
			nombrePersonaMasGrande=nombreIngresado;
		}else
			{
				if(edadIngresada>edadMasVieja)
				{
					edadMasVieja=edadIngresada;
					nombrePersonaMasGrande=nombreIngresado;
				}
			}

		if(sexoIngresado=="f")
		{
			contadorMujeres=contadorMujeres+1;
			promedioAltura=promedioAltura+alturaIngresada;
			if(contadorMujeres==1)
			{
				edadMasJoven=edadIngresada;
				nombreMujerMasJoven=nombreIngresado;
			}else
				{
					if(edadIngresada<edadMasJoven)
					{
						edadMasJoven=edadIngresada;
						nombreMujerMasJoven=nombreIngresado;
					}
				}
		}		
			
		contador=contador+1;
	
	}
	
	



	document.write("La persona mas grande es: "+nombrePersonaMasGrande);
	if(contadorMujeres!=0)
	{
		document.write("<br>La mujer mas joven es: "+nombreMujerMasJoven);
		promedioAltura=promedioAltura/contadorMujeres;
		document.write("<br>El promedio de altura de las muejeres es: "+promedioAltura);
	}else
		{
			document.write("<br> no hay mujeres");
		}


	

}

/*
	var contador;
	contador=10;
	while(contador>0)
	{
		alert(contador);
		contador=contador-1;
		
		
	}

*/