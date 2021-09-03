function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt("Ingrese el precio del producto");
	descuento = prompt("Ingrese el porcentaje de descuento");

	precioFinal = precio * descuento / 100;
	precioFinal = precio - precioFinal;

	document.getElementById("elPrecioFinal").value = precioFinal;
}
