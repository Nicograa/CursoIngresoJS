/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadLamparas;
	var precioLamparas;
	var marcaLamparas;
	var descuento;
	var descuentoFinal;
	var ingresoBruto;
	var impuesto;
	var precioFinal;

	cantidadLamparas=txtIdCantidad.value;
	cantidadLamparas=parseInt(cantidadLamparas);

	marcaLamparas=Marca.value;
	precioLamparas=cantidadLamparas*35;

	

	switch(cantidadLamparas)
	{	
		case 1:
		case 2:
			descuento=0;
			break;
		case 3:
			cantidadLamparas=3;
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					descuento=15;
					break;
				case "FelipeLamparas":
					descuento=10;
					break;
				default:
					descuento=5;
					break;		
			}
			break;
		case 4:
			cantidadLamparas=4;
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					descuento=25;
					break;
				default:
					descuento=20;
					break;	
			}
			break;
		case 5:
			cantidadLamparas=5;
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					descuento=40;
					break;
				default:
					descuento=30;
					break;		
			}
			break;
		default:
			descuento=50;
			break;



	}
	descuentoFinal=precioLamparas*descuento/100
	precioFinal=precioLamparas-descuentoFinal;
    txtIdprecioDescuento.value=precioFinal;
	
	if(precioFinal>119)
	{
		impuesto=precioFinal*10/100;
		ingresoBruto=precioFinal+impuesto;
		alert("IIBB Usted pago= "+ingresoBruto);
	}
	

	










	































}

	/*	if (cantidadLamparas>5)
		{
			descuento=50;
		} else 
			{
				if (cantidadLamparas==5)
				{
					if(marcaLamparas=="ArgentinaLuz")
					{
						descuento=40;
					} else
						{
							descuento=30;
						}
				}else
					{
						if (cantidadLamparas==4)
						{
							if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas" )
							{
								descuento=25;
							}else
								{
									descuento=20;
								}
						}else
							{
								if(cantidadLamparas==3)
								{
									descuento=5;
								} 
									if (marcaLamparas=="ArgentinaLuz") 
									{
										descuento=15;
									} else
										{
											if(marcaLamparas=="FelipeLamparas")
											{
												descuento=10;
											}
										}

							} 
					}
			}
		
		


	precioLamparas=cantidadLamparas*35;
	descuento=precioLamparas*descuento/100
	precioFinal=precioLamparas-descuento;
    txtIdprecioDescuento.value=precioFinal;

    if(precioFinal>119)
	{
		impuesto=precioFinal*10/100;
		ingresoBruto=precioFinal+impuesto;
		alert("IIBB Usted pago= "+ingresoBruto);
	}
		*/
		
		


 	

