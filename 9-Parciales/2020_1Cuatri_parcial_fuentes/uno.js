/*
		Debemos realizar la carga de 5(cinco) productos de prevención de contagio, 
			de cada una debo obtener los siguientes datos: 
			el tipo (validar "barbijo" , "jabón" o "alcohol") , 
			el precio (validar entre 100 y 300),
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
			 la Marca y el fabricante. 
			Se debe Informar al usuario lo siguiente:

			a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
			b) Del tipo con mas unidades, el promedio por compra 
			c) Cuántas unidades de jabones hay en total  */
function mostrar()
{
	var contador;
	var tipo;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var banderaPrimerAlcohol;
	var minimoAlcoholPrecio;
	var minimoAlcoholPrecioFabricante;
	var minimoAlcoholPrecioCantidad;
	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var promedioDeCompra;

	acumuladorBarbijo=0;
	acumuladorJabon=0;
	acumuladorAlcohol=0;
	contadorBarbijo=0;
	contadorAlcohol=0;
	contadorJabon=0;
	contador=0;
	banderaPrimerAlcohol="no paso";
	while(contador<5)
	{
		tipo=prompt("ingrese tipo");
		while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol")
		{
			tipo=prompt("Error ingrese tipo");
		}

		precio=prompt("ingrese precio");
		precio=parseInt(precio);
		while(precio<100 || precio>300)
		{
			precio=prompt("ERROR ingrese precio");
			precio=parseInt(precio);
		}

		cantidadUnidades=prompt("ingrese cantidad de Unidades");
		cantidadUnidades=parseInt(cantidadUnidades);
		while(cantidadUnidades<0 || cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("ERROR ingrese cantidad de Unidades");
			cantidadUnidades=parseInt(cantidadUnidades);
		}

		marca=prompt("ingrese su marca");
		fabricante=prompt("ingrese su fabricante");

		if(tipo=="alcohol")
		{
			if(banderaPrimerAlcohol=="no paso")
			{
				banderaPrimerAlcohol="ya paso por aca";
				minimoAlcoholPrecio=precio;
				minimoAlcoholPrecioCantidad=cantidadUnidades;
				minimoAlcoholPrecioFabricante=fabricante;
			}else
			{
				if(precio<minimoAlcoholPrecio)
				{
					minimoAlcoholPrecio=precio;
					minimoAlcoholPrecioCantidad=cantidadUnidades;
					minimoAlcoholPrecioFabricante=fabricante;
				}
			}
		}
		switch(tipo)
		{
			case barbijo:
				contadorBarbijo++;
				acumuladorBarbijo=acumuladorBarbijo+cantidadUnidades;
				break;
			case jabón:
				contadorJabon++;
				acumuladorJabon=acumuladorJabon+cantidadUnidades;
				break;
			case alcohol:
				contadorAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+cantidadUnidades;
				break;
		}





		contador=contador+1


	}


	//sacar el que tiene mas unidades
	if(acumuladorAlcohol>acumuladorJabon && acumuladorAlcohol>acumuladorBarbijo)
	{
		//alcohol
		promedioDeCompra=acumuladorAlcohol/contadorAlcohol;
	}else
	{
		if(acumuladorJabon>acumuladorBarbijo)
		{
			//acumuladorJabon
			promedioDeCompra=acumuladorJabon/contadorJabon;
		}else
		{
			//acumuladorBarbijo
			promedioDeCompra=acumuladorBarbijo/acumuladorBarbijo;
		}
	}


 
document.write("cantidad unidades de alcohol mas barato "+minimoAlcoholPrecioCantidad );
document.write("<br>fabricante del alcohol mas barato "+minimoAlcoholPrecioFabricante); 
document.write("<br>promedio de compra del tipo con mas unidades "+promedioDeCompra);
document.write("<br>la cantidad de unidades de jabon es "+acumuladorJabon); 


}




