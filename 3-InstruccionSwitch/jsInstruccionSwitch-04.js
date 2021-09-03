//Autor: Leandro Avalos Enunciado:ejr04 Switch
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mensaje;

	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		mensaje = "Este mes tiene 30 dias";
		break;
		case "Febrero":
		mensaje = "Este mes tiene 28 dias";
		break;
		default:
		mensaje = "Este mes tiene 31 dias";
		break;
	}
	
	alert(mensaje);



}//FIN DE LA FUNCIÓN