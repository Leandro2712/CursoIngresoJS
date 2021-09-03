//Avalos Leandro ejr05 FOR
function mostrar()
{
	var numeroIngresado;
	var i;

	numeroIngresado = prompt("Ingrese el numero 9");
	numeroIngresado = parseInt(numeroIngresado);

	for(i = 0 ;; i++)
	{
		numeroIngresado = prompt("Error. Por favor ingrese el numero 9");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado == 9)
		{
			break;
		}
	}



}//FIN DE LA FUNCIÓN