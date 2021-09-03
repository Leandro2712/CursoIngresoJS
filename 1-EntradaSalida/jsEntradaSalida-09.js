/*
Autor : Leandro Avalos
Enunciado: ejr09 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var final;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	aumento = prompt("Ingrese el porcentaje de aumento");

	aumento = sueldo * aumento / 100;
	final = sueldo + aumento;

	document.getElementById("txtIdResultado").value = final;
}


/*var sueldo;
	var aumento;
	var final;
	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);
	aumento = sueldo * 10 / 100;
	final = sueldo + aumento;

	document.getElementById("txtIdResultado").value = final;*/