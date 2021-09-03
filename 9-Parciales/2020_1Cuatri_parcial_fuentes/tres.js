//Avalos Leandro Parcial 2020 ejer03
/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	
  /*
Alumno: Avalos Leandro
Enunciado parcial 2020 03 (Con la correccion de slack):
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
  let condicion;
  let nombre;
  let edad;
  let sexoIngresado;
  let estadoCivil;
  let temperaturaCorporal;
  let banderaPrimerIngreso;
  let temperaturaCorporalMaxima;
  let nombreMasTemperatura;
  let contadorMayoresViudos;
  let contadorViudosSolteros;
  let contadorTercerEdadTemperatura;
  let acumuladorEdad;
  let contadorSolteria;
  let promedioEdadHombresSolteros;

  contadorSolteria=0;
  acumuladorEdad=0;
  contadorTercerEdadTemperatura=0;
  contadorViudosSolteros=0;
  contadorMayoresViudos=0;
  banderaPrimerIngreso=0;
  condicion="si";

  while(condicion=="si")
  {
    nombre=prompt("Ingrese su nombre");

    edad=prompt("Ingrese su edad");
    edad=parseInt(edad);

    sexoIngresado=prompt("Ingrese su sexo (F o M)");
    sexoIngresado=sexoIngresado.toUpperCase();

    while(sexoIngresado!="M" && sexoIngresado!="F")
    {
      sexoIngresado=prompt("Sexo invalido. Ingrese F para femenino y M para masculino");
      sexoIngresado=sexoIngresado.toUpperCase();
    }

    estadoCivil=prompt("Cual es su estado civil? \nsoltero\ncasado\nviudo");

    while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
    {
      estadoCivil=prompt("Estado civil incorreco. cual es su estado civil? \nsoltero\ncasado\nviudo");
    }

    temperaturaCorporal=prompt("Ingrese su temperatura corporal (Entre 0 y 50)")
    temperaturaCorporal=parseInt(temperaturaCorporal);

    while(temperaturaCorporal<0 || temperaturaCorporal>50)
    {
      temperaturaCorporal=prompt("Temperatura Invalida. Ingrese nuevamente temperatura corporal (Entre 0 y 50)")
      temperaturaCorporal=parseInt(temperaturaCorporal);
    }

    //A
    if(banderaPrimerIngreso==0 || temperaturaCorporal>temperaturaCorporalMaxima)
    {
      temperaturaCorporalMaxima=temperaturaCorporal;
      nombreMasTemperatura=nombre;
      banderaPrimerIngreso=1;
    }

    //B
    if(edad>17 && estadoCivil=="viudo")
    {
      contadorMayoresViudos=contadorMayoresViudos+1;
    }

    //C
    if(sexoIngresado=="M")
    {
      if (estadoCivil!="casado")
      {
        contadorViudosSolteros=contadorViudosSolteros+1;
      }
    }

    //D
    if(edad>60 && temperaturaCorporal>38)
    {
      contadorTercerEdadTemperatura=contadorTercerEdadTemperatura+1;
    }

    //E
    if(sexoIngresado=="M" && estadoCivil=="soltero")
    {
      contadorSolteria=contadorSolteria+1;
      acumuladorEdad=acumuladorEdad+edad;
    }

    condicion=prompt("Desea ingresar los datos de otra persona?")
  }
  promedioEdadHombresSolteros=acumuladorEdad/contadorSolteria;

  document.write("El nombre de la persona con mas temperatura es: "+nombreMasTemperatura+
    "<br>La cantidad de mayores de edad que son viudos son: "+contadorMayoresViudos+
    "<br>La cantidad de hombres viudos o solteros son: "+ contadorViudosSolteros+ 
    "<br>La cantidad de personas de tercera edad que tienen mas de 38 de temperatura son: "+contadorTercerEdadTemperatura+
    "<br>El promedio de edad de los hombres solteros es: "+promedioEdadHombresSolteros);
}













































  /*var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var condicion;
	var banderaPrimerIngreso;
	var nombreMasTemperatura;
	var temperaturaMaxima;
	var contadorViudosMayores;
	var contadorViudosSolteros;
	var contadorAdultosTemperatura;
	var acumuladorEdad;
	var promedioEdad;
	var acumuladorSolteria;

	condicion = "si";
	banderaPrimerIngreso = 0;
	contadorViudosMayores = 0;
	contadorViudosSolteros = 0;
	contadorAdultosTemperatura = 0;
	acumuladorEdad = 0;
	acumuladorSolteria = 0;

	while(condicion == "si")
	{
		var nombre;
  var obraSocial;
  var edad;
  var temperatura;
  var sexo;
  var estadoCivil;
  var precioPasajero;
  var condicion;
  var contadorOsdeAños;
  var nombreMayorTemperatura;
  var temperaturaMayor;
  var edadMasJoven;
  var banderaPrimerIngreso;
  var contadorPasajeros;
  var viajeSinDescuento;
  var porcentajePami;
  var contadorPami;
  var porcentaje;
  var descuento;
  var precioConDescuento;
  var mensaje;



  precioPasajero = 600;
  condicion = "si";
  contadorOsdeAños = 0;
  banderaPrimerIngreso = 0;
  contadorPasajeros = 0;
  contadorPami = 0;


  while(condicion == "si")
  {
    nombre = prompt("Ingrese su nombre");

    obraSocial = prompt("Ingrese su obra social. pami, osde, otras");
    while(obraSocial != "pami" && obraSocial != "osde" && obraSocial != "otras")
    {
      obraSocial = prompt("Error.Ingrese su obra social nuevamente");
    }

    edad = prompt("Ingrese su edad mayor de 17");
    edad = parseInt(edad);

    while(edad < 18)
    {
      edad = prompt("Error. Ingrese nuevamente su edad");
      edad = parseInt(edad);
    }

    estadoCivil = prompt("Ingrese su estado civil. soltero, casado")
    while(estadoCivil != "soltero" && estadoCivil != "casado")
    {
      estadoCivil = prompt("Error.Ingrese nuevamente su estado civil");
    }

    temperatura = prompt("Ingrese su temperatura corporal");
    temperatura = parseInt(temperatura)
    while(temperatura < 1)
    {
      temperatura = prompt("Error. Ingrese su temperatura nuevamente");
      temperatura = parseInt(temperatura);
    }

    sexo = prompt("Ingrese su sexo. F,M,NB")
    while(sexo != "F" && sexo != "M" && sexo != "NB")
    {
      sexo = prompt("Error. Ingrese su sexo nuevamente");
    }

    switch(obraSocial)
    {
      case "pami":
        if(edad > 60)
        {
          contadorOsdeAños++
        }
        contadorPami++

        break;
      case "osde":
        break;
      case "otras":
        break;
    }

    if(sexo == "F" && estadoCivil == "soltero")
    {
      if(edad < edadMasJoven || banderaPrimerIngreso == 0)
      {
        edadMasJoven = edad;
        nombreMayorTemperatura = nombre;
        mayorTemperatura = temperatura;
        banderaPrimerIngreso = 1;
      }
    }


    contadorPasajeros++;
    condicion = prompt("Desea continuar");
  }

  porcentajePami = contadorPami * 100 / contadorPasajeros;
  viajeSinDescuento = precioPasajero * contadorPasajeros;

  if(porcentajePami > 50)
  {
    porcentaje = 25;
  }


  if(porcentaje != 0)
  {
    descuento = viajeSinDescuento * porcentaje / 100;
    precioConDescuento = viajeSinDescuento - descuento;
    mensaje = "El viaje con descuento es : " + precioConDescuento;

  }
  mensaje += "<br>el viaje total sin descuento es: " + viajeSinDescuento;
  mensaje += "<br>La cantidad de personas con OSDE de mas de 60 años es: " + contadorOsdeAños;
  mensaje += "<br>el nombre y temperatura de la mujer soltera mas joven es: " + nombreMayorTemperatura + " " + mayorTemperatura;

  document.write(mensaje);*/

}
