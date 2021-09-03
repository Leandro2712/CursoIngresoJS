/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a. La cantidad de números pares.
b. La cantidad de números impares.
c. La cantidad de ceros.
d. El promedio de todos los números positivos ingresados.
e. La suma de todos los números negativos.
f. El número y la letra del máximo y el mínimo.*/

//Autor: Leandro Avalos  Enunciado:Parcial 2019 ejr08
function mostrar()
{
	var letra;
	var numeroIngresado;
	var cantidadCeros;
	var promedio;
	var sumaPositivos;
	var sumaNegativos;
	var condicion;
	var contadorPar;
	var contadorImpar;
	var contadorPositivo;
	//var contador;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaximo;
	var letraMinimo;
	var banderaPrimerIngreso;

	condicion = "si";
	contadorPar = 0;
	contadorImpar = 0;
	cantidadCeros = 0;
	sumaPositivos = 0;
	contadorPositivo = 0;
	sumaNegativos = 0;
	promedio = 0;
	banderaPrimerIngreso = 0;
	//contador = 0;

	while(condicion == "si")
	{
		letra = prompt("Por favor ingrese una letra");
		numeroIngresado = prompt("Por favor ingrese un numero entre -100 y 100");
		numeroIngresado = parseInt(numeroIngresado);

		while(numeroIngresado < -100 || numeroIngresado > 100)
		{
			numeroIngresado = prompt("Numero invalido. Por favor ingrese un numero entre -100 y 100");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if((numeroIngresado % 2) == 0)
		{
			contadorPar = contadorPar + 1;
		}
		else
		{
			contadorImpar = contadorImpar + 1;
		}

		if(numeroIngresado == 0)
		{
			cantidadCeros = cantidadCeros + 1;
		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivo = contadorPositivo + 1;
			}
			else
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
			}
		}

		//bandera sin contador
		if(numeroIngresado > numeroMaximo || banderaPrimerIngreso == 0)
		{
			numeroMaximo = numeroIngresado;
			letraMaximo = letra;
		}

		if(numeroIngresado < numeroMinimo || banderaPrimerIngreso == 0)
		{
			numeroMinimo = numeroIngresado;
			letraMinimo = letra;
			banderaPrimerIngreso = 1;
		}

		//bandera contador
		/*if(contador == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			letraMaximo = letra;
			letraMinimo = letra;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
				letraMaximo = letra;
			}
			else
			{
				if(numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
					letraMinimo = letra;
				}
			}
		}
		contador = contador + 1;*/

		condicion = prompt("Desea ingresar otra letra y numero?");
	}

	if(contadorPositivo == 0)
	{
		promedio = 0;
	}
	else
	{
		promedio = sumaPositivos / contadorPositivo;
	}

	document.write(
	"La cantidad de numeros pares es: " + contadorPar +
	"<br>La cantidad de numeros impares es: " + contadorImpar +
	"<br>La cantidad de ceros es: " + cantidadCeros +
	"<br>El promedio de todos los numeros positivos es: " + promedio +
	"<br>La suma de todos los numeros negativos es: " + sumaNegativos +
	"<br>El numero y la letra maxima es: " + numeroMaximo + " " + letraMaximo +
	"<br>El numero y la letra minima es: " + numeroMinimo + " " + letraMinimo)

}
