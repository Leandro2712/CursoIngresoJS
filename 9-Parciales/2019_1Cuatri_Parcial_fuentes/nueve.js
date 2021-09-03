//Autor: Leandro Avalos  Enunciado:parcial 2019 ejr09 While
function mostrar()
{
	var paisIngresado;
	var habitantesIngresados;
	var temperatura;
	var condicion;
	var temperaturaPar;
	var habitantesMinimo;
	var paisMinimo;
	var contador;
	var contadorTemperatura;
	var habitantesTotales;
	var promedioHabitantes;
	var minimaTemperatura;
	var paisMinimaTemperatura;


	condicion = "si";
	temperaturaPar = 0;
	contador = 0;
	contadorTemperatura = 0;
	promedioHabitantes = 0;
	habitantesTotales = 0;

	while(condicion == "si")
	{
		paisIngresado = prompt("Por favor ingrese un pais");
		habitantesIngresados = prompt("Por favor ingrese un numero de habitantes 1 y 7000 millones");
		habitantesIngresados = parseInt(habitantesIngresados);

		while(habitantesIngresados < 1 || habitantesIngresados > 7000)
		{
			habitantesIngresados = prompt("Cantidad invalida. Por favor ingrese un numero entre 1 y 7000");
			habitantesIngresados = parseInt(habitantesIngresados);
		}
		//Punto D
		habitantesTotales = habitantesTotales + habitantesIngresados;

		temperatura = prompt("Por favor ingrese una temperatura entre -50 y 50");
		temperatura = parseInt(temperatura);
		while(temperatura < -50 || temperatura > 50)
		{
			temperatura = prompt("Temperatura invalida. Por favor ingrese una temperatura entre -50 y 50");
			temperatura = parseInt(temperatura);
		}
		//Punto A
		if((temperatura % 2) == 0)
		{
			temperaturaPar = temperaturaPar +1;
		}
		//Punto B y F
		//Bandera de menos lineas
		if(habitantesIngresados < habitantesMinimo || contador == 0)
		{
			habitantesMinimo = habitantesIngresados;
			paisMinimo = paisIngresado;
		}

		if(temperatura < minimaTemperatura || contador == 0)
		{
			minimaTemperatura = temperatura;
			paisMinimaTemperatura = paisIngresado;
		}

		//bandera con contador mas lineas
		/*if(contador == 0)
		{
			paisMinimo = paisIngresado;
			habitantesMinimo = habitantesIngresados;
			minimaTemperatura = temperatura;
			paisMinimaTemperatura = paisIngresado;
		}
		else
		{
			if(habitantesIngresados < habitantesMinimo)
			{
				paisMinimo = paisIngresado;
				habitantesMinimo = habitantesIngresados;
			}

			if(temperatura < minimaTemperatura)
			{
				minimaTemperatura = temperatura;
				paisMinimaTemperatura = paisIngresado;
			}
		}*/
		//Punto C
		if(temperatura > 40)
		{
			contadorTemperatura = contadorTemperatura + 1;
		}

		contador = contador + 1
		condicion = prompt("Desea ingresar otro pais, cantidad de habitantes y temperatura?");

	}
	//Punto D
	promedioHabitantes = habitantesTotales / contador;


	document.write(
		"La cantidad de temperatura pares es: " + temperaturaPar +
		"<br>El nombre del pais con menos habitantes es: " + paisMinimo +
		"<br>La cantidad de paises que superan los 40 grados es: " + contadorTemperatura +
		"<br>El promedio de habitantes ingresados es: " + promedioHabitantes +
		"<br>La temperatura minima ingresada y el nombre del pais que registro esa temperatura es: " + minimaTemperatura + " " + paisMinimaTemperatura)

}
