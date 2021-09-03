//Autor: Leandro Avalos Enunciado: ejr04 IF
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/*if(edad > 12 && edad < 18)
	{
		alert("es adolescente");
	}*/

	if(edad > 12)
	{

		if(edad < 18)
		{
			alert("Esta entre 13 y 17");
			alert("Es adolescente");
		}
	}

}//FIN DE LA FUNCIÓN