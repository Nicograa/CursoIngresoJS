function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado=txtIdDestino.value;
	var estadia;
	var aumento;
	var aumentoFinal;
	var descuento;
	var descuentoFinal
	var precioFinal;		

	
	switch(estacionIngresada)
	{
		case("Invierno"):
				
					switch(destinoIngresado)
					{
					
						case("Bariloche"):
							aumento=20;
							break;
						case("Mar del plata"):
							descuento=20;
							break;
						case("Cordoba"):
						case("Cataratas"):
							descuento=10;
							break;
					}		
			break;		
			
		case("Verano"):
			
					switch(destinoIngresado)
					{
						case("Bariloche"):
							descuento=20;
							break;
						case("Mar del plata"):
							aumento=20;
							break;
						case("Cordoba"):
						case("Cataratas"):
							aumento=10;
							break;
					}
			break;

		case("Otoño"):
		case("Primavera"):
		
					switch(destinoIngresado)
					{
						case("Bariloche"):
						case("Cordoba"):
						case("Mar del plata"):
							aumento=10;
							break;
					}	
			break;

	} 
		
	estadia=15000;
	aumentoFinal=estadia*aumento/100+estadia;
	descuentoFinal=(estadia)-(estadia*descuento/100);

	precioFinal=

		
			
		

	alert("El precio final es: "+precioFinal);















/*	switch(destinoIngresado)
	{
		case("Bariloche"):{
				switch(estacionIngresada)
				{
					case("Invierno"):
						aumento=20;
						break;
					case("Verano"):
						descuento=20;
						break;
					case("Otoño"):
					case("Primavera"):
						aumento=10;
						break;
				}
		}
				
		case("Cataratas"):{
				switch(estacionIngresada)
					{
						case("Invierno"):
							descuento=10;
							break;
						case("Verano"):
							aumento=10;
							break;
						case("Otoño"):
						case("Primavera"):
							aumento=10;
							break;
					}		
		}		
		case("Mar del plata"):{
				
				switch(estacionIngresada)
					{
						case("Invierno"):
							descuento=20;
							break;
						case("Verano"):
							aumento=20;
							break;
						case("Otoño"):
						case("Primavera"):
							aumento=10
							break;
					}
		}						
		case("Cordoba"):{
				
				switch(estacionIngresada)
					{
						case("Invierno"):
							descuento=10
							break;
						case("Verano"):
							aumento=10
							break;
						case("Otoño"):
						case("Primavera"):
							break;
					}
		}		

	}

	aumentoFinal=estadia*aumento/100+estadia;
	descuentoFinal=(estadia)-(estadia*descuento/100);
	precioFinal=aumentoFinal;
	precioFinal=descuentoFinal;

	alert("el precio final es "+precioFinal);
	*/
	

	
	




	


}//FIN DE LA FUNCIÓN