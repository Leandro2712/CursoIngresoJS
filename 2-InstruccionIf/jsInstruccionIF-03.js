//Autor: Leandro Avalos Enunciado: ejr03 IF
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("es mayor de edad");
	}
	
	if(edad < 18)
	{
		alert("Es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN