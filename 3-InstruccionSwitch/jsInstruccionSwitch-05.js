//Autor: Leandro Avalos Enunciado:ejr05 Switch
function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	horaDelDia = parseInt(horaDelDia);
	var mensaje;

	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		mensaje = "Es de mañana";
		break;
		default:
		mensaje = "No es de mañana";
		break;
	}

	alert(mensaje);
	



}//FIN DE LA FUNCIÓN