//Autor:Leandro Avalos Enunciado:parcial01

function mostrar()
{
	var lado;
	var sumaLados;

	lado = prompt("Ingrese un lado del triangulo");
	lado = parseInt(lado);


	sumaLados = lado * 3;

	alert("El perimetro del triangulo es "+sumaLados)
}
