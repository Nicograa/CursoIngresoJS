
function mostrar()
{  
	var largo;
	var ancho;
	var perimetro;

	largo=prompt("ingrese el largo");
	largo=parseInt(largo);

	

	ancho=prompt("ingrese el ancho");
	ancho=parseInt(ancho);

	perimetro=(ancho+largo)*2;
    

	
	alert("el perimetro del rectangulo es: "+perimetro);

}
