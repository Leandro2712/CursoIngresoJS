//Autor: Leandro Avalos  Enunciado:parcial 2019 ejr07 While Division A
/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/

function mostrar()
{
	var altura;
	var sexo;
	var contador;
	var alturasTotales;
	var promedio;
	var alturaMinima;
	var sexoMinimo;
	var altasChicas;

	contador = 0;
	alturasTotales = 0;
	altasChicas = 0;

	while(contador < 5)
	{
		//valido altura
		altura = prompt("Ingrese una altura entre 0 y 250 centimetros");
		altura = parseInt(altura);
		while(altura < 0 || altura > 250)
		{
			altura = prompt("Altura invalida. Ingrese una altura entre 0 y 250 centimetros");
			altura = parseInt(altura);
		}
		//sumo alturas
		alturasTotales = alturasTotales + altura;

		//valido sexo
		sexo = prompt("Por favor ingrese su sexo. M para Masculino y F para Femenino.")
		sexo = sexo.toUpperCase();
		
		while(sexo != "M" && sexo != "F")
		{
			sexo = prompt("Sexo invalido. Por favor ingrese M para Masculino y F para Femenino");
			sexo = sexo.toUpperCase();
		}

		//bandera para altura minima y sexo
		if(altura < alturaMinima || contador == 0)
		{
			alturaMinima = altura;
			sexoMinimo = sexo;
		}

		/*if(contador == 0)
		{
			alturaMinima = altura;
			sexoMinimo = sexo;
		}
		else
		{
			if(altura < alturaMinima)
			{
				alturaMinima = altura;
				sexoMinimo = sexo;
			}
		}*/

		// verifico si el sexo es femenino y supera los 190
		if(sexo == "F" && altura > 190)
		{
			altasChicas = altasChicas + 1;
		}

		contador = contador + 1;
	}
	//promedio alturas
	promedio = alturasTotales / contador;

	alert("El promedio de las alturas es: " + promedio + " centimetros." +
	" La altura mas baja es: " + alturaMinima + " centimetros " + " y el sexo de esa persona es: " + sexoMinimo +
	". La cantidad de mujeres que su altura superen los 190 centimetros es: "+ altasChicas);
}
