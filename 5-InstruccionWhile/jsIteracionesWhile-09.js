//Autor: Leandro Avalos  Enunciado:ejr 09 While
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
    var maximo;
    var numeroIngresado;
    var condicion;
    var minimo;
    var banderaPrimerIngreso;
    
    //contador = 0;
    condicion = "si";
    banderaPrimerIngreso = 1;

    while(condicion == "si")
    {
        numeroIngresado = prompt("Ingrese un numero");
        numeroIngresado=parseInt(numeroIngresado);

        //con bandera
        if(numeroIngresado > maximo || banderaPrimerIngreso == 1)
        {
            maximo = numeroIngresado;
        }

        if(numeroIngresado < minimo || banderaPrimerIngreso == 1)
        {
            minimo = numeroIngresado;
            banderaPrimerIngreso = 0;
        }

        //bandera contador
        /*if(contador == 0)
        {
            maximo = numeroIngresado;
            minimo = numeroIngresado;
        }
        else
        {
            if(numeroIngresado > maximo)
            {
                maximo = numeroIngresado;
            }
            else
            {
                if(numeroIngresado < minimo)
                {
                    minimo = numeroIngresado;
                }
            }
        }
        contador = contador + 1;*/
        condicion=prompt("Desea ingresar otro numero?");
    }

    document.getElementById("txtIdMaximo").value = maximo;
    document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN