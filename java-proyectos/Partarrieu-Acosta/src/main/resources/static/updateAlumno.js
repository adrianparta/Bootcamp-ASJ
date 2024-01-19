
const queryString = window.location.search;
const parametros = new URLSearchParams(queryString);
const valorParametroId = parametros.get('id');



let id = valorParametroId;
document.addEventListener('DOMContentLoaded', capturarDatos());

function Editar() {

	let nombre = document.getElementById('nombre').value;
	let apellido = document.getElementById('apellido').value;
	let nota = document.getElementById('nota').value;

	let alumno = {
		"id": id,
		"nombre": nombre,
		"apellido": apellido,
		"nota": parseFloat(nota)
	}

	const opciones = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(alumno)
	}

	fetch('http://localhost:8080/alumnos/put/' + alumno.id, opciones)
		.then(response => {
			if (!response.ok) {
				throw new Error('Error en la solicitud: ' + response.status);
			}
			return response.text();
		})
		.then(data => {
			console.log('Solicitud PUT exitosa:', data);
			window.location.href = "getAlumnos.html"
		})
		.catch(error => {
			console.error('Error en la solicitud:', error);
		});
}

function capturarDatos() {
	fetch(`http://localhost:8080/alumnos/${id}`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Error en la solicitud: ' + response.status);
			}
			return response.json();
		})
		.then(alumno => {
			document.getElementById('nombre').value = alumno.nombre;
			document.getElementById('apellido').value = alumno.apellido;
			document.getElementById('nota').value = alumno.nota;
		})
		.catch(error => {
			console.error('Error en la solicitud:', error);
		});
}