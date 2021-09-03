/*
Autor: Leandro Avalos
Enunciado: Tp03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var celsius;
	var temperatura;

	temperatura = document.getElementById("txtIdTemperatura").value;
	temperatura = parseInt(temperatura);
	//fahrenheit = (temperatura * 1.8) +32;
	celsius = (temperatura - 32) / 1.8;

	alert(temperatura + " grados fahrenheit son "+celsius+ " grados celsius");



}

function CentigradosFahrenheit () 
{
	//var celsius;
	var fahrenheit;
	var temperatura;

	temperatura = document.getElementById("txtIdTemperatura").value;
	temperatura = parseInt(temperatura);
	fahrenheit = (temperatura * 1.8) +32;
	//fahrenheit = (temperatura - 32) / 1.8;

	alert(temperatura + " grados celsius son "+fahrenheit+ " grados fahrenheit");
}
