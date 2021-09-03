//Autor: Leandro Avalos Enunciado:ejr03 Switch
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mensaje;

	switch(mesDelAño)
	{
		case "Febrero":
		mensaje = "Este mes no tiene mas de 29 dias";
		break;
		default:
		mensaje = "Este mes tiene 30 o mas dias";
		break;
	}

	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN