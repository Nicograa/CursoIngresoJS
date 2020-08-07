/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
 	var nombreIngresado;
 	var edadIngresada;
 	var sexoIngresado;
 	var alturaIngresada;
 	var dineroIngresado;
 	var cantidadHijos;
 	var contador;
 	var edadMasVieja;
 	var nombreEdadMasVieja;
 	var cantidadMujeres;
 	var banderaPrimerHombre;
 	var HombreEdadMasVieja;
 	var NombreHombreMasViejo;
 	var mujerMasAlta;
 	var alturaHombreMasViejo;
 	var personaConMasDinero;
 	var personaSinDinero;
 	var promedioEdadMujeres;
 	var acumulador;	
 	var banderaMasDinero;
 	var nombrePersonaConMasDinero;
 	var sexoPersonaConMasDinero;

 	acumulador=0;
 	banderaMasDinero=0;
 	personaSinDinero=0;
 	banderaPrimerHombre=0;
 	contador=0;
 	cantidadMujeres=0;

 	while(contador<2)
 	{
 		nombreIngresado=prompt("Ingrese nombre");
 		while(isNaN(nombreIngresado)==false)
 		{
 			nombreIngresado=prompt("Error reingrese nombre");
 		}

 		edadIngresada=prompt("Ingrese su edad");
 		edadIngresada=parseInt(edadIngresada);
 		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>100)
 		{
 			edadIngresada=prompt("Error reingrese su edad");
 			edadIngresada=parseInt(edadIngresada);
 		}

 		alturaIngresada=prompt("ingrese su altura");
 		alturaIngresada=parseInt(alturaIngresada);
 		while(isNaN(alturaIngresada)==true || alturaIngresada<30 || alturaIngresada>230 )
 		{
 			alturaIngresada=prompt("Error reingrese su altura");
 			alturaIngresada=parseInt(alturaIngresada);
 		}

 		sexoIngresado=prompt("ingrese su sexo (f o m)");
 		while(sexoIngresado!="f" && sexoIngresado!="m")
 		{
 			sexoIngresado=prompt("Error reingrese su sexo (f o m)")
 		}

 		dineroIngresado=prompt("ingrese su dinero");
 		dineroIngresado=parseInt(dineroIngresado);
 		while(isNaN(dineroIngresado)==true)
 		{
 			dineroIngresado=prompt("Eror reingrese su dinero");
 			dineroIngresado=parseInt(dineroIngresado);
 		}

 		cantidadHijos=prompt("ingrese la cantidad de hijos");
 		cantidadHijos=parseInt(cantidadHijos);
 		while(isNaN(cantidadHijos)==true || cantidadHijos<0 || cantidadHijos>10)
 		{
 			cantidadHijos=prompt("Error reingrese la cantidad de hijos");
 			cantidadHijos=parseInt(cantidadHijos);
 		}
	
		
		
		if(contador==0)
		{
			edadMasVieja=edadIngresada;
			nombreEdadMasVieja=nombreIngresado;
		}else
			{	if(edadIngresada>edadMasVieja)
				{
					edadMasVieja=edadIngresada;
					nombreEdadMasVieja=nombreIngresado;
				}
			}

		if(sexoIngresado=="f")
		{
			cantidadMujeres=cantidadMujeres+1;
			acumulador=acumulador+edadIngresada;

			
				if(cantidadMujeres==1)
				{
					mujerMasAlta=alturaIngresada;
				}else
					if (alturaIngresada>mujerMasAlta) 
					{
						mujerMasAlta=alturaIngresada;
					}
					
					
		}else
			{	if(banderaPrimerHombre==0)
				{
					banderaPrimerHombre=1;
					HombreEdadMasVieja=edadIngresada;
					NombreHombreMasViejo=nombreIngresado;
					alturaHombreMasViejo=alturaIngresada;
				}else
					{
						if(edadIngresada>HombreEdadMasVieja)
						{
							HombreEdadMasVieja=edadIngresada;
							NombreHombreMasViejo=nombreIngresado;
							alturaHombreMasViejo=alturaIngresada;
						}
					}

			}	
		if(banderaMasDinero==0)
		{	
			banderaMasDinero=1;
			personaConMasDinero=dineroIngresado;
			nombrePersonaConMasDinero=nombreIngresado;
			sexoPersonaConMasDinero=sexoIngresado;
		}else
			{
				if(dineroIngresado>nombrePersonaConMasDinero)
				{
					personaConMasDinero=dineroIngresado;
					nombrePersonaConMasDinero=nombreIngresado;
					sexoPersonaConMasDinero=sexoIngresado;
				}
			}
			
		if(dineroIngresado<0)
		{
			personaSinDinero=personaSinDinero+1;
		}
					

promedioEdadMujeres=acumulador/cantidadMujeres

contador=contador+1

	}

	
document.write("La edad mas vieja es: "+edadMasVieja);
document.write("<br> El nombre de la edad mas vieja es: "+nombreEdadMasVieja);
document.write("<br> la cantidad de mujeres es: "+cantidadMujeres);
document.write("<br> El hombre mas viejo es: "+NombreHombreMasViejo);
document.write("<br> Edad del hombre mas viejo es: "+HombreEdadMasVieja);
document.write("<br> la altura de la mujer mas alta es: "+mujerMasAlta);
document.write("<br> la altura del hombre mas viejo: "+alturaHombreMasViejo);
document.write("<br>el promedio de edad de las mujeres es: "+promedioEdadMujeres);
document.write("<br>Nombre de la persona con mas dinero: "+nombrePersonaConMasDinero);	
document.write("<br>Sexo de la persona con mas dinero: "+sexoPersonaConMasDinero);	
document.write("<br>La cantidad de personas sin dinero son: "+personaSinDinero);	


	

}


/* //declaro o creo variable
	var nombreIngresado;

	//asigno o cargo la variable
	nombreIngresado = prompt("Ingrese su nombre", "Nicolas");
    
    //mostrar el valor de la variable
    alert("su nombre es "+nombreIngresado);

    alert("su nombre es");
    alert(nombreIngresado);*/