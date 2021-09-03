
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	largo = prompt("Ingrese el largo");
	ancho = prompt("Ingrese el ancho");

	perimetro = (largo*2) + (ancho * 2);

	alert("El perimetro es "+perimetro);
}
