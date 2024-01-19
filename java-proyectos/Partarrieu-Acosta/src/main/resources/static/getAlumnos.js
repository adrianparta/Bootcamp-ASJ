let table = document.getElementById('tablaAlumnos');

document.addEventListener('DOMContentLoaded', getAlumnos());

function getAlumnos() {
	fetch('http://localhost:8080/alumnos')
		.then((response) => response.json())
		.then((json) => {

			table.innerHTML = "";

			for (let i = 0; i < json.length; i++) {
				let alumnos = json[i];
				let row = document.createElement("tr");

				let col1 = document.createElement("td");
				col1.textContent = alumnos.id;
				row.appendChild(col1);

				console.log("Prueba")
				let col2 = document.createElement("td");
				col2.textContent = alumnos.nombre;
				row.appendChild(col2);

				let col3 = document.createElement("td");
				col3.textContent = alumnos.apellido;
				row.appendChild(col3);

				let col4 = document.createElement("td");
				col4.textContent = alumnos.nota;
				row.appendChild(col4);

				let col5 = document.createElement("td");
				let btnEditar = document.createElement("button");
				btnEditar.textContent = "Editar";
				btnEditar.classList.add("btn", "btn-primary");
				col5.appendChild(btnEditar);

				btnEditar.addEventListener("click", () => {
					window.location.href = 'formUpdate.html?id=' + alumnos.id;

				})


				let btnEliminar = document.createElement("button");
				btnEliminar.textContent = "Eliminar";
				btnEliminar.classList.add("btn", "btn-danger", "ms-1");
				col5.appendChild(btnEliminar);

				btnEliminar.setAttribute("borrar", i);

				btnEliminar.addEventListener("click", () => {

					const opciones = {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						}
					}

					fetch('http://localhost:8080/alumnos/' + alumnos.id, opciones)
						.then((response) => response.text())
						.then((data) => {
							alert(data)
							getAlumnos()
						})
				});

				row.appendChild(col5);

				table.appendChild(row);
			}
		})
}


