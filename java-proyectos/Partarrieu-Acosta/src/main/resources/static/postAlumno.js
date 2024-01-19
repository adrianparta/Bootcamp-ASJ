
function Agregar() {

	let id = document.getElementById('id').value;
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
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'

		},
		body: JSON.stringify(alumno)
	}

	fetch('http://localhost:8080/alumnos/post', opciones)
		.then(response => {
			if (!response.ok) {
				throw new Error('Error en la solicitud: ' + response.status);
			}
			return response.text();
		})
		.then(data => {
			console.log('Solicitud POST exitosa:', data);
			window.location.href="getAlumnos.html"
		})
		.catch(error => {
			console.error('Error en la solicitud:', error);
		});
}

