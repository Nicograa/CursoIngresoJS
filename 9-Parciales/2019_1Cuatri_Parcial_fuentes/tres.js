function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("indique el precio");
	precio=parseInt(precio);

	descuento=prompt("indique el descuento");
	descuento=precio*descuento/100;
	descuento=parseInt(descuento);

	precioFinal=precio-descuento;
	precioFinal=parseInt(precioFinal);

	elPrecioFinal.value=precioFinal;
	




}
