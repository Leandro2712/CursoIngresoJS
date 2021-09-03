//Autor: Leandro Avalos Enunciado: ejr08 IF
function mostrar()
{
	var edad;
	var estado;

	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;
	edad = parseInt(edad);

	/*if (edad >= 18 && estado == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
	*/

	if(edad > 17)
	{
		if(estado == "Soltero");
		{
			alert("Es soltero y no es menor");
		}
	}

}//FIN DE LA FUNCIÓN