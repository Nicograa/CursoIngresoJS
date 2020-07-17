/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    /*var sueldo;
    var aumento;
    var resultado;
 var porcentaje;
   porcentaje= prompt("ingrese %");
   porcentaje= parseInt(porcentaje);
   aumento=sueldo*porcentaje/100 
    sueldo=txtIdSueldo.value;
    sueldo=parseInt(sueldo);

    aumento=(sueldo*10)/100;

    resultado=txtIdResultado;
    resultado=parseInt(resultado);

    resultado=sueldo+aumento;
    txtIdResultado.value=resultado;*/

    var importe;
    var porcentaje;
    var descuento;
    var resultado;

    
    importe=prompt("ingrese importe");
    importe=parseInt(importe);

    porcentaje=prompt("ingrese %");
    porcentaje=parseInt(porcentaje);
    

    descuento=(importe*porcentaje)/100;

    resultado=importe-descuento;


    alert("el importe es: $" +importe+ " el total de descuento es: $"+descuento+ " y el precio final es: $"+resultado+ " gracias por su compra");







    

    



	
}
