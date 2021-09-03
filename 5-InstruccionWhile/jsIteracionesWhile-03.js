//Autor: Leandro Avalos  Enunciado:ejr 03 While
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese la clave.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Clave invalida. Ingrese otra clave");
	}
		alert("Clave Valida!!");
	
}//FIN DE LA FUNCIÓN
