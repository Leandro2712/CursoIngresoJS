/* 
Autor: Leandro Avalos
Enunciado: ejr04 bis
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var apellido;
	var mensaje;

	nombre = prompt("Ingrese su nombre" , "Natalia natalia");
	apellido = prompt("Ingrese su apellido");
	mensaje = "Su nombre y su apellido son " + nombre + " " + apellido;

	document.getElementById("txtIdNombre").value = mensaje;

}

