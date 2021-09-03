/*
Alumno: AvalosLeandro
Enunciado parcial 2020 02:
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
	let precioPorBolsa;
	let cantidadBolsas;
	let tipoDeProducto;
	let condicion;
	let porcentaje;
	let descuento;
	let precioBrutoProducto;
	let precioBruto;
	let acumuladorBolsas;
	let precioConDescuento;
	let acumuladorCal;
	let acumuladorArena;
	let acumuladorCemento;
	let tipoMasCantidadBolsas;
	let tipoMasCaro;
	let tipoMasCaroMaximo;
	let banderaPrimerIngreso;

	banderaPrimerIngreso=0;
	acumuladorCal=0;
	acumuladorArena=0;
	acumuladorCemento=0;
	acumuladorBolsas=0;
	precioBruto=0;
	condicion="si";

	while(condicion=="si")
	{
		//valido tipo de producto
		tipoDeProducto=prompt("Ingrese el tipo de producto que desea comprar (arena/cal/cemento)")

		while(tipoDeProducto!="cal"&&tipoDeProducto!="arena"&&tipoDeProducto!="cemento")
		{
			tipoDeProducto=prompt("Producto invalido. Ingrese el tipo de producto que desea comprar (arena/cal/cemento)")
		}

		//valido la cantidad de bolsas
		cantidadBolsas=prompt("Ingrese la cantidad de bolsas que desea comprar");
		cantidadBolsas=parseInt(cantidadBolsas);

		while(cantidadBolsas<1)
		{
			cantidadBolsas=prompt("Cantidad de bolsas incorrectas. debe comprar al menos una bolsa");
			cantidadBolsas=parseInt(cantidadBolsas);
		}

		//valido el precio de las bolsas
		precioPorBolsa=prompt("Ingrese un precio");
		precioPorBolsa=parseInt(precioPorBolsa);

		while(precioPorBolsa<1)
		{
			precioPorBolsa=prompt("Error. Ingrese un precio");
			precioPorBolsa=parseInt(precioPorBolsa);
		}

		//a calcular bruto
		precioBrutoProducto=cantidadBolsas*precioPorBolsa;
		precioBruto=precioBruto+precioBrutoProducto;
		acumuladorBolsas=acumuladorBolsas+cantidadBolsas;

		//acumulo cantidad de bolsas de cada producto para luego saber el tipo con mas cantidad de bolsas
		switch(tipoDeProducto)
		{
			case "arena":
				acumuladorArena=acumuladorArena+cantidadBolsas;
				break;
			case "cal":
				acumuladorCal=acumuladorCal+cantidadBolsas;
				break;
			case "cemento":
				acumuladorCemento=acumuladorCemento+cantidadBolsas;
				break;
		}

		//f El tipo mas caro
		if(banderaPrimerIngreso==0 || precioPorBolsa>tipoMasCaroMaximo)
		{
			tipoMasCaroMaximo=precioPorBolsa;
			tipoMasCaro=tipoDeProducto;
			banderaPrimerIngreso=1;
		}

		condicion=prompt("Desea continuar?")
	}


	//d para saber el tipo con mas cantidad de bolsas
	if(acumuladorArena>acumuladorCal&&acumuladorArena>acumuladorCemento)
	{
		tipoMasCantidadBolsas="arena";
	}
	else
	{
		if(acumuladorCal>acumuladorCemento)
		{
			tipoMasCantidadBolsas="cal";
		}
		else
		{
			tipoMasCantidadBolsas="	cemento";
		}
	}

	if(acumuladorBolsas>30)
	{
		porcentaje=25;
	}
	else
	{
		if(acumuladorBolsas>10)
		{
			porcentaje=15
		}
		else
		{
			porcentaje=0;
		}
	}

	//b mostrar el importe total a pagar con descuento(solo si corresponde)
	if(porcentaje!=0)
	{
		descuento=precioBruto*porcentaje/100;
		precioConDescuento=precioBruto-descuento;
		document.write("El importe total a pagar con descuento son: $"+precioConDescuento)
	}

	document.write("<br>El precio bruto sin descuento es: "+precioBruto+
				"<br>El producto(tipo) con mas cantidad de bolsas es: "+tipoMasCantidadBolsas+
				"<br>El producto(tipo) mas caro es: "+tipoMasCaro)
}

