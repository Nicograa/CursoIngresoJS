function mostrar()
{
}function mostrar()
{
	var respuesta;

	respuesta="s";
	while(respuesta=="s")
	{
		respuesta=prompt("seguir?");
	}

	//no recomendable...
	for(respuesta="s";respuesta=="s";respuesta=prompt("seguir?"))
	{

	}


	var i;
	
	for(i=0;i<10;i++)
	{
		console.log("vuelta :"+i);
	}



	/*
	contador=0;//1era parte
	while(contador<10)//2da parte 
	{
		console.log("vuelta :"+contador);
		contador++;//3era parte modificar la condicion
	}
	*/
		//1-ingreasa  //2 y 5-evalua  //4- suma contador
	/*
	contador=0;
	for(;;)
	{
		if(contador==10)
		{
			break;
		}
		console.log("vuelta :"+contador);
		contador++;
	}
	*/
	console.log("el contador termino con: "+contador);
}
	