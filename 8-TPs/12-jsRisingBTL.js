//Autor: Leandro Avalos  Enunciado:TP 12 While Division A
/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
    var mensaje;
    var sueldoBruto;
    var numeroLegajo;
    var nacionalidad;

    edadIngresada = prompt("Ingrese una edad entre 18 y 90 años.");
    edadIngresada = parseInt(edadIngresada);

    while(edadIngresada < 18 || edadIngresada > 90)
    {
        edadIngresada = prompt("Edad invalidad. Por favor ingrese una edad entre 18 y 90 años.");
    }

    document.getElementById("txtIdEdad").value = edadIngresada;

    sexoIngresado = prompt("Ingrese su sexo. M para Masculino y F para Femenino")

    while(sexoIngresado != "M" && sexoIngresado != "F")
    {
        sexoIngresado = prompt("Sexo invalido. Por favor ingrese M para Masculino y F para Femenino");
    }

    switch(sexoIngresado)
    {
        case "M":
            mensaje = "Masculino";
            break;
        case "F":
            mensaje = "Femenino";
            break;
    }

    document.getElementById("txtIdSexo").value = mensaje;

    estadoCivilIngresado = prompt("Ingrese su estado civil. \n 1. Soltero/a. \n 2. Casado/a. \n 3. Divorciado/a. \n 4. Viudo/a.");

    while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
    {
        estadoCivilIngresado = prompt("Estado civil invalido. Por favor ingrese \n 1. Soltero/a. \n 2. Casado/a. \n 3. Divorciado/a. \n 4. Viudo/a.")

    }
    switch(estadoCivilIngresado)
        {
            case "1":
                mensaje = "Soltero/a";
                break;
            case "2":
                mensaje = "Casado/a";
                break;
            case "3":
                mensaje = "Divorciado/a";
                break;
            case "4":
                mensaje = "Viudo/a";
                break;
        }

    document.getElementById("txtIdEstadoCivil").value = mensaje;

    sueldoBruto = prompt("Ingrese su sueldo bruto. (No menor a 8000)");

    while(sueldoBruto < 8000)
    {
        sueldoBruto = prompt("Sueldo invalido. Por favor Ingrese su sueldo bruto. (No menor a 8000)");
    }

    document.getElementById("txtIdSueldo").value = sueldoBruto;

    numeroLegajo = prompt("Por favor ingrese un numero de 4 cifras para su legajo sin 0 a la izquierda.");
    numeroLegajo = parseInt(numeroLegajo);

    while(numeroLegajo < 1000 || numeroLegajo > 9999)
    {
        numeroLegajo = prompt("Numero invalido. Por favor ingrese un numero de 4 cifras para su legajo sin 0 a la izquierda.");
    }

    document.getElementById("txtIdLegajo").value = numeroLegajo;

    nacionalidad = prompt("Ingrese su nacionalidad. \n A. Argentino/a. \n E. Extranjero/a. \n N. Nacionalizado/a.");

    while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
    {
        nacionalidad = prompt("Nacionalidad invalida. Por favor ingrese \n A. Argentino/a. \n E. Extranjero/a. \n N. Nacionalizado/a.")
    }

    switch(nacionalidad)
    {
        case "A":
            mensaje = "Argentino/a";
            break;
        case "E":
            mensaje = "Extranjero/a";
            break;
        case "N":
            mensaje = "Nacionalizado/a";
            break;
    }

    document.getElementById("txtIdNacionalidad").value = mensaje;

}
