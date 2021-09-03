//Autor: Leandro Avalos Enunciado: ejr05 IF
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13)
	{
		alert("No es adolescente")
	}

	if(edad > 17)
	{
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN