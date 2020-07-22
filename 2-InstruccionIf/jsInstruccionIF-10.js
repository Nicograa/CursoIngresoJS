function mostrar()
{
	var numeroRandom;

	numeroRandom=Math.floor(Math.random() * 10) + 1;
	


	if(numeroRandom>9)
	{
		alert("EXCELENTE");
	}else
		if(numeroRandom>4)
		{
			alert("APROBO");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}









}//FIN DE LA FUNCIÓN