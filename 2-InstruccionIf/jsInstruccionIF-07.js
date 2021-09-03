//Autor: Leandro Avalos Enunciado: ejr07 IF
function mostrar()
{
	var edad;
	var estado;
	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;
	edad = parseInt(edad);


	/*if(edad < 18 && estado != "Soltero" )
	{
		alert("'Es muy pequeño para NO ser soltero");
	}*/

	if(edad < 18)
	{
		if(estado != "Soltero")
		{
			alert("'Es muy pequeño para NO ser soltero");
		}
	}

	


}//FIN DE LA FUNCIÓN