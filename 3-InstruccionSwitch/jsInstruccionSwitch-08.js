//Autor: Leandro Avalos Enunciado:ejr08 Switch
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
		mensaje = "Frio";
		break;
		case "Cataratas":
		mensaje = "Calor";
		break;
		case "Mar del plata":
		mensaje = "Calor";
		break;
		case "Ushuaia":
		mensaje = "Frio";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN