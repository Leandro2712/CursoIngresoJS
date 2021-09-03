//Autor Leandro Avalos Enunciado: parcial 2019 ejr05
function mostrar()
{
	var continente;
	var catidadDias
	var precioSinDescuento;
	var precioConDescuento;
	var formaPago;
	var porcentaje;
	var descuento;


	continente = document.getElementById("Marca").value;
	cantidadDias = prompt("Cantidad de dias a estar");
	formaPago = prompt("Elegir metodo de pago: debito , mercadoPago o efectivo");
	cantidadDias = parseInt(cantidadDias)
	precioSinDescuento = cantidadDias * 100

	switch(continente)
	{
		case "América": //50%
			switch(formaPago)
			{
				case "debito":
					porcentaje = -60;
					break;
				default:
					porcentaje = -50;
					break;
			}
		break;
		case "África": //60%
			switch(formaPago)
			{
				case "mercadoPago":
				case "efectivo":
					porcentaje = -75;
					break;
				default:
					porcentaje = -60;
			}
		break;
		case "Europa": //20%
			switch(formaPago)
			{
				case "debito":
					porcentaje = -35;
					break;
				case "mercadoPago":
					porcentaje = -30;
					break;
				default:
					porcentaje = -25;
					break;
			}
		break;
		default:
			porcentaje = 20;
			break;
	}


	descuento = precioSinDescuento * porcentaje / 100;
	precioConDescuento = precioSinDescuento + descuento;

	alert(precioConDescuento);





}

