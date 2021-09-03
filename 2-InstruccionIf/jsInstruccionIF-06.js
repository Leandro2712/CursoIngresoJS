//Autor: Leandro Avalos Enunciado: ejr06 IF
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if(edad < 13)
		{
			alert("Usted es un niño");
		}
	
		else
		{
			alert("Usted es un adolescente");
		}	
		
	}


}//FIN DE LA FUNCIÓN