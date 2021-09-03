/*function mostrar()
{
	var miArray = new Array();

	miArray[0]=5;
	miArray[1]=74;
	miArray[2]=8;
	miArray[3]=94;
	miArray[4]=5;
	miArray[5]=0;
	miArray[6]=80;
	miArray[7]=789;
	miArray[8]=5;
	miArray[9]=7;

document.write("El contenido del vector es: <br>");

	for(var i=0; i<10; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}
}//FIN DE LA FUNCIÓN*/

---------------------------------------------------------------------------------------------------------------

//Autor: Leandro Sebastian Avalos Division: A 
/*Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario
*/
function mostrar()
{
	var nombre;
	var edad;
	var genero;
	var vacuna;
	var temperatura;
	var condicion;
	var banderaPrimerIngreso;
	var nombreMasTemperatura;
	var temperaturaMayor;
	var vacunaMayorTemperatura;
	var contadorFemeninoSputnikv;
	var contadorNbDistintaVacuna;
	var contadorAstrazenecaFiebre;
	var acumuladorEdadHombre;
	var contadorHombre;
	var promedioHombresSinFiebre;
	var contadorPersonasAstrazeneca;
	var contadorVacunadosTotales;
	var porcentajePersonasAstrazeneca;
	var contadorSputnikvTotales;
	var contadorOtraTotales;
	var vacunaMasAplicada;
	var acumuladorEdadSputnikv;
	var acumuladorEdadAstrazeneca;
	var acumuladorEdadOtra;
	var promedioEdadSputnikv;
	var promedioEdadAstrazeneca;
	var promedioEdadOtra;
	var contadorGeneroMasculino;
	var contadorGeneroFemenino;
	var contadorGeneroNb;
	var porcentajeGeneroMasculino;
	var porcentajeGeneroFemenino;
	var porcentajeGeneroNb;
	var mensaje;


	condicion = "si";
	banderaPrimerIngreso = 0;
	contadorFemeninoSputnikv = 0;
	contadorNbDistintaVacuna = 0;
	contadorAstrazenecaFiebre = 0;
	acumuladorEdadHombre = 0;
	contadorHombre = 0;
	contadorPersonasAstrazeneca = 0;
	contadorVacunadosTotales = 0;
	contadorSputnikvTotales = 0;
	contadorOtraTotales = 0;
	acumuladorEdadSputnikv = 0;
	acumuladorEdadAstrazeneca = 0;
	acumuladorEdadOtra = 0;
	contadorGeneroMasculino = 0;
	contadorGeneroFemenino = 0;
	contadorGeneroNb = 0;


	while(condicion == "si")
	{
		nombre = prompt("Ingrese su nombre");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		genero = prompt("Ingrese su genero. F, M , NB");
		while(genero != "F" && genero != "M" && genero != "NB")
		{
			genero = prompt("Error. Ingrese su genero nuevamente");
		}

		vacuna = prompt("Ingrese su vacuna. sputnikv , astrazeneca , otra");
		while(vacuna != "sputnikv" && vacuna != "astrazeneca" && vacuna != "otra")
		{
			vacuna = prompt("Error.Ingrese su vacuna nuevamente");
		}

		temperatura = prompt("Ingrese su temperatura")
		temperatura = parseInt(temperatura);

		//a) El nombre y vacuna de la persona con mayor temperatura.

		if(temperatura > temperaturaMayor || banderaPrimerIngreso == 0)
		{
			temperaturaMayor = temperatura;
			nombreMasTemperatura = nombre;
			vacunaMayorTemperatura = vacuna;
			banderaPrimerIngreso = 1;
		}

		switch(genero)
		{
			case "F":
				if(vacuna == "sputnikv")
				{
					contadorFemeninoSputnikv++
				}
				contadorGeneroFemenino++
				break;
			case "M":
				if(temperatura < 38 && vacuna == "sputnikv")
				{
					acumuladorEdadHombre += edad;
					contadorHombre++
				}
				contadorGeneroMasculino++
				break;
			case "NB":
				if(vacuna == "astrazeneca" || vacuna == "otra")
				{
					contadorNbDistintaVacuna++
				}
				contadorGeneroNb++
				break;
		}

		switch(vacuna)
		{
			case "sputnikv":
				acumuladorEdadSputnikv += edad;
				contadorSputnikvTotales++
				break;
			case "astrazeneca":
				if(temperatura > 38)
				{
					contadorAstrazenecaFiebre++
				}
				acumuladorEdadAstrazeneca += edad;
				contadorPersonasAstrazeneca++
				break;
			case "otra":
				acumuladorEdadOtra += edad;
				contadorOtraTotales++
				break;
		}

		contadorVacunadosTotales++

		condicion = prompt("Desea continuar");

	}

	porcentajePersonasAstrazeneca = contadorPersonasAstrazeneca * 100 / contadorVacunadosTotales;
	porcentajeGeneroMasculino = contadorGeneroMasculino * 100 / contadorVacunadosTotales;
	porcentajeGeneroFemenino = contadorGeneroFemenino * 100 / contadorVacunadosTotales;
	porcentajeGeneroNb = contadorGeneroNb * 100 / contadorVacunadosTotales;
	promedioHombresSinFiebre = acumuladorEdadHombre / contadorHombre;
	promedioEdadSputnikv = acumuladorEdadSputnikv / contadorSputnikvTotales;
	promedioEdadAstrazeneca = acumuladorEdadAstrazeneca / contadorPersonasAstrazeneca;
	promedioEdadOtra = acumuladorEdadOtra / contadorOtraTotales; 

	if(contadorSputnikvTotales > contadorPersonasAstrazeneca && contadorSputnikvTotales > contadorOtraTotales)
	{
		vacunaMasAplicada = "sputnikv";
	}
	else
	{
		if(contadorPersonasAstrazeneca > contadorSputnikvTotales)
		{
			vacunaMasAplicada = "astrazeneca";
		}
		else
		{
			vacunaMasAplicada = "otra";
		}
	}

	if(contadorHombre == 0)
	{
		mensaje = "El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos) es: No se pudo calcular";
	}
	else
	{
		mensaje = "<br>El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos) es: " + promedioHombresSinFiebre;
	}

	if(contadorSputnikvTotales == 0)
	{
		mensaje += "<br>El promedio de edad de los que se dieron sputnikv es: No se pudo calcular";
	}
	else
	{
		mensaje += "<br>El promedio de edad de los que se dieron sputnikv es: " + promedioEdadSputnikv;
	}

	if(contadorPersonasAstrazeneca == 0)
	{
		mensaje += "<br>El promedio de edad de los que se dieron astrazeneca es: No se pudo calcular";
	}
	else
	{
		mensaje += "<br>El promedio de edad de los que se dieron astrazeneca es: " + promedioEdadAstrazeneca;
	}

	if(contadorOtraTotales == 0)
	{
		mensaje += "<br>El promedio de edad de los que se dieron otra es: No se pudo calcular";
	}
	else
	{
		mensaje += "<br>El promedio de edad de los que se dieron otra es: " + promedioEdadOtra;
	}

	mensaje += "<br>El nombre y vacuna de la persona con mayor temperatura es: " + nombreMasTemperatura + " " + vacunaMayorTemperatura;
	mensaje += "<br>La cantidad de personas de género Femenino recibieron la vacuna SputnikV es: " + contadorFemeninoSputnikv;
	mensaje += "<br>La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra es: " + contadorNbDistintaVacuna;
	mensaje += "<br>La cantidad de personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38° es: " + contadorAstrazenecaFiebre;
	mensaje += "<br>El Porcentaje de personas que se aplicaron Aztrazeneca es: " + porcentajePersonasAstrazeneca;
	mensaje += "<br>La vacuna mas aplicada es: " + vacunaMasAplicada;
	mensaje += "<br>El porcentaje de personas de cada genero es: " + porcentajeGeneroMasculino + " % " + porcentajeGeneroFemenino + " % " + porcentajeGeneroNb + " % ";

	document.write(mensaje);

}
---------------------------------------------------------------------------------------------------------------------------

/*Realizar el algoritmo que permita ingresar los datos de una compra de productos 
alimenticios, hasta que el cliente quiera. Por cada item  de la compra  se ingresa:<br>
Tipo: (validar "yerba", "harina", "fideo").<br>
marca,
Cantidad de paquetes. (más de cero).<br>
Precio por paquete (más de cero).<br>

a)    El importe total a pagar bruto, sin descuento.<br>
b)    El importe total a pagar con descuento (solo si corresponde)<br>
	Si se compra total tiene  más de 5 paquetes se obtiene un 25% de descuento sobre el total a <br>pagar.<br>
	Si se compra más de 10 paquetes en total se obtiene un 30% de descuento sobre el total a pagar.<br>
	Se pide mostrar por pantalla:<br>
c)    Informar el tipo con más cantidad de paquetes.<br>
d)    El tipo , marca y cantidad  de la item mas caro de la compra. (sobre el Bruto sin descuento)<br>
*/

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

	----------------------------------------------------------------------------------------------------

	/*
Alumno: Gabriel Alegre
Enunciado Simulacro Parcial 02:
Nos dedicamos a la venta exclusiva de Discos rígidos. <br>
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los <br>
siguientes datos:<br>
Tipo: (validar "HDD", "SSD" o "SSDM2")<br>
Precio: (validar entre 5000 y 18000),<br>
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).<br>
Marca: (validar “Seagate”, “WD”, “Kingston”)<br>
Capacidad: (validar 250, 500, 1, 2)<br>
Se debe Informar al usuario lo siguiente:<br>
a) Del más barato de los SSD, la cantidad de unidades y marca.<br>
b) que tipo tiene mas unidades vendidas en total  <br>
c) Cuántas unidades de HDD hay en total.<br>
d) el porcentaje que tiene HDD, SSD y SSDM2 sobre el total de unidades compradas.
*/
/*function mostrar()
{
	let iterador;
	let tipo;
	let precio;
	let cantidadUnidades;
	let cantidadUnidadesTotales;
	let marca;
	let capacidad;
	let banderaPrimerIngreso;
	let ssdMasBarato;
	let cantidadUnidadesSddBarato;
	let marcaSddBarato;
	let tipoMasUnidades;
	let acumuladorUnidadesHdd;
	let acumuladorUnidadesSsd;
	let acumuladorUnidadesSsdm2;
	let porcentajeHdd;
	let porcentajeSsd;
	let porcentajeSsdm2;
	let contadorUnidadesHdd;
	let contadorUnidadesSsd;
	let contadorUnidadesSsdm2;

	contadorUnidadesHdd=0;
	contadorUnidadesSsd=0;
	contadorUnidadesSsdm2=0;
	banderaPrimerIngreso=0;
	acumuladorUnidadesHdd=0;
	acumuladorUnidadesSsd=0;
	acumuladorUnidadesSsdm2=0;
	cantidadUnidadesTotales=0;
	
	for(iterador=0; iterador<5; iterador++)
	{

		tipo=prompt("Ingrese tipo ( HDD, SSD o SSDM2)");

		while(tipo!="HDD" && tipo!="SSD" && tipo!="SSDM2")
		{
			tipo=prompt("Error. Ingrese tipo ( HDD, SSD o SSDM2)");
		}

		precio=prompt("Ingrese precio (entre 5000 y 18000)");
		precio=parseInt(precio);

		while(precio<5000 || precio>18000)
		{
			precio=prompt("Error. Ingrese precio (entre 5000 y 18000)");
			precio=parseInt(precio);
		}

		cantidadUnidades=prompt("Ingrese cantidad Unidades (entre 0 y 50)");
		cantidadUnidades=parseInt(cantidadUnidades);

		while(cantidadUnidades<0 || cantidadUnidades>50)
		{
			cantidadUnidades=prompt("Error. Ingrese cantidad Unidades (entre 0 y 50)");
			cantidadUnidades=parseInt(cantidadUnidades);
		}

		marca=prompt("Ingrese marca (validar “Seagate”, “WD”, “Kingston”)");

		while(marca!="Seagate" && marca!="WD" && marca!="Kingston")
		{
			marca=prompt("Error. Ingrese marca (validar “Seagate”, “WD”, “Kingston”)");
		}

		capacidad=prompt("Ingrese capacidad (validar 250, 500, 1, 2)");
		capacidad=parseInt(capacidad);

		while(capacidad!=250 && capacidad!=500 && capacidad!=1 && capacidad!=2)
		{
			capacidad=prompt("Error. Ingrese capacidad (validar 250, 500, 1, 2)");
			capacidad=parseInt(capacidad);
		}

		//b) que tipo tiene mas unidades vendidas en total  <br>
		switch(tipo)
   		{
		    case "HDD":
		    	//c) Cuántas unidades de HDD hay en total.<br>
		        acumuladorUnidadesHdd=acumuladorUnidadesHdd+cantidadUnidades;
		        contadorUnidadesHdd=contadorUnidadesHdd+1;
		    	break;

		    case "SSD":
		    	contadorUnidadesSsd=contadorUnidadesSsd+1;
		        acumuladorUnidadesSsd=acumuladorUnidadesSsd+cantidadUnidades;
		        //a) Del más barato de los SSD, la cantidad de unidades y marca.<br>
		        if(precio<ssdMasBarato||banderaPrimerIngreso==0)
				{
					ssdMasBarato=precio;
					cantidadUnidadesSddBarato=cantidadUnidades;
					marcaSddBarato=marca;
					banderaPrimerIngreso=1;
				}
		    	break;

		    case "SSDM2":
		    	contadorUnidadesSsdm2=contadorUnidadesSsdm2+1;
		        acumuladorUnidadesSsdm2=acumuladorUnidadesSsdm2+cantidadUnidades;
		    	break;
    	}
	} 

	if(acumuladorUnidadesSsdm2>acumuladorUnidadesSsd&&acumuladorUnidadesSsdm2>acumuladorUnidadesHdd)
	{
		tipoMasUnidades="SSDM2";
	}
	else
	{
		if(acumuladorUnidadesSsd>acumuladorUnidadesHdd)
		{

			tipoMasUnidades="SSD";
		}
		else
		{
			tipoMasUnidades="HDD";
		}

	//  cantidadUnidadesTotales=acumuladorUnidadesHdd+acumuladorUnidadesSsdm2+acumuladorUnidadesSsdm2
		cantidadUnidadesTotales=cantidadUnidadesTotales+cantidadUnidades;
	}
	//d) el porcentaje que tiene HDD, SSD y SSDM2 sobre el total de unidades compradas.
	porcentajeHdd=(acumuladorUnidadesHdd*100)/cantidadUnidadesTotales;
	porcentajeSsdm2=(acumuladorUnidadesSsdm2*100)/cantidadUnidadesTotales;
	porcentajeSsd=(acumuladorUnidadesSsdm2*100)/cantidadUnidadesTotales;

	document.write("Las unidades del SSD mas barato y la marca es: "+cantidadUnidadesSddBarato+" "+marcaSddBarato+
		"<br>El tipo tiene mas unidades vendidas en total: "+tipoMasUnidades+
		"<br>Las unidades de HDD que hay en total son: "+acumuladorUnidadesHdd+
		"<br>El porcentaje que tiene HDD "+porcentajeHdd+" SSD "+porcentajeSsd+ " SSDM2 "+porcentajeSsdm2)
}
  

	porcentajeHDD=sumaHDD100/sumaTotal;
  	porcentajeSSD=sumaSSD100/sumaTotal;
  	porcentajeSSDM2=sumaSSDM2*100/sumaTotal;
*/
----------------------------------------------------------------------------------------------------------------
/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas
marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad
total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. 
Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/
/*function mostrar()
{
	var nombreCliente;
	var cantidadDeLamparas;
	var marca;
	var precioUnidad;
	var condicion;
	var precioBrutoDelProducto;
	var precioConDescuento;
	var porcentaje;
	var descuento;
	var sumaDeLasVentas;
	var sumaDeLasPerdidas;
	var acumuladorFelipeLamparas;
	var contadorFelipeLamparas;
	var acumuladorArgentinaLuz;
	var contadorArgentinaLuz;
	var acumuladorIlluminatis;
	var contadorIlluminatis;
	var promedioFelipeLamparas;
	var promedioArgentinaLuz;
	var promedioIlluminatis;
	var marcaMasVentas;
	var mensaje;

	condicion = "si";
	precioFinal = 0;
	acumuladorFelipeLamparas = 0;
	contadorFelipeLamparas = 0;
	acumuladorArgentinaLuz = 0;
	contadorArgentinaLuz = 0;
	acumuladorIlluminatis = 0;
	contadorIlluminatis = 0;
	sumaDeLasVentas = 0;
	sumaDeLasPerdidas = 0;

	while(condicion == "si")
	{
		nombreCliente = prompt("Ingrese su nombre");

		cantidadDeLamparas = prompt("Ingrese la cantidad de lamparas");
		cantidadDeLamparas = parseInt(cantidadDeLamparas);
		while(cantidadDeLamparas < 0)
		{
			cantidadDeLamparas = prompt("Error.Ingrese la cantidad nuevamente");
			cantidadDeLamparas = parseInt(cantidadDeLamparas);
		}

		marca = prompt("Ingrese la marca. FelipeLamparas, ArgentinaLuz, Illuminatis");
		while(marca != "FelipeLamparas" && marca != "ArgentinaLuz" && marca != "Illuminatis")
		{
			marca = prompt("Error.Ingrese la marca nuevamente");
		}

		precioUnidad = prompt("Ingrese el precio por unidad");
		precioUnidad = parseInt(precioUnidad);
		while(precioUnidad < 0)
		{
			precioUnidad = prompt("Error. Ingrese el precio nuevamente");
			preciounidad = parseInt(preciounidad);
		}

		precioBrutoDelProducto = cantidadDeLamparas * precioUnidad;

		switch(marca)
		{
			case "FelipeLamparas":
				if(cantidadDeLamparas > 5)
				{
					porcentaje = 10;
				}
				else
				{
					porcentaje = 0;
				}
				acumuladorFelipeLamparas += cantidadDeLamparas;
				contadorFelipeLamparas++;
				break;
			case "ArgentinaLuz":
				if(cantidadDeLamparas > 2)
				{
					porcentaje = 5;
				}
				else
				{
					porcentaje = 0;
				}
				acumuladorArgentinaLuz += cantidadDeLamparas;
				contadorArgentinaLuz++
				break;
			case "Illuminatis":
				porcentaje = 0;
				acumuladorIlluminatis += cantidadDeLamparas;
				contadorIlluminatis++
				break;
		}		
		if(porcentaje != 0)
		{
			descuento = precioBrutoDelProducto * porcentaje / 100;
			precioConDescuento = precioBrutoDelProducto - descuento;
			sumaDeLasVentas += precioConDescuento;
			sumaDeLasPerdidas += descuento;
		}
		else
		{
			sumaDeLasVentas += precioBrutoDelProducto;
		}


		condicion = prompt("Desea continuar");
	}

	promedioFelipeLamparas = acumuladorFelipeLamparas / contadorFelipeLamparas;
	promedioArgentinaLuz = acumuladorArgentinaLuz / contadorArgentinaLuz;
	promedioIlluminatis = acumuladorIlluminatis / contadorIlluminatis;

	if(contadorFelipeLamparas > contadorArgentinaLuz && contadorFelipeLamparas > contadorIlluminatis)
	{
		marcaMasVentas = "FelipeLamparas";
	}
	else
	{
		if(contadorArgentinaLuz > contadorIlluminatis)
		{
			marcaMasVentas = "ArgentinaLuz";
		}
		else
		{
			marcaMasVentas = "Illuminatis";
		}
	}

	if(contadorFelipeLamparas == 0)
	{
		mensaje = "El promedio de la cantidad de lamparas vendidas de FelipeLamparas es: No existe ";
	}
	else
	{
		mensaje = "El promedio de la cantidad de lamparas vendidas de FelipeLamparas es: " + promedioFelipeLamparas;
	}

	if(contadorArgentinaLuz == 0)
	{
		mensaje += "<br>El promedio de la cantidad de lamparas vendidas de ArgentinaLuz es: No existe ";
	}
	else
	{
		mensaje += "<br>El promedio de la cantidad de lamparas vendidas de ArgentinaLuz es: " + promedioArgentinaLuz;
	}

	if(contadorIlluminatis == 0)
	{
		mensaje += "<br>El promedio de la cantidad de lamparas vendidas de Illuminatis es: No existe ";
	}
	else
	{
		mensaje += "<br>El promedio de la cantidad de lamparas vendidas de Illuminatis es: " + promedioIlluminatis;
	}

	mensaje += "<br>La empresa en concepto de todas las ventas realizadas recaudo: " + sumaDeLasVentas;
	mensaje += "<br>La empresa en concepto de descuentos perdio: " + sumaDeLasPerdidas;
	mensaje += "<br>La marca que mas ventas realizo es: " + marcaMasVentas;

	document.write(mensaje);


}
*/
----------------------------------------------------------------------------------------------------------------
/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/
/*function mostrar()
{
	var nombre;
	var obraSocial;
	var edad;
	var temperatura;
	var sexo;
	var precioPasajero;
	var condicion;
	var contadorOsdeMayor;
	var banderaPrimerIngreso;
	var nombreMasJoven;
	var temperaturaMasJoven;
	var edadMasJoven;
	var contadorPersonasTotales;
	var precioViajeSinDescuento;
	var contadorPami;
	var porcentajePami;
	var porcentaje;
	var descuento;
	var precioConDescuento;

	condicion = "si";
	precioPasajero = 600;
	contadorOsdeMayor = 0;
	banderaPrimerIngreso = 0;
	contadorPersonasTotales = 0;
	contadorPami = 0;

	while(condicion == "si")
	{
		nombre = prompt("Ingrese su nombre");

		obraSocial = prompt("Ingrese su obra social. pami, osde, otras");
		while(obraSocial != "pami" && obraSocial != "osde" && obraSocial != "otras")
		{
			obraSocial = prompt("Error.Ingrese nuevamente su obra social");
		}

		edad = prompt("Ingrese su edad de 18 años en adelante");
		edad = parseInt(edad);
		while(edad < 18)
		{
			edad = prompt("Error.Ingrese su edad nuevamente");
			edad = parseInt(edad);
		}

		temperatura = prompt("Ingrese su temperatura corporal");
		temperatura = parseInt(temperatura);
		while(temperatura < 1)
		{
			temperatura = prompt("Error.Ingrese su temperatura");
			temperatura = parseInt(temperatura);
		}

		sexo = prompt("Ingrese su sexo. M, F");
		while(sexo != "M" && sexo != "F")
		{
			sexo = prompt("Error.Ingrese su sexo nuevamente");
		}

		//a) La cantidad de personas con OSDE de mas de 60 años.

		if(obraSocial == "osde" && edad > 60)
		{
			contadorOsdeMayor++
		}

		//b) el nombre y temperatura de la mujer soltera mas joven.

		if(sexo == "F")
		{
			if(edad < edadMasJoven || banderaPrimerIngreso == 0)
			{
				edadMasJoven = edad;
				nombreMasJoven = nombre;
				temperaturaMasJoven = temperatura;
				banderaPrimerIngreso = 1;
			}
		}

		if(obraSocial == "pami")
		{
			contadorPami++
		}

		contadorPersonasTotales++

		condicion = prompt("Desea continuar");


	}

	precioViajeSinDescuento = precioPasajero * contadorPersonasTotales;
	porcentajePami = contadorPami * 100 / contadorPersonasTotales;

	if(porcentajePami > 50)
	{
		porcentaje = 25;
	}
	else
	{
		porcentaje = 0;
	}

	mensaje = "La cantidad de personas con OSDE de mas de 60 años es: " + contadorOsdeMayor;
	mensaje += "<br>El nombre y temperatura de la mujer soltera mas joven es:" + nombreMasJoven + " " + temperaturaMasJoven;
	mensaje += "<br>El viaje total sin descuento sale: " + precioViajeSinDescuento;
	if(porcentaje != 0)
	{
		descuento = precioViajeSinDescuento * porcentaje / 100;
		precioConDescuento = precioViajeSinDescuento - descuento;
		mensaje += "<br>El precio del viaje con descuento es: " + precioConDescuento;
	}

	document.write(mensaje);



}*/
