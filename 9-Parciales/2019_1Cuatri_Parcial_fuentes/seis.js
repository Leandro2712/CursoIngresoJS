function mostrar()
{
	var hora;
	hora = document.getElementById("laHora").value;
	hora = parseInt(hora);
	var mensaje;

	switch(hora)
	{
		case hora:
			if(hora > 5 && hora < 12)
			{
				mensaje = "es de mañana";
			}
			else
			{
				if(hora > 11 && hora < 20)
				{
					mensaje = "es de tarde";
				}
				else
				{
					if(hora > 19 && hora < 24)
					{
						mensaje = "es de noche , a dormir";
					}
					else
					{
						mensaje = "es de noche";
					}
				}
			}
		break;
	}
	alert(mensaje);
}
