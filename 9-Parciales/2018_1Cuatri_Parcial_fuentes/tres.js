function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var precioFinal;

	precio=prompt("ingrese el precio");
	precio=parseInt(precio);

	porcentaje=prompt("ingrese el descuento");
	porcentaje=precio*porcentaje/100;
	porcentaje=parseInt(porcentaje);

	descuento=precio-porcentaje;
	descuento=parseInt(descuento);

	precioFinal=elPrecioFinal.value;

	elPrecioFinal.value=descuento;








}
