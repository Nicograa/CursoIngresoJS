/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
    
    

	precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value);

	precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value);

	precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value);

    suma = precioUno + precioDos + precioTres;

	alert("El resultado es "+ suma);
}

function Promedio () 
{
	
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio;
    
    

	precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value);

	precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value);

	precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value);

    suma = precioUno + precioDos + precioTres;

    promedio = suma / 3;

    promedio = promedio.toFixed(2);

	alert("El resultado es "+ promedio);
}


function PrecioFinal () 
{
	
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let iva;
	let importeFinal;
    
    

	precioUno = parseFloat(document.getElementById('txtIdPrecioUno').value);

	precioDos = parseFloat(document.getElementById('txtIdPrecioDos').value);

	precioTres = parseFloat(document.getElementById('txtIdPrecioTres').value);

    suma = precioUno + precioDos + precioTres;

    iva = suma * 21 /100;

    importeFinal = suma + iva;

    importeFinal = importeFinal.toFixed(2);

	alert("El resultado es "+ importeFinal);
}