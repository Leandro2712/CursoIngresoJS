/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos/*/

function mostrar()
{
	var nombreProducto;
	var precio;
	var cantidadUnidades;
	var tipoInflamable
	var marca;
	var contadorFor;
	var acumuladorAlcohol;
	var contadorAlcohol;
	var acumuladorIac;
	var contadorIac;
	var acumuladorQuat;
	var contadorQuat;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var acumuladorIgnifugo;
	var acumuladorCombustible;
	var acumuladorExplosivo;
	var inflamableMasUnidades;
	var iacPrecioMenor;
	var marcaMasCaro;
	var tipoMasCaro;
	var precioMasCaro;
	var banderaPrimerIngreso;

	acumuladorAlcohol = 0;
	banderaPrimerIngreso = 0;
	contadorAlcohol = 0;
	acumuladorIac = 0;
	contadorIac = 0;
	acumuladorQuat = 0;
	contadorQuat = 0;
	promedioAlcohol = 0;
	promedioIac = 0;
	promedioQuat = 0;
	acumuladorIgnifugo = 0;
	acumuladorCombustible = 0;
	acumuladorExplosivo = 0;
	iacPrecioMenor = 0;



	for(contadorFor = 0; contadorFor < 5; contadorFor++)
	{
		nombreProducto = prompt("Ingrese el producto. alcohol, iac o quat")
		while(nombreProducto != "alcohol" && nombreProducto != "iac" && nombreProducto != "quat")
		{
			nombreProducto = prompt("Error. Ingrese nuevamente");
		}

		precio = prompt("Ingrese el precio del producto entre 100 y 300")
		precio = parseInt(precio);

		while(precio < 100 || precio > 300)
		{
			precio = prompt("Error. Ingrese precio nuevamente");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("Ingrese la cantidad de unidades entre 1 y 1000");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("Error. Ingrese la cantidad nuevamente");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		tipoInflamable = prompt("Ingrese el tipo de inflamable. ignifugo, combustible o explosivo")
		while(tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
		{
			tipoInflamable = prompt("Error. Ingrese el tipo inflamable nuevamente");
		}

		marca = prompt("Ingrese la marca");

		//a) El promedio de cantidad por tipo de producto

		switch(nombreProducto)
		{
			case "alcohol":
				acumuladorAlcohol += cantidadUnidades;
				contadorAlcohol++
				break;
			case "iac":
				acumuladorIac += cantidadUnidades;
				contadorIac++
			break;
			case "quat":
				acumuladorQuat += cantidadUnidades;
				contadorQuat++
				break;
		}

		//b) El tipo de inflamable con más cantidad de unidades en total de la compra
		switch(tipoInflamable)
		{
			case "ignifugo":
				acumuladorIgnifugo += cantidadUnidades;
				break;
			case "combustible":
				acumuladorCombustible += cantidadUnidades;
				break;
			case "explosivo":
				acumuladorExplosivo += cantidadUnidades;
				break;
		}

		//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total

		if(nombreProducto == "iac" && precio < 201)
		{
			iacPrecioMenor += cantidadUnidades;
		}

		//d) la marca y tipo del más caro de los productos
		if(precio > precioMasCaro || banderaPrimerIngreso == 0)
		{
			precioMasCaro = precio;
			tipoMasCaro = nombreProducto;
			marcaMasCaro = marca;
			banderaPrimerIngreso = 1;
		}

	}

	if(acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo)
	{
		inflamableMasUnidades = "ignifugo";
	}
	else
	{
		if(acumuladorCombustible > acumuladorExplosivo)
		{
			inflamableMasUnidades = "combustible";
		}
		else
		{
			inflamableMasUnidades = "explosivo"
		}
	}

	promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
	promedioIac = acumuladorIac / contadorIac;
	promedioQuat = acumuladorQuat / contadorQuat;

	document.write(
		"El promedio de cantidad por tipo de producto es: " + promedioAlcohol + " alcohol " + promedioIac + " iac " + promedioQuat + " quat " +
		"<br>El tipo de inflamable con más cantidad de unidades en total de la compra es: " + inflamableMasUnidades +
		"<br>La cantidad de unidades de IAC con precios menos a 200 (inclusive) es: " + iacPrecioMenor +
		"<br>la marca y tipo del más caro de los productos es: " + marcaMasCaro + " " + tipoMasCaro);
}
