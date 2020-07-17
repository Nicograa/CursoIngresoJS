/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 

  var precioUno;
  var precioDos;
  var precioTres;
  var suma;

  precioUno=txtIdPrecioUno.value;
  precioUno=parseInt(precioUno);

  precioDos=txtIdPrecioDos.value;
  precioDos=parseInt(precioDos);

  precioTres=txtIdPrecioTres.value;
  precioTres=parseInt(precioTres);

  suma=precioUno+precioDos+precioTres;
  alert("la suma de los productos es: "+suma);
	
}
function Promedio () 
{
	var precioUno;
  var precioDos;
  var precioTres;
  var suma;
  var promedio;

  precioUno=txtIdPrecioUno.value;
  precioUno=parseInt(precioUno);

  precioDos=txtIdPrecioDos.value;
  precioDos=parseInt(precioDos);

  precioTres=txtIdPrecioTres.value;
  precioTres=parseInt(precioTres);

  suma=precioUno+precioDos+precioTres;
  promedio=suma/3;
  alert("el promedio de los productos es: "+promedio);
	
}
function PrecioFinal () 
{

  var precioUno;
  var precioDos;
  var precioTres;
  var suma;
  var porcentaje;
  var resultado;

  precioUno=txtIdPrecioUno.value;
  precioUno=parseInt(precioUno);

  precioDos=txtIdPrecioDos.value;
  precioDos=parseInt(precioDos);

  precioTres=txtIdPrecioTres.value;
  precioTres=parseInt(precioTres);

  suma=precioUno+precioDos+precioTres;

  porcentaje=suma*21/100;

  resultado=suma+porcentaje;

  alert("El pecio final de los productos es: "+resultado);
}