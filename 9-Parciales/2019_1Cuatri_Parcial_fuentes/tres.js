//Autor: Leandro Avalos Enunciado:parcial03
function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt("Ingrese el precio del producto");
	precio = parseInt(precio);
	descuento = prompt("Ingrese el porcentaje de descuento");
	descuento = parseInt(descuento);

	precioFinal = precio * descuento / 100;
	precioFinal = precio - precioFinal

	document.getElementById("elPrecioFinal").value = precioFinal;
}
