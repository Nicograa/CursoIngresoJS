/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoIngresado;
 	var numeroLegajo;
 	var nacionalidad;

 	//EDAD
 	edadIngresada=prompt("Ingrese su edad");
 	
	while(edadIngresada<18 || edadIngresada>90)
 	{
 		edadIngresada=prompt("Ingrese su edad");

 	}

 	//SEXO
 	sexoIngresado=prompt("ingrese su sexo");
	
	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado = prompt("ingrese f ó m .");		
	}	

	//ESTADO CIVIL
	estadoCivilIngresado=prompt("ingrese su estado civil");

	while(estadoCivilIngresado<0 || estadoCivilIngresado>4)
	{
		estadoCivilIngresado=prompt("ingrese su estado civil");
	}

	//SUELDO

	sueldoIngresado=prompt("Ingrese sueldo bruto");
	while(sueldoIngresado<8000)
	{
		sueldoIngresado=prompt("Ingrese sueldo bruto");
	}

	//NUMERO LEGAJO 4 CIFRAS 

	numeroLegajo=prompt("Ingrese su numero de legajo");
	while(numeroLegajo<1000 || numeroLegajo>9999)
	{
		numeroLegajo=prompt("Ingrese su numero de legajo");
	}

	//NACIONALIDAD 

	nacionalidad=prompt("Ingrese Nacionalidad: “a” para argentinos, “e” para extranjeros, “n” para nacionalizados.");
	while(nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n")
	{
		nacionalidad=prompt("Ingrese Nacionalidad: “a” para argentinos, “e” para extranjeros, “n” para nacionalizados.");
	}

	txtIdEdad.value=edadIngresada;
	txtIdSexo.value=sexoIngresado;
	txtIdEstadoCivil.value=estadoCivilIngresado;
	txtIdSueldo.value=sueldoIngresado;
	txtIdLegajo.value=numeroLegajo;
	txtIdNacionalidad.value=nacionalidad;
}
