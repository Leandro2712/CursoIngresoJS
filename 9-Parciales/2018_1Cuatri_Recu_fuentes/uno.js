/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota/*/
function mostrar()
{
	var tipoCursada;
	var nombre;
	var cantidadMaterias;
	var sexo;
	var notaPromedio;
	var edad;
	var condicion;
	var banderaPrimerIngreso;
	var mejorNombre;
	var mejorNotaPromedio;
	var edadMasJoven;
	var nombreMasJoven;
	var banderaSegundoIngreso;
	var acumuladorMasculino;
	var contadorMasculino;
	var acumuladorFemenino;
	var contadorFemenino;
	var acumuladorNoBinario;
	var contadorNoBinario;
	var promedioFemenino;
	var promedioMasculino;
	var promedioNoBinario;
	var banderaTercerIngreso;
	var cantidadMateriasNoRemoto;
	var edadNoRemoto;
	var nombreNoRemoto;

	condicion = "si";
	banderaPrimerIngreso = 0;
	banderaSegundoIngreso = 0;
	banderaTercerIngreso = 0;
	acumuladorMasculino = 0;
	contadorMasculino = 0;
	acumuladorFemenino = 0;
	contadorFemenino = 0;
	acumuladorNoBinario = 0;
	contadorNoBinario = 0;
	promedioFemenino = 0;
	promedioMasculino = 0;
	promedioNoBinario = 0;

	while(condicion == "si")
	{
		nombre = prompt("Ingrese su nombre");

		tipoCursada = prompt("Ingrese tipo de cursada. libre, presencial o remota")
		while(tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota")
		{
			tipoCursada = prompt("Error. Ingrese la cursada nuevamente");
		}

		cantidadMaterias = prompt("Ingrese la cantidad de materias. Mas de 0 menos de 8");
		cantidadMaterias = parseInt(cantidadMaterias);

		while(cantidadMaterias < 0 || cantidadMaterias > 8)
		{
			cantidadMaterias = prompt("Error. Ingrese la cantidad entre 0 y 8");
			cantidadMaterias = parseInt(cantidadMaterias);
		}
		sexo = prompt("Ingrese su sexo. femenino, masculino o no binario");

		while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
		{
			sexo = prompt("Error. Ingrese su sexo nuevamente");
		}

		notaPromedio = prompt("Ingrese su nota promedio entre 0 y 10");
		notaPromedio = parseInt(notaPromedio);
		while(notaPromedio < 0 || notaPromedio > 10)
		{
			notaPromedio = prompt("Error.Ingrese nota nuevamente entre 0 y 10");
			notaPromedio = parseInt(notaPromedio);
		}

		edad = prompt("Ingrese una edad mayor a 18");
		edad = parseInt(edad);

		while(edad < 18)
		{
			edad = prompt("Error. Ingrese una edad valida");
			edad = parseInt(edad);
		}

		//a) El nombre del mejor promedio que no sea masculino

		if(sexo != "masculino")
		{
			if(notaPromedio > mejorNotaPromedio || banderaPrimerIngreso == 0)
			{
				mejorNotaPromedio = notaPromedio;
				mejorNombre = nombre;
				banderaPrimerIngreso = 1;
			}
		}

		//b) El nombre del mas joven de los alumnos entre los que la dan libre

		if(tipoCursada == "libre")
		{
			if(edad < edadMasJoven || banderaSegundoIngreso == 0)
			{
				edadMasJoven = edad;
				nombreMasJoven = nombre;
				banderaSegundoIngreso = 1;
			}
		}

		//c)El promedio de nota por sexo

		switch(sexo)
		{
			case "masculino":
				acumuladorMasculino+= notaPromedio;
				contadorMasculino++;
				break;
			case "femenino":
				acumuladorFemenino+= notaPromedio;
				contadorFemenino++
				break;
			case "no binario":
				acumuladorNoBinario+= notaPromedio;
				contadorNoBinario++
				break;
		}

		promedioFemenino = acumuladorFemenino / contadorFemenino;
		promedioMasculino = acumuladorMasculino / contadorMasculino;
		promedioNoBinario = acumuladorNoBinario / contadorNoBinario;

		//d) La edad y nombre del que cursa mas materias que no sean en forma remota

		if(tipoCursada != "remota")
		{
			if(cantidadMaterias > cantidadMateriasNoRemoto || banderaTercerIngreso == 0)
			{
				cantidadMateriasNoRemoto = cantidadMaterias;
				edadNoRemoto = edad;
				nombreNoRemoto = nombre;
				banderaTercerIngreso = 1;
			}
		}

		condicion = prompt("Desea continuar");
	}

	if(banderaPrimerIngreso == 0)
	{
		document.write("El nombre del mejor promedio que no sea masculino es: No Existe");
	}
	else
	{
		document.write("El nombre del mejor promedio que no sea masculino es: " + mejorNombre);
	}

	if(banderaSegundoIngreso == 0)
	{
		document.write("<br>El nombre del mas joven de los alumnos entre los que la dan libre es: No Existe");
	}
	else
	{
		document.write("<br>El nombre del mas joven de los alumnos entre los que la dan libre es: " + nombreMasJoven);
	}

	if(banderaTercerIngreso == 0)
	{
		document.write("La edad y nombre del que cursa mas materias que no sean en forma remota: No Existe");
	}
	else
	{
		document.write("<br>La edad y nombre del que cursa mas materias que no sean en forma remota es: " + edadNoRemoto + " " + nombreNoRemoto);
	}

	if(acumuladorMasculino == 0)
	{
		document.write("<br>El promedio de nota masculino es: No Existe");
	}
	else
	{
		document.write("<br>El promedio de nota masculino es: " + promedioMasculino);
	}

	if(acumuladorFemenino == 0)
	{
		document.write("<br>El promedio de nota femenino es: No Existe")
	}
	else
	{
		document.write("<br>El promedio de nota femenino es: " + promedioFemenino);
	}

	if(acumuladorNoBinario == 0)
	{
		document.write("<br>El promedio de nota no binario es es: No Existe");
	}
	else
	{
		document.write("<br>El promedio de nota masculino es: " + promedioNoBinario);
	}

}
