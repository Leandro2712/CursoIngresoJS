//Autor: Leandro Avalos Enunciado: parcial02
function mostrar()
{
  var personaUno;
  var personaDos;
  var kilosUno;
  var kilosDos;
  var sumaKilos;
  var promedio;

  personaUno = prompt("Ingrese su nombre");
  kilosUno = prompt("Ingrese su peso");
  kilosUno = parseInt(kilosUno);
  personaDos = prompt("Ingrese su nombre");
  kilosDos = prompt("Ingrese su peso");
  kilosDos = parseInt(kilosDos);

  sumaKilos = kilosUno + kilosDos;
  promedio = sumaKilos / 2;

  alert("Ustedes se llaman: " +personaUno+ " y " + personaDos + 
  " , pesan " + kilosUno + " kilos y " + kilosDos+ " kilos. " + " La suma de sus kilos es " +
  sumaKilos + " y el promedio de su peso es " + promedio);
}
