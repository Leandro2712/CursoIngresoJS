/*
Autor: Avalos Leandro
Enunciado: ejr07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultado;
	
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	resultado = primerNumero + segundoNumero;

	alert("La suma es "+ resultado);	
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;
	
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	resultado = primerNumero - segundoNumero;

	alert("La resta es "+ resultado);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultado;
	
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	resultado = primerNumero * segundoNumero;

	alert("La multiplicacion es "+ resultado);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultado;
	
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	resultado = primerNumero / segundoNumero;

	alert("La division es "+ resultado);
}

