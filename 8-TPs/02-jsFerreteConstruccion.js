/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo=txtIdLargo.value;
    largo=parseInt(largo);

    ancho=txtIdAncho.value;
    ancho=parseInt(ancho);

    perimetro=(largo+ancho)*2;

    alambre=perimetro*3;


    alert("Se debe comprar: "+alambre+ "m de alambre");





}
function Circulo () 
{
	var radio;
	var perimetroCirculo;
	var alambre;

	radio=txtIdRadio.value;
	radio=parseInt(radio);

	perimetroCirculo=(radio*2)*3.14;
	

	alambre=perimetroCirculo*3;
	

	alert("se debe comprar: "+alambre+"m de alambre");



	
}
function Materiales () 
{ 
	var bolsaCemento;
	var bolsaCal;
	var largo;
	var ancho;
	var perimetro;
	

    largo=txtIdLargo.value;
    largo=parseInt(largo);

    ancho=txtIdAncho.value;
    ancho=parseInt(ancho);

    perimetro=(largo+ancho)*2;

    bolsaCemento=perimetro*2;
    bolsaCal=perimetro*3;

    


    alert("se necesitan: "+bolsaCemento+" bolsas de cemento y "+bolsaCal+" bolsas de cal");







	
}