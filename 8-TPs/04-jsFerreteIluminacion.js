//Autor: Leandro Avalos Enunciado: tp04 IF
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio;
    var cantidadLamparitas;
    var descuento;
    var porcentaje;
    var marca;
    var iIBB;


    cantidadLamparitas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    cantidadLamparitas = parseInt(cantidadLamparitas);
    precio = cantidadLamparitas * 35

    /*
    if(cantidadLamparitas > 5)   //Punto A
    {
        descuento = 50;
    }
    else
    {
        if(cantidadLamparitas == 5)  //Punto B
        {
            if(marca == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        }
        else
        {
            if(cantidadLamparitas == 4) //Punto C
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }
            }
            else
            {
                if(cantidadLamparitas == 3) //Punto D
                {
                    if(marca == "ArgentinaLuz")
                    {
                        descuento = 15;
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            descuento = 10;
                        }
                        else
                        {
                            descuento = 5;
                        }
                    }
                }
            }
        }
    }


    descuento = precio * descuento / 100
    precio = precio - descuento

    iIBB = precio * 10 / 100; //Punto E
    if (precio > 120)
    {
        precio = precio + iIBB;
        alert("Usted pago " + precio + " siendo " + iIBB + " el impuesto que se pago");
    }
    document.getElementById("txtIdprecioDescuento").value = precio;*/


    /*switch(cantidadLamparitas)
    {
        case 1:
        case 2:
        porcentaje = 0;
        break;
        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 15;
                    break;
                case "FelipeLamparas":
                    porcentaje = 10;
                    break;
                default:
                    porcentaje = 5;
                    break;
            }
        break;
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = 25;
                    break;
                default:
                    porcentaje = 20;
                    break;
            }
        break;
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 40;
                    break;
                default:
                    porcentaje = 30;
                    break;
            }
        break;
        default:
            porcentaje = 50;
            break;
    }

    descuento = precio * porcentaje / 100;
    precio = precio - descuento;
    
    iIBB = precio * 10 / 100;
    if (precio > 120)
    {
        precio = precio + iIBB;
        alert("Usted pago " + precio + " siendo " + iIBB + " el impuesto que se pago");
    }
    document.getElementById("txtIdprecioDescuento").value = precio;*/

    /*switch(cantidadLamparitas)
    {
        case 1:
        case 2:
            porcentaje = 0;
        break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 15;
            }
            else
            {
                if(marca == "FelipeLamparas")
                {
                    porcentaje = 10;
                }
                else
                {
                    porcentaje = 5;
                }
            }
        break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentaje = 25;
            }
            else
            {
                porcentaje = 20;
            }
        break;
        case 5:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }
        break;
        default:
            porcentaje = 50;
            break;
    }

    descuento = precio * porcentaje / 100;
    precio = precio - descuento;

    iIBB = precio * 10 / 100;
    if (precio > 120)
    {
        precio = precio + iIBB;
        alert("Usted pago " + precio + " siendo " + iIBB + " el impuesto que se pago");
    }

    document.getElementById("txtIdprecioDescuento").value = precio;*/

    if (cantidadLamparitas > 5)
    {
        porcentaje = 50;
    }
    else
    {
        if(cantidadLamparitas == 5)
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 40;
                    break;
                default:
                    porcentaje = 30;
                    break;
            }
        }
        else
        {
            if(cantidadLamparitas == 4)
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        porcentaje = 25;
                        break;
                    default:
                        porcentaje = 20
                        break;
                }
            }
            else
            {
                if(cantidadLamparitas == 3)
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            porcentaje = 15;
                            break;
                        case "FelipeLamparas":
                            porcentaje = 10;
                            break;
                        default:
                            porcentaje = 5;
                            break;
                    }
                }
                else
                {
                    porcentaje = 0;
                }
            }
        }
    }

    descuento = precio * porcentaje / 100;
    precio = precio - descuento;

    
    iIBB = precio * 10 / 100;
    if (precio > 120)
    {
        precio = precio + iIBB;
        alert("Usted pago " + precio + " siendo " + iIBB + " el impuesto que se pago");
    }

    document.getElementById("txtIdprecioDescuento").value = precio;
























}
