//Autor: Leandro Avalos  Enunciado:ejr 06 While
function mostrar()
{
	var contador;
    var acumulador;
    var numeroIngresado;
    var promedio;

    contador = 0;
    acumulador = 0;

    while(contador < 5)
    {
        numeroIngresado = prompt("numero ingresado");
        numeroIngresado = parseInt(numeroIngresado);
        acumulador = acumulador+numeroIngresado;
        contador = contador + 1;
    }
    promedio = acumulador / 5;

    document.getElementById("txtIdSuma").value = acumulador;
    document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN