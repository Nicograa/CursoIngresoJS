/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var nombreIngresado;
	var sexoIngresado;
	var alturaIngresada;
	var edadIngresada;
	var contador;
	var respuesta;
	var mujerMasAlta;
	var nombreMujerMasAlta;
	var hombreMasViejo;
	var nombreAdolescente;
	var edadHombreMasViejo;
	var banderaDelPrimerAdolescente;
	var banderaMujerMasAlta;
	var banderaNombreMasviejo;

	
	respuesta="si";
	banderaMujerMasAlta=true;
	banderaNombreMasviejo=true;
	banderaDelPrimerAdolescente=true;

	while(respuesta=="si")
	{	
		//nombre ingresado
		nombreIngresado=prompt("Ingrese su nombre");
		
		//sexo ingresado
		sexoIngresado=prompt("ingrese su sexo (f o m)");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error reingrese su sexo (f o m)");
		}

		//edad ingresada
		edadIngresada=prompt("ingrese su edad");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<0 || edadIngresada>120)
		{
			edadIngresada=prompt("Error reingrese su edad");
			edadIngresada=parseInt(edadIngresada);
		}
	

		//altura ingresada
		alturaIngresada=prompt("ingrese su altura");
		alturaIngresada=parseInt(alturaIngresada);

		
		if(sexoIngresado=="f")
		{
			if(banderaMujerMasAlta==true)
			{
				banderaMujerMasAlta=false;
				mujerMasAlta=alturaIngresada;
				nombreMujerMasAlta=nombreIngresado;
			}else
				{
					if(alturaIngresada>mujerMasAlta)
					{
						mujerMasAlta=alturaIngresada;
						nombreMujerMasAlta=nombreIngresado;
					}
				}
		}else
			{	
				if(banderaNombreMasviejo==true)
				{
					banderaNombreMasviejo=false;
					hombreMasViejo=nombreIngresado;
					edadHombreMasViejo=edadIngresada;
				}else
					{
						if(edadIngresada>edadHombreMasViejo)
						{
							hombreMasViejo=nombreIngresado;
							edadHombreMasViejo=edadIngresada;
						}
					}
			}
		
		if(edadIngresada>13 || edadIngresada<18)
		{
			if(banderaDelPrimerAdolescente==true)
			{	
				banderaDelPrimerAdolescente=false;
				nombreAdolescente=nombreIngresado;
			}
		}



		
		respuesta=prompt("desea continuar?");
	}

	
	if(banderaMujerMasAlta!=true)
	{ 
		document.write("La mujer mas alta es "+nombreMujerMasAlta);
	}else
	{
		document.write("<br>no hay mujeres");
	}

	if(banderaNombreMasviejo!=true)
	{
		document.write("<br>El nombre del hombre mas viejo es: "+hombreMasViejo);
	}else
	{
		document.write("<br>No hay hombres");
	}

	if(banderaDelPrimerAdolescente!=true)
	{
		document.write("<br>El nombre del primer adolescente es: "+nombreAdolescente);
	}else
	{
		document.write("<br>No hay adolescentes")
	}	


	







}


/*var numero

	numero=0;

	while(numero<10)
	{
		numero=numero+1;
		alert(numero);
	}*/





	/*var numero;

	numero=0;//1era parte inicializacion de variabe
	while(numero<10)//2da Parte logica crrecta
	{
		
		numero=numero+1;//3era modificar elvalor parala logica
		console.log(numero);
	}*/	

/*
	var numero;

	numero=300;//1era parte inicializacion de variabe
	while(numero>0)//2da Parte logica correcta
	{
		console.log(numero);
		numero=numero+1;//3era modificar elvalor parala logica
		//o
		numero++;
		//este nunca
		numero=numero++;//mal

		numero=numero-1;
		//o
		numero--;
		//este nunca
		numero= numero--;//mal
	}	

*/

	/*
	var ingresoClave;

	while(ingresoClave!="clavesecreta")
	{
		alert("error");
		ingresoClave=prompt("ingrese la clave secreta");
	}
	alert("bienvenido");
*/
/*
{
	var numero;

	numero=0;//1era parte inicializacion de variabe
	while(numero<4)//2da Parte logica correcta
	{
		document.write("<br>"+numero);
		numero=numero+1;//3era modificar elvalor parala logica
	}

	// cuanto vale numero aqui?	
	document.write("<br>"+ numero); */

