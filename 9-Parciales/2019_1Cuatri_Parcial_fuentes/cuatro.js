//Autor Leandro Avalos Enunciado: parcial 2019 ejr04
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;


	numeroUno = prompt("Ingrese un primer numero");
	numeroDos = prompt("Ingrese un segundo numero");

	if(numeroUno == numeroDos)
	{
		resultado = numeroUno + numeroDos;
		mensaje = resultado
	}
	else
	{
		numeroUno = parseInt(numeroUno);
		numeroDos = parseInt(numeroDos);
		if(numeroUno > numeroDos)
		{
			resultado = numeroUno - numeroDos;
			mensaje = resultado
			if(resultado > 10)
			{
				mensaje = "La resta es " + resultado + " y supero el 10"; 
			}
		}
		else
		{
			resultado = numeroUno + numeroDos;
			mensaje = resultado
		}
	}

	alert(mensaje);
}
