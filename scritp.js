const seleccion = document.querySelector("#solicitud")

seleccion.addEventListener("click", (e) => {
	const opciones = document.getElementById("opcion");
	opciones.innerHTML = "";
	switch (e.target.value) {
		case "infraestructura":
			opciones.innerHTML = "<opcion>Puntos de Red</opcion><option>Wifi</option><option>Reubicación de Equipos</option>";
			break;
		case "informacion":
			opciones.innerHTML = "<option>Consultas</option><option>Informes</option>";
			break;
		case "d365-crm":
			opciones.innerHTML = "<option>Alta de usuario</option><option>Convertir archivos a Excel</option>";
			break;
		case "equipos":
			opciones.innerHTML = "<option>Nuevo PC</option><option>Nuevo Celular</option><option>Revisión técnica de PC o Celular</option>";
			break;
		case "otros":
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
})

// Función para mostrar el modal al enviar la solicitud
function enviarSolicitud() {
	$('#exampleModal').modal('show');
  }
  
  // Agregar esta línea al evento onclick del botón de enviar solicitud
  // Por ejemplo: <button type="button" class="btn btn-primary" onclick="enviarSolicitud()">Enviar Solicitud</button>
  