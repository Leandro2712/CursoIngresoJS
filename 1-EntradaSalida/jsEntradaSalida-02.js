/*
Autor: Leandro Avalos
Enunciado: ejr02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	var mensaje; 
	nombre = prompt("Ingrese su nombre", "Natalia natalia");
	//nombre = "alguien";
	//alert("nombre");
	//alert(nombre);
	mensaje = "Su nombre es"+nombre;
	alert(mensaje);
}

