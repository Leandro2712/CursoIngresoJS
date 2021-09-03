function mostrar()
{
	var nota;
	var sexo;
	var contador;
	var promedio;
	var sumaNotas;
	var notaMasBaja;
	var sexoMinimo;
	var banderaPrimerIngreso;
	var contadorNotaVaron;

	contador = 0;
	sumaNotas = 0;
	banderaPrimerIngreso = 0;
	contadorNotaVaron =0;

	while(contador < 5)
	{
		nota = prompt("Por favor ingrese una nota entre 1 y 10");
		nota = parseInt(nota);

		while(nota < 0 || nota > 10)
		{
			nota = prompt("Error. Ingrese una nota entre 1 y 10");
			nota = parseInt(nota);
		}

		sumaNotas = sumaNotas + nota;

		sexo = prompt("Por favor ingrese su sexo. M para Masculino y F para Femenino");

		while(sexo != "M" && sexo != "F")
		{
			sexo = prompt("Error. Ingrese su sexo nuevamente");
		}

		if(nota < notaMasBaja || banderaPrimerIngreso == 0)
		{
			notaMasBaja = nota;
			sexoMinimo = sexo;
			banderaPrimerIngreso = 1;
		}

		if(sexo == "M" && nota >= 6)
		{
			contadorNotaVaron = contadorNotaVaron + 1;
		}

		contador = contador + 1;

	}
	promedio = sumaNotas / contador;

	alert("El promedio de las notas totales: " + promedio +
		"\nLa nota mas baja es: " + notaMasBaja + " y el sexo al que corresponde es: " + sexoMinimo +
		"\nLa cantidad de varones que su nota haya sido mayor o igual a 6 es: " + contadorNotaVaron)

}
