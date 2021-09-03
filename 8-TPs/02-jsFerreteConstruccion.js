/*
Autor: Leandro Avalos
Enunciado: Tp02
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var medidasTerreno;
	var resultado;

	largoTerreno = document.getElementById("txtIdLargo").value;
	anchoTerreno = document.getElementById("txtIdAncho").value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);
	medidasTerreno = (largoTerreno * 2) + (anchoTerreno * 2);
	resultado = medidasTerreno * 3;

	alert("se necesita comprar "+resultado+ " de alambre");

}
function Circulo () 
{
	var radio;
	var perimetro;
	var alambreTotal;

	radio = document.getElementById("txtIdRadio").value;
	radio = parseInt(radio);

	perimetro = 2 * 3.14 * radio;
	alambreTotal = perimetro * 3

	alert("se necesita comprar "+alambreTotal+ " de alambre");

}
function Materiales () 
{
	var largo;
	var ancho;
	var bolsaCal;
	var bolsaCemento;
	var area;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);

	area = largo * ancho;
	bolsaCemento = area * 2;
	bolsaCal = area * 3;

	alert("Se necesitan "+bolsaCemento+ " bolsas de cemento y "+bolsaCal+ " de cal");
}