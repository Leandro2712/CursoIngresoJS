/*
Autor: Leandro Avalos
Enunciado: ejr10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var descuento;
	var final;

	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo);
	descuento = prompt("Ingrese el porcentaje a descontar");

	descuento = sueldo * descuento / 100;
	final = sueldo - descuento

	document.getElementById("txtIdResultado").value = final;
}


/*var sueldo;
	var descuento;
	var final;
	sueldo = document.getElementById("txtIdImporte").value;

	sueldo = parseInt(sueldo);
	descuento = sueldo * 25 / 100;
	final = sueldo - descuento;

	document.getElementById("txtIdResultado").value = final;*/