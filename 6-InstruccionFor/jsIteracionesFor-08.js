//Leandro Avalos Ejer 08 For
function mostrar()
{
	let numeroIngresado;
    let iterador;

    numeroIngresado=prompt("ingrese un numero");
    numeroIngresado=parseInt(numeroIngresado);

    for(iterador=2; iterador<numeroIngresado; iterador++)
    {
        if(numeroIngresado%iterador==0)
        {
            break;
        }
    }

    if(iterador==numeroIngresado)
    {
        alert("Es primo");
    }
    else
    {
        alert("No es primo");
    }








    /*Hallar los numeros primos de las unidades de jabon que compre el usuario.
	Si no son primos avisar tambien*/
 	/*let unidadJabon;
    let unidadJabonVerificar;
    let unidadJabonAnterior;
    let iterador;

    unidadJabon=prompt("Ingrese la unides de jabon que desea comprar");
    unidadJabon=parseInt(unidadJabon);

    for(unidadJabonVerificar=unidadJabon-1; unidadJabonVerificar>1; unidadJabonVerificar--)
    {
        //logica para saber si es primo o no
        for(iterador=2; iterador<unidadJabonVerificar; iterador++)
        {
            if(unidadJabonVerificar%iterador==0)
            {
                break;
            }
        }

        if(iterador==unidadJabonVerificar)
        {
            console.log(unidadJabonVerificar+" Es primo");
        }
        else
        {
            console.log(unidadJabonVerificar+" No es primo");
        }
    
    }*/























}//FIN DE LA FUNCIÓN