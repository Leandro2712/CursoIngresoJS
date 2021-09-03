//Autor: Leandro Avalos  Enunciado:ejr 07 While
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
    var acumulador;
    var numeroIngresado;
    var promedio;
    var condicion;
    
    contador = 0;
    acumulador = 0;
    condicion = "si";

    while(condicion == "si")
    {
        numeroIngresado = prompt("Ingrese un numero.");
        numeroIngresado =parseInt (numeroIngresado);
        acumulador = acumulador + numeroIngresado;
        contador = contador + 1;
        condicion = prompt("Desea ingresar otro numero?");
    }
    promedio = acumulador/contador;

    document.getElementById("txtIdSuma").value = acumulador;
    document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN