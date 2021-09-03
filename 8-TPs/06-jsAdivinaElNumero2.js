/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var mensajeIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
	contadorIntentos = 0;
}

function verificar()
{
	/*numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);
	contadorIntentos = contadorIntentos + 1

	if(numeroIngresado == numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1:
				mensajeIntentos = "Usted es un psiquico";
				break;
			case 2:
				mensajeIntentos = "Excelente percepcion";
				break;
			case 3:
				mensajeIntentos = "Esto es suerte";
				break;
			case 4:
				mensajeIntentos = "Excelente tecnica";
				break;
			case 5:
				mensajeIntentos = "Usted esta en la media";
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				mensaje = "Falta tecnica";
				break;
			default:
				mensajeIntentos = "Afortunado en el amor";
				break; 
		}
		mensaje = "Usted es el ganador en "+contadorIntentos+ " intentos. " + mensajeIntentos;
	}
	else
	{
		if(numeroIngresado > numeroSecreto)
		{
			mensaje = "se paso...";
		}
		else
		{
			mensaje = "falta...";
		}
	}
	alert(mensaje);
	document.getElementById("txtIdIntentos").value = contadorIntentos;*/

}