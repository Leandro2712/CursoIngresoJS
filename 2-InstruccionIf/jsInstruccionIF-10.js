//Autor: Leandro Avalos Enunciado:ejr 10 IF
function mostrar()
{
	/*var aleatorio;
	aleatorio = Math.floor(Math.random() * 10) + 1;

	if(aleatorio >= 9)
	{
		alert("Tu nota es " + aleatorio + " Excelente");
	}
	else if (aleatorio > 4 && aleatorio < 9)
	{
		alert("Tu nota es " + aleatorio + " Aprobo");
	}
	else
	{
		alert("tu nota es " + aleatorio + " Vamos, la proxima se puede");
	}*/

	var aleatorio;
	var mensaje;
	aleatorio = Math.floor(Math.random() * 10) + 1;

	if(aleatorio > 8)
	{
		mensaje = "Tu nota es " + aleatorio + " Excelente";
	}
	else
	{
		if (aleatorio < 4)
		{	
			mensaje = "Tu nota es " + aleatorio + " Vamos, la proxima se puede";
		}
		
	    else
	    {
	    	mensaje = "Tu nota es " + aleatorio + " Aprobo";
	    }

	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN