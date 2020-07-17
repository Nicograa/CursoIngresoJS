function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;

	precio=prompt("indique el precio");
	precio=parseInt(precio);

    porcentaje=prompt("indique el descuento");
	porcentaje=precio*porcentaje/100;
	porcentaje=parseInt(porcentaje);

	precioFinal=precio-porcentaje;
	precioFinal=parseInt(precioFinal);

	elPrecioFinal.value=precioFinal;
	

}
