//Autor: Leandro Avalos  Enunciado:ejr 08 While
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
    var suma;
    var numeroIngresado;
    var condicion;
    var producto;
    var banderaNegativos;

    producto = 1;
    suma = 0;
    condicion = "si";
    banderaNegativos = 1;

    while(condicion == "si")
    {
        numeroIngresado = prompt("Ingrese un numero");
        numeroIngresado = parseInt(numeroIngresado);

        if(numeroIngresado > 0)
        {
            suma = suma + numeroIngresado;
        }
        else//numero ingresado es negativo
        {
            if(numeroIngresado < 0)
            {
                producto = producto * numeroIngresado;
                banderaNegativos = 0;
            }
        }
        condicion = prompt("Desea ingresar otro numero?");
    }

    if(banderaNegativos == 1) //No aprendimos bandera pero supongo que va asi
    {
        producto = 0;
    }

    document.getElementById("txtIdSuma").value = suma;
    document.getElementById("txtIdProducto").value = producto;

}//FIN DE LA FUNCIÓN