/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var Descuento;
	var resultado;
   
    importe=txtIdImporte.value;
    importe=parseInt(importe);

    Descuento=importe*0.25;

    resultado=txtIdResultado;
    resultado=parseInt(resultado);

    resultado=importe-Descuento;

    txtIdResultado.value=resultado;





}
