/*Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos. Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:
a) El más barato de Terror con su importe.
b) Del libro más caro el título.
c) El importe promedio del total
d) La cantidad de libros que sean de terror y cuesten menos de $700.*/
function mostrar()
{
    var libro;
    var genero;
    var materialLibro;
    var importe;
    var condicion;
    var importeMasBarato;
    var banderaPrimerIngreso;
    var libroMasCaro;
    var tituloMasCaro;
    var nombreMasBarato;
    var banderaSegundoIngreso;
    var acumuladorImporteTotal;
    var contadorIngresosTotales;
    var contadorTerrorBarato;
    var mensaje;
    var promedio;

    condicion = "si";
    banderaPrimerIngreso = 0;
    banderaSegundoIngreso = 0;
    acumuladorImporteTotal = 0;
    contadorIngresosTotales = 0;
    contadorTerrorBarato = 0;

    while(condicion == "si")
    {
        libro = prompt("Ingrese un libro");

        genero = prompt("ingrese genero. Ciencia Ficcion, Drama, Terror");
        while(genero != "Ciencia Ficcion" && genero != "Drama" && genero != "Terror")
        {
            genero = prompt("Error.Ingrese genero nuevamente");
        }

        materialLibro = prompt("Ingrese el material del libro. Rustica, Tapa Dura");
        while(materialLibro != "Rustica" && materialLibro != "Tapa Dura")
        {
            materialLibro = prompt("Error.Ingrese nuevamente el material");
        }

        importe = prompt("Ingrese el importe entre 1 y 30000");
        importe = parseInt(importe);
        while(importe < 1 || importe > 30000)
        {
            importe = prompt("Error.Ingrese nuevamente el importe");
            importe = parseInt(importe);
        }

        if(genero == "Terror")
        {
            if(importe < importeMasBarato || banderaPrimerIngreso == 0)
            {
                importeMasBarato = importe;
                nombreMasBarato = libro;
                banderaPrimerIngreso = 1;
            }
        }

        if(importe > libroMasCaro || banderaSegundoIngreso == 0)
        {
            libroMasCaro = importe;
            tituloMasCaro = libro;
            banderaSegundoIngreso = 1;
        }

        acumuladorImporteTotal += importe;
        contadorIngresosTotales++

        if(genero == "Terror" && importe < 700)
        {
            contadorTerrorBarato++
        }

        condicion = prompt("Desea continuar");
    }

    promedio = acumuladorImporteTotal / contadorIngresosTotales;

    mensaje = "El libro de terror mas barato se llama: " + nombreMasBarato + " y su importe es: " + importeMasBarato;
    mensaje += "<br>El titulo del libro mas caro es: " + tituloMasCaro;
    mensaje += "<br>El importe promedio total es " + promedio;
    mensaje += "<br>La cantidad de libros que sean de terror y cuesten menos de $700 es: " + contadorTerrorBarato;
    
    document.write(mensaje);
}
