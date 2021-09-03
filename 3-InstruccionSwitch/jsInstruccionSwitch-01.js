//Autor: Leandro Avalos Enunciado:ejr01 Switch
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mensaje;
	mensaje = "";

	switch(mesDelAño)
	{
		case "Enero":
		mensaje = "Que comiences bien el año!!!";
		break;
		case "Marzo":
		mensaje = "A clases!!!";
		break;
		case "Julio":
		mensaje = "Se vienen las vacaciones!!!";
		break;
		case "Diciembre":
		mensaje = "Felices fiestas!!!";
		break;

	}

	if(mensaje != "")
	{
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN