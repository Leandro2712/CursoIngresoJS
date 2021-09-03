//Autor: Leandro Avalos Enunciado:ejr09 Switch
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var precio;
	var procentaje;
	var diferencia;
	var precioFinal;

	precio = 15000;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					procentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					procentaje = -10;
					break;
				case "Mar del plata":
					procentaje = -20;
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					procentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					procentaje = 10;
					break;
				case "Mar del plata":
					procentaje = 20;
					break;
			}
			break;

		default:
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					procentaje = 10;
					break;
				default:
					procentaje = 0;
					break;
			}
			break;
	}

	diferencia = precio * procentaje / 100;
	precioFinal = precio + diferencia;
	alert("El precio es "+precioFinal);
	
}//FIN DE LA FUNCIÓN