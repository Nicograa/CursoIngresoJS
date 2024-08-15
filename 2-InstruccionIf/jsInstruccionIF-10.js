function mostrar()
{
	let nota;
	
	
	nota = Math.round(Math.random() * 9 + 1);

	 if(nota >8)
	 {
	 	alert("EXCELENTE nota: " + nota);
	 }
	 else
	 	{
	 		if (nota <=8 && nota >=4) 
	 		{
	 			alert("APROBO nota: "+ nota);
	 		}
	 		else
	 			alert("Vamos, la proxima se puede nota: " +nota);
	 	}


}