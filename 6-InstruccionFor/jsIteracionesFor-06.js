//Avalos Leandro ejr06 FOR
function mostrar()
{

	var numeroIngresado;
	var numeroAnterior;
	var iterador;

	numeroIngresado = 100;


	/*for(numeroAnterior = numeroIngresado; numeroAnterior > 0; numeroAnterior --)
	{
			console.log(numeroAnterior);
	}*/


	/*numeroIngresado = 100;
	for(iterador = 0; iterador < numeroIngresado; iterador ++)
	{
		console.log(iterador);
	}*/


	/*for(numeroAnterior = numeroIngresado - 1; numeroAnterior > 0; numeroAnterior --)
	{
		if(numeroIngresado % numeroAnterior == 0)
		{
			document.write("Es divisor" + numeroAnterior);
		}
	}

	numeroIngresado = 100;
	for(iterador = 2; iterador < numeroIngresado - 1; iterador ++)
	{
		if(numeroIngresado % iterador == 0)
		{
			document.write("Es divisor" + iterador);
		}
	}*/





























	var numeroIngresado;
	var i;
	var contador;
	contador = 0;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(i = 1; i < numeroIngresado + 1; i++)
	{
		if((i % 2) == 0)
		{
			contador ++;
			console.log(i);
		}
	}
	console.log("La cantidad de numeros pares encontrados es. " + contador);
}//FIN DE LA FUNCIÓN