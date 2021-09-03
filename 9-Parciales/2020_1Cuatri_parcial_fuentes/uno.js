/*
Alumno: AvalosLeandro
Enunciado parcial 2020 01:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
  let precio;
  let contador;
  let cantidadUnidades;
  let marca;
  let fabricante;
  let tipoDeProducto;
  let precioAlcoholMasBarato;
  let fabricanteAlcoholMasBarato;
  let tipoMasUnidades;
  let cantidadBarataAlcohol;
  let acumuladorJabon;
  let acumuladorAlcohol;
  let acumuladorBarbijo;
  let contadorJabon;
  let contadorAlcohol;
  let contadorBarbijo;
  let promedioTipoMasUnidades;

  contadorJabon=0;
  contadorAlcohol=0;
  contadorBarbijo=0;
  acumuladorJabon=0;
  acumuladorAlcohol=0;
  acumuladorBarbijo=0;
  contador=0;


  while(contador<5)
  {
    //Valido tipo de producto
  	tipoDeProducto=prompt("Que producto va a comprar ( barbijo , jabon o alcohol)");

  	while(tipoDeProducto!="barbijo"&&tipoDeProducto!="jabon"&&tipoDeProducto!="alcohol")
  	{
  		tipoDeProducto=prompt("Error. Que producto va a comprar ( barbijo , jabon o alcohol)");
  	}

    //Valido precio
  	precio=prompt("Ingrese un precio (entre 100 y 300)");
  	precio=parseInt(precio);

  	while(precio<100||precio>300)
  	{
  		precio=prompt("Error. Ingrese un precio (entre 100 y 300)");
  		precio=parseInt(precio);
  	}

    //valido cantidad de unidades 
  	cantidadUnidades=prompt("Ingrese la cantidad de unidades (entre 0 y 1000)");
  	cantidadUnidades=parseInt(cantidadUnidades);
  	while(cantidadUnidades<0||cantidadUnidades>1000)
  	{
  		cantidadUnidades=prompt("Error. Ingrese la cantidad de unidades (entre 0 y 1000)");
  	  cantidadUnidades=parseInt(cantidadUnidades);
  	}

  	marca=prompt("Ingrese marca");
  	fabricante=prompt("Ingrese fabricante");

  	//A para el alcohol mas barato
  	if(tipoDeProducto=="alcohol")
  	{
  		if(contador==0 || precio<precioAlcoholMasBarato)
  		{
  			precioAlcoholMasBarato=precio;
  			fabricanteAlcoholMasBarato=fabricante;
  			cantidadBarataAlcohol=cantidadUnidades;
  		}
  	}

  	switch(tipoDeProducto)
  	{
  		case "barbijo":
  			acumuladorBarbijo=acumuladorBarbijo+cantidadUnidades;
  			contadorBarbijo=contadorBarbijo+1;
  			break;
  		case "alcohol":
  			acumuladorAlcohol=acumuladorAlcohol+cantidadUnidades;
  			contadorAlcohol=contadorAlcohol+1;
  			break;
  		case "jabon":
  			acumuladorJabon=acumuladorJabon+cantidadUnidades;
        //c contador jabon
  			contadorJabon=contadorJabon+1;
  			break;
  	}

  	contador=contador+1;
  }

    //B tipo con mas unidades y su promedio
  	if(acumuladorJabon>acumuladorAlcohol&&acumuladorJabon>acumuladorBarbijo)
  	{
  		tipoMasUnidades="jabon";
  		promedioTipoMasUnidades=acumuladorJabon/contadorJabon;
  	}
  	else
  	{
  		if(acumuladorAlcohol>acumuladorBarbijo)
  		{
  			tipoMasUnidades="alcohol"
  			promedioTipoMasUnidades=acumuladorAlcohol/contadorAlcohol;
  		}
  		else
  		{
  			tipoMasUnidades="barbijo"
  			promedioTipoMasUnidades=acumuladorBarbijo/contadorBarbijo;
  		}
  	}

  	document.write("Del alcohol mas barato, la cantidad de unidades y el fabricante: "+cantidadBarataAlcohol+" "+fabricanteAlcoholMasBarato+
  	"<br>El tipo de producto con mas unidades, el promedio por compra: "+tipoMasUnidades+" "+promedioTipoMasUnidades+
  	"<br>La cantidad de unidades de jabones que hay en total son: "+acumuladorJabon)
}





























































	/*var nombre;
	var edad;
	var genero;
	var vacuna;
	var temperatura;
	var banderaPrimerIngreso;
	var mayorTemperatura;
	var nombreMayorTemperatura;
	var vacunaPersonaMayorTemperatura;
	var contadorFemeninoSputnikv;
	var personaNbDistintaVacuna;
	var personasTemperaturaMayor;
	var acumuladorEdadHombre;
	var contadorHombre;
	var promedio;

	condicion = "si";
	promedio = 0;
	banderaPrimerIngreso = 0;
	contadorFemeninoSputnikv = 0;
	personaNbDistintaVacuna = 0;
	personasTemperaturaMayor = 0;
	acumuladorEdadHombre = 0;
	contadorHombre = 0;

	while(condicion == "si")
	{
		nombre = prompt("Ingrese su nombre");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		genero = prompt("Ingrese su genero. F, M, NB");
		while(genero != "F" && genero != "M" && genero != "NB")
		{
			genero = prompt("Error. Ingrese su genero nuevamente");
		}

		vacuna = prompt("Ingrese su vacuna. sputnikv, astrazeneca, otra")
		while(vacuna != "sputnikv" && vacuna != "astrazeneca" && vacuna != "otra")
		{
			vacuna = prompt("Error. Ingrese su vacuna nuevamente");
		}

		temperatura = prompt("Ingrese su temperatura corporal(durante la primera noche)");
		temperatura = parseInt(temperatura);

		//Punto A
		if(temperatura > mayorTemperatura || banderaPrimerIngreso == 0)
		{
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
			vacunaPersonaMayorTemperatura = vacuna;
			banderaPrimerIngreso = 1;
		}

		//Punto B
		if(genero == "F" && vacuna == "sputnikv")
		{
			contadorFemeninoSputnikv = contadorFemeninoSputnikv + 1;
		}

		//Punto C
		if(genero == "NB" && vacuna != "sputnikv")
		{
			personaNbDistintaVacuna = personaNbDistintaVacuna + 1;
		}

		//Punto D
		if(vacuna == "astrazeneca" && temperatura > 38)
		{
			personasTemperaturaMayor = personasTemperaturaMayor + 1;
		}

		//Punto E
		if(genero == "M")
		{
			if(vacuna == "sputnikv" && temperatura < 38)
			{
				acumuladorEdadHombre = acumuladorEdadHombre + edad;
				contadorHombre = contadorHombre + 1;
			}
		}

		condicion = prompt("Desea continuar");

	}

	promedio = acumuladorEdadHombre / contadorHombre;

	document.write(
		"El nombre de la persona con mayor temperatura es: " + nombreMayorTemperatura + " y su vacuna fue: " + vacunaPersonaMayorTemperatura +
		"<br>La cantidad de personas de genero femenino que se dieron la vacuna SputnikV es: " + contadorFemeninoSputnikv +
		"<br>La cantidad de personas de género No Binario que recibieron AstraZeneca u otra es: " + personaNbDistintaVacuna +
		"<br>La cantidad de personas que se aplicaron la vacuna AstraZeneca y presentaron una temperatura mayor a 38 es: " + personasTemperaturaMayor + 
		"<br>El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre es: " + promedio);*/










































	/*var tipo;
	var precio;
	var cantidadUnidades;
	var marca;
	var capacidad;
	var contadorFor;
	var precioSsdMasBarato;
	var cantidadUnidadesSsd;
	var marcaSsd;
	var banderaPrimerIngreso;
	var acumuladorHdd;
	var acumuladorSsd;
	var acumuladorSsdm2;
	var tipoConMasUnidades;

	banderaPrimerIngreso = 0;
	acumuladorHdd = 0;
	acumuladorSsd = 0;
	acumuladorSsdm2 = 0;


	for(contadorFor = 0; contadorFor < 5; contadorFor++)
	{
		tipo = prompt("Ingrese el tipo de producto: HDD, SSD, SSDM2");
		while(tipo != "HDD" && tipo != "SSD" && tipo != "SSDM2")
		{
			tipo = prompt("Error. Ingrese nuevamente");
		}

		precio = prompt("Ingrese el precio entre 5000 y 18000");
		precio = parseInt(precio);
		while(precio < 5000 || precio > 18000)
		{
			precio = prompt("Error. Ingrese precio nuevamente");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("Ingrese cantidad de unidades entre 1 y 50");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(cantidadUnidades < 1 || cantidadUnidades > 50)
		{
			cantidadUnidades = prompt("Error.Ingrese nuevamente");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("Ingrese una marca: Seagate, WD, Kingstone")
		while(marca != "Seagate" && marca != "WD" && marca != "Kingstone")
		{
			marca = prompt("Error. Ingrese nuevamente");
		}

		capacidad = prompt("Ingrese la capacidad: 250 , 500 , 1 , 2");
		while(capacidad != "250" && capacidad != "500" && capacidad != "1" && capacidad != "2")
		{
			capacidad = prompt("Error.Ingrese nuevamente");
		}

		//punto A
		if(precio < precioSsdMasBarato || banderaPrimerIngreso == 0)
		{
			precioSsdMasBarato = precio;
			cantidadUnidadesSsd = cantidadUnidades;
			marcaSsd = marca;
			banderaPrimerIngreso = 1;
		}

		switch(tipo)
		{
			case "HDD":
				acumuladorHdd = acumuladorHdd + cantidadUnidades;
				break;
			case "SSD":
				acumuladorSsd = acumuladorSsd + cantidadUnidades;
				break;
			case "SSDM2":
				acumuladorSsdm2 = acumuladorSsdm2 + cantidadUnidades;
				break;
		}

		
		

		
	}

	if(acumuladorHdd > acumuladorSsd && acumuladorHdd > acumuladorSsdm2)
		{
			tipoConMasUnidades = "HDD";
		}
		else
		{
			if(acumuladorSsd > acumuladorSsdm2)
			{
				tipoConMasUnidades = "SSD";
			}
			else
			{
				tipoConMasUnidades = "SSDM2";
			}
		}


		document.write("La cantidad de unidades del SSD mas barato es: " + cantidadUnidadesSsd + " y su marca es: " + marcaSsd +
			"<br>El tipo que tiene mas unidades vendidas en total es: " + tipoConMasUnidades + 
			"<br>La cantidad de HDD vendidos en total es: " + acumuladorHdd)*/






























































	/*var tipo;
	var marca;
	var cantidadPaquetes;
	var precioPaquete;
	var condicion;
	var acumuladorBolsas;
	var precioBrutoDelProducto;
	var precioBruto;
	var porcentaje;
	var descuento;
	var precioConDescuento;
	var acumuladorYerba;
	var acumuladorHarina;
	var acumuladorFideo;
	var tipoConMasCantidadPaquetes;
	var banderaPrimerIngreso;
	var tipoMasCaro;
	var marcaMasCaro;
	var cantidadMasCaro;
	var precioMasCaro;


	condicion = "si";
	banderaPrimerIngreso = 0;
	acumuladorBolsas = 0;
	precioBruto = 0;
	acumuladorYerba = 0;
	acumuladorHarina = 0;
	acumuladorFideo = 0;

	while(condicion == "si")
	{
		tipo = prompt("Ingrese tipo de producto. yerba, harina, fideo");
		while(tipo != "yerba" && tipo != "harina" && tipo != "fideo")
		{
			tipo= prompt("Error. Ingrese el tipo de producto correctamente");
		}

		marca = prompt("Ingrese una marca");

		cantidadPaquetes = prompt("Ingrese la cantidad de paquetes");
		cantidadPaquetes = parseInt(cantidadPaquetes);

		while(cantidadPaquetes < 1)
		{
			cantidadPaquetes = prompt("Error. Ingrese nuevamente la cantidad");
			cantidadPaquetes = parseInt(cantidadPaquetes);
		}

		precioPaquete = prompt("Ingrese el precio del paquete");
		precioPaquete = parseInt(precioPaquete);

		while(precioPaquete < 1)
		{
			precioPaquete = prompt("Error.Ingrese el precio nuevamente");
			precioPaquete = parseInt(precioPaquete);
		}

		acumuladorBolsas = acumuladorBolsas + cantidadPaquetes;
		precioBrutoDelProducto = cantidadPaquetes * precioPaquete;//A
		precioBruto = precioBruto + precioBrutoDelProducto;//A

		switch(tipo)//C
		{
			case "yerba":
				acumuladorYerba = acumuladorYerba + cantidadPaquetes;
				break;
			case "harina":
				acumuladorHarina = acumuladorHarina + cantidadPaquetes;
				break;
			case "fideo":
				acumuladorFideo = acumuladorFideo + cantidadPaquetes
				break;

		}

		if(precioBrutoDelProducto > precioMasCaro || banderaPrimerIngreso == 0)//D
		{
			precioMasCaro = precioBrutoDelProducto;
			tipoMasCaro = tipo;
			marcaMasCaro = marca;
			cantidadMasCaro = cantidadPaquetes;
			banderaPrimerIngreso = 1; 
		}

		condicion = prompt("Desea continuar");
	}

	if(acumuladorYerba > acumuladorHarina && acumuladorYerba > acumuladorFideo)//C
	{
		tipoConMasCantidadPaquetes = "yerba";
	}
	else
	{
		if(acumuladorHarina > acumuladorFideo)
		{
			tipoConMasCantidadPaquetes = "harina"
		}
		else
		{
			tipoConMasCantidadPaquetes = "fideo"
		}
	}

	if(acumuladorBolsas > 10)
	{
		porcentaje = 30;
	}
	else
	{
		if(acumuladorBolsas > 5)
		{
			porcentaje = 25;
		}
		else
		{
			porcentaje = 0;
		}
	}

	if(porcentaje != 0)//B
	{
		descuento = precioBruto * porcentaje / 100;
	 	precioConDescuento = precioBruto - descuento;
		document.write("El precio bruto con descuento es: " + precioConDescuento);
	}

	document.write("<br>El importe total a pagar bruto es: " + precioBruto +
		"<br>El tipo con mas cantidad de paquetes es:" + tipoConMasCantidadPaquetes +
		"<br>El tipo mas caro de la compra es: " + tipoMasCaro + " , la marca mas cara de la compra es: " + marcaMasCaro + " y la mayor cantidad es: " + cantidadMasCaro);
	*/
































}
