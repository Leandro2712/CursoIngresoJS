//Autor: Leandro Avalos Enunciado:ejr10 Switch
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destinoIngresado)
		{
			case "Bariloche":
			mensaje = "Se viaja";
			break;
			default:
			mensaje = "No se viaja";
			break;
		}
		break;

		case "Verano":
		switch(destinoIngresado)
		{
			case "Mar del plata":
			case "Cataratas":
			mensaje = "Se viaja";
			break;
			default:
			mensaje = "No se viaja";
			break;
		}
		break;

		case "Otoño":
		switch(destinoIngresado)
		{
			case "Bariloche":
			case "Mar del plata":
			case "Cataratas":
			case "Cordoba":
			mensaje = "Se viaja";
			break;
		}
		break;

		case "Primavera":
		switch(destinoIngresado)
		{
			case "Bariloche":
			mensaje = "No se viaja";
			break;
			default:
			mensaje = "Se viaja";
			break;
		}
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN