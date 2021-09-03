/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
/*function ComenzarIngreso () 
{
 	
}*/

function NumerosPares()
{
	var numeroIngresado;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado > 0)
	{
		if((numeroIngresado % 2) == 0)
		{
			numeroIngresado = numeroIngresado - 2;
		}
		else
		{
			numeroIngresado = numeroIngresado -1;
		}
		console.log(numeroIngresado);
	}
}


function NumerosImpares()
{
	var numeroIngresado;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado > 1)
	{
		if((numeroIngresado % 2) == 0)
		{
			numeroIngresado = numeroIngresado - 1;
		}
		else
		{
			numeroIngresado = numeroIngresado - 2;
		}
		console.log(numeroIngresado);
	}
}

function NumerosDivisibles()
{
	var numeroIngresado;
	var i;
	var resultado;

	i = 1;
	resultado = 0;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	while(i < numeroIngresado)
	{
		resultado = numeroIngresado % i
		if(resultado == 0)
		{
			console.log(i);
		}
		i = i + 1
	}
	console.log(i);
}

function VerificarPrimo()
{
	var numeroIngresado;
	var numeroAnterior;
	var verificacionPrimo;

	numeroAnterior = 2;
	verificacionPrimo = 1;

	numeroIngresado = document.getElementById("txtIdNumero").value
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroAnterior < numeroIngresado)
	{
		if(numeroIngresado % numeroAnterior == 0)
		{
			verificacionPrimo = 0;
		}
		numeroAnterior = numeroAnterior + 1;
	}

	if(verificacionPrimo == 1)
	{
		alert("Es primo")
	}
	else
	{
		alert("No es primo")
	}
}

function NumerosPrimos()
{
	var numeroIngresado;
	var numeroAnterior;
	var verificacionPrimo;

	numeroIngresado = document.getElementById("txtIdNumero").value
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado > 1)
	{
		verificacionPrimo = 1;
		numeroAnterior = 2;
		while(numeroAnterior < numeroIngresado)
		{
			if(numeroIngresado % numeroAnterior == 0)
			{
				verificacionPrimo = 0;
			}
			numeroAnterior = numeroAnterior + 1;
		}

		if(verificacionPrimo == 1)
		{
			console.log(numeroIngresado + " Es primo")
		}
		numeroIngresado = numeroIngresado - 1	
	}
}
