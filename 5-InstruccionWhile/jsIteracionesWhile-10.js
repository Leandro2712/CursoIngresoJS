//Autor: Leandro Avalos  Enunciado:ejr 10 While Division A
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
    var contadorPar;
    var contadorPositivo;
    var contadorNegativo;
    var sumaPositivos;
    var numeroIngresado;
    var condicion;
    var sumaNegativos;
    var promedioPositivo;
    var promedioNegativo;
    var diferencia;
    var contadorCeros;

    contadorPar = 0;
    contadorPositivo = 0;
    contadorNegativo = 0;
    contadorCeros = 0;
    sumaPositivos = 0;
    sumaNegativos = 0;
    producto = 1;
    suma = 0;
    condicion="si";



    while(condicion == "si")
    {
        numeroIngresado = prompt("ingrese un numero");
        numeroIngresado = parseInt(numeroIngresado);
        condicion = prompt("desea ingresar otro num?");

        if ((numeroIngresado % 2) == 0)//Para saber si el numero es par
        {
            contadorPar = contadorPar+1;
        }

        if(numeroIngresado > 0)//numero positivo
        {
            sumaPositivos = sumaPositivos + numeroIngresado;

            contadorPositivo = contadorPositivo+1;
        }
        else
        {
            if(numeroIngresado < 0)//numero negativo
            {
                sumaNegativos = sumaNegativos + numeroIngresado;

                contadorNegativo = contadorNegativo + 1;
            }
            else
            {
                contadorCeros = contadorCeros + 1;
            }
        }

        diferencia = sumaPositivos - sumaNegativos;

    }
    // <br> para saltar linea
    // Bandera promedio
    if(contadorPositivo == 0)
    {
        promedioPositivo = 0;
    }
    else
    {
        promedioPositivo = sumaPositivos / contadorPositivo;
    }

    if(contadorNegativo == 0)
    {
        promedioNegativo = 0;
    }
    else
    {
        promedioNegativo = sumaNegativos / contadorNegativo;
    }


    document.write(
        "La suma de los numeros positivos es: " + sumaPositivos +
        "<br> La suma de los numeros negativos es: " + sumaNegativos +
        "<br>La cantida de positivos son: " + contadorPositivo + 
        "<br>La cantida de negativos son: "+ contadorNegativo +
        "<br> La suma de Ceros es: " + contadorCeros + 
        "<br> La cantidad de numeros pares es: " + contadorPar +
        "<br> El promedio de los positivos es: " + promedioPositivo + 
        "<br> El promedio de los negativos es: " + promedioNegativo +
        "<br> la diferencia entre positivos y negativos es: " + diferencia);
}//FIN DE LA FUNCIÓN