//Autor: Leandro Avalos  Enunciado:ejr 05 While
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Error. Ingrese f para Femenino y m para Masculino");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;

}//FIN DE LA FUNCIÓN