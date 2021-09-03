//Autor: Leandro Avalos Enunciado:ejr02 Switch
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mensaje;

	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		mensaje = "Falta para el invierno";
		break;
		case "Julio":
		case "Agosto":
		mensaje = "Abrigate que hace frio";
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		mensaje = "Ya pasamos el frio. Ahora el calor!!!";
		break;
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN