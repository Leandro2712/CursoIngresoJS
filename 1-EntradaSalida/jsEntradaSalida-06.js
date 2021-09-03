/*
Autor: Avalos Leandro
Enunciado: ejr06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var mensaje;
	var resultado;
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	resultado = primerNumero + segundoNumero;

	//mensaje = "la suma de " + primerNumero + " y de " + segundoNumero + " es igual a " + resultado;

	mensaje = "la suma de ";
	mensaje = mensaje + primerNumero;
	mensaje = mensaje + " y de ";
	mensaje = mensaje + segundoNumero;
	mensaje = mensaje + " es ";
	mensaje = mensaje + resultado;


	alert(mensaje);

}

