//Autor: Leandro Sebastian Avalos Division: A 
/*Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario
*/
function mostrar()
{
	var nombre;
	var edad;
	var genero;
	var vacuna;
	var temperatura;
	var condicion;
	var banderaPrimerIngreso;
	var nombreMasTemperatura;
	var temperaturaMayor;
	var vacunaMayorTemperatura;
	var contadorFemeninoSputnikv;
	var contadorNbDistintaVacuna;
	var contadorAstrazenecaFiebre;
	var acumuladorEdadHombre;
	var contadorHombre;
	var promedioHombresSinFiebre;
	var contadorPersonasAstrazeneca;
	var contadorVacunadosTotales;
	var porcentajePersonasAstrazeneca;
	var contadorSputnikvTotales;
	var contadorOtraTotales;
	var vacunaMasAplicada;
	var acumuladorEdadSputnikv;
	var acumuladorEdadAstrazeneca;
	var acumuladorEdadOtra;
	var promedioEdadSputnikv;
	var promedioEdadAstrazeneca;
	var promedioEdadOtra;
	var contadorGeneroMasculino;
	var contadorGeneroFemenino;
	var contadorGeneroNb;
	var porcentajeGeneroMasculino;
	var porcentajeGeneroFemenino;
	var porcentajeGeneroNb;
	var mensaje;


	condicion = "si";
	banderaPrimerIngreso = 0;
	contadorFemeninoSputnikv = 0;
	contadorNbDistintaVacuna = 0;
	contadorAstrazenecaFiebre = 0;
	acumuladorEdadHombre = 0;
	contadorHombre = 0;
	contadorPersonasAstrazeneca = 0;
	contadorVacunadosTotales = 0;
	contadorSputnikvTotales = 0;
	contadorOtraTotales = 0;
	acumuladorEdadSputnikv = 0;
	acumuladorEdadAstrazeneca = 0;
	acumuladorEdadOtra = 0;
	contadorGeneroMasculino = 0;
	contadorGeneroFemenino = 0;
	contadorGeneroNb = 0;


	while(condicion == "si")
	{
		nombre = prompt("Ingrese su nombre");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		genero = prompt("Ingrese su genero. F, M , NB");
		while(genero != "F" && genero != "M" && genero != "NB")
		{
			genero = prompt("Error. Ingrese su genero nuevamente");
		}

		vacuna = prompt("Ingrese su vacuna. sputnikv , astrazeneca , otra");
		while(vacuna != "sputnikv" && vacuna != "astrazeneca" && vacuna != "otra")
		{
			vacuna = prompt("Error.Ingrese su vacuna nuevamente");
		}

		temperatura = prompt("Ingrese su temperatura")
		temperatura = parseInt(temperatura);

		//a) El nombre y vacuna de la persona con mayor temperatura.

		if(temperatura > temperaturaMayor || banderaPrimerIngreso == 0)
		{
			temperaturaMayor = temperatura;
			nombreMasTemperatura = nombre;
			vacunaMayorTemperatura = vacuna;
			banderaPrimerIngreso = 1;
		}

		switch(genero)
		{
			case "F":
				if(vacuna == "sputnikv")
				{
					contadorFemeninoSputnikv++
				}
				contadorGeneroFemenino++
				break;
			case "M":
				if(temperatura < 38 && vacuna == "sputnikv")
				{
					acumuladorEdadHombre += edad;
					contadorHombre++
				}
				contadorGeneroMasculino++
				break;
			case "NB":
				if(vacuna == "astrazeneca" || vacuna == "otra")
				{
					contadorNbDistintaVacuna++
				}
				contadorGeneroNb++
				break;
		}

		switch(vacuna)
		{
			case "sputnikv":
				acumuladorEdadSputnikv += edad;
				contadorSputnikvTotales++
				break;
			case "astrazeneca":
				if(temperatura > 38)
				{
					contadorAstrazenecaFiebre++
				}
				acumuladorEdadAstrazeneca += edad;
				contadorPersonasAstrazeneca++
				break;
			case "otra":
				acumuladorEdadOtra += edad;
				contadorOtraTotales++
				break;
		}

		contadorVacunadosTotales++

		condicion = prompt("Desea continuar");

	}

	porcentajePersonasAstrazeneca = contadorPersonasAstrazeneca * 100 / contadorVacunadosTotales;
	porcentajeGeneroMasculino = contadorGeneroMasculino * 100 / contadorVacunadosTotales;
	porcentajeGeneroFemenino = contadorGeneroFemenino * 100 / contadorVacunadosTotales;
	porcentajeGeneroNb = contadorGeneroNb * 100 / contadorVacunadosTotales;
	promedioHombresSinFiebre = acumuladorEdadHombre / contadorHombre;
	promedioEdadSputnikv = acumuladorEdadSputnikv / contadorSputnikvTotales;
	promedioEdadAstrazeneca = acumuladorEdadAstrazeneca / contadorPersonasAstrazeneca;
	promedioEdadOtra = acumuladorEdadOtra / contadorOtraTotales; 

	if(contadorSputnikvTotales > contadorPersonasAstrazeneca && contadorSputnikvTotales > contadorOtraTotales)
	{
		vacunaMasAplicada = "sputnikv";
	}
	else
	{
		if(contadorPersonasAstrazeneca > contadorSputnikvTotales)
		{
			vacunaMasAplicada = "astrazeneca";
		}
		else
		{
			vacunaMasAplicada = "otra";
		}
	}

	if(contadorHombre == 0)
	{
		mensaje = "El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos) es: No se pudo calcular";
	}
	else
	{
		mensaje = "<br>El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos) es: " + promedioHombresSinFiebre;
	}

	if(contadorSputnikvTotales == 0)
	{
		mensaje += "<br>El promedio de edad de los que se dieron sputnikv es: No se pudo calcular";
	}
	else
	{
		mensaje += "<br>El promedio de edad de los que se dieron sputnikv es: " + promedioEdadSputnikv;
	}

	if(contadorPersonasAstrazeneca == 0)
	{
		mensaje += "<br>El promedio de edad de los que se dieron astrazeneca es: No se pudo calcular";
	}
	else
	{
		mensaje += "<br>El promedio de edad de los que se dieron astrazeneca es: " + promedioEdadAstrazeneca;
	}

	if(contadorOtraTotales == 0)
	{
		mensaje += "<br>El promedio de edad de los que se dieron otra es: No se pudo calcular";
	}
	else
	{
		mensaje += "<br>El promedio de edad de los que se dieron otra es: " + promedioEdadOtra;
	}

	mensaje += "<br>El nombre y vacuna de la persona con mayor temperatura es: " + nombreMasTemperatura + " " + vacunaMayorTemperatura;
	mensaje += "<br>La cantidad de personas de género Femenino recibieron la vacuna SputnikV es: " + contadorFemeninoSputnikv;
	mensaje += "<br>La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra es: " + contadorNbDistintaVacuna;
	mensaje += "<br>La cantidad de personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38° es: " + contadorAstrazenecaFiebre;
	mensaje += "<br>El Porcentaje de personas que se aplicaron Aztrazeneca es: " + porcentajePersonasAstrazeneca;
	mensaje += "<br>La vacuna mas aplicada es: " + vacunaMasAplicada;
	mensaje += "<br>El porcentaje de personas de cada genero es: " + porcentajeGeneroMasculino + " % " + porcentajeGeneroFemenino + " % " + porcentajeGeneroNb + " % ";

	document.write(mensaje);

}
