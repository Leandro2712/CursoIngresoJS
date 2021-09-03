/*
Autor: Leandro Avalos
Enunciado: Tp01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	resultado = precioUno + precioDos + precioTres;

	alert("La suma de los tres pecios es "+resultado);


}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaPrecios;
	var promedio;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	sumaPrecios = precioUno + precioDos + precioTres;
	promedio = sumaPrecios / 3;

	alert("El promedio de los 3 es "+promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaPrecios;
	var iva;
	var precioFinal;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	sumaPrecios = precioUno + precioDos + precioTres;
	iva = sumaPrecios * 21 / 100;
	precioFinal = iva + sumaPrecios


	alert("El precio final es "+precioFinal);
}