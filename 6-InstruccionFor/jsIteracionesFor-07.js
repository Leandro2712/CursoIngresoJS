//Avalos Leandro ejr07 FOR
function mostrar()
{

	var numeroIngresado;
	var i;
	var divisible;
	var contador;

	divisible = 0;
	contador = 0;


	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(i = 1; i < numeroIngresado + 1 ; i++)
	{
		if(numeroIngresado % i == 0)
		{
			contador ++;
			console.log(i);
		}
	}
	console.log("La cantidad de divisores encontrados es. " + contador)


}//FIN DE LA FUNCIÓN