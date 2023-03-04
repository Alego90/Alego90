function mostrarOpciones() {
	var seleccion = document.getElementById("solicitud").value;
	var opciones = document.getElementById("option");
	opciones.innerHTML = "";
	switch (seleccion) {
	  case "Infraestructura":
		opciones.innerHTML = "<opcion>Puntos de Red</opcion><option>Wifi</option><option>Reubicación de Equipos</option>";
		break;
	  case "Información":
		opciones.innerHTML = "<option>Consultas</option><option>Informes</option>";
		break;
	  case "D365-CRM":
		opciones.innerHTML = "<option>Alta de usuario</option><option>Convertir archivos a Excel</option>";
		break;
	  case "Equipos":
		opciones.innerHTML = "<option>Nuevo PC</option><option>Nuevo Celular</option><option>Revisión técnica de PC o Celular</option>";
		break;
	  case "Otros":
		opciones.innerHTML = "";
		var comentario = document.createElement("input");
		comentario.type = "text";
		comentario.id = "comentario";
		comentario.name = "comentario";
		comentario.placeholder = "Ingrese su comentario";
		opciones.appendChild(comentario);
		break;
	  default:
		opciones.innerHTML = "";
		break;
	}
  }
  