const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    titulo.innerText = document.getElementById("nombre").value;
})

boton.addEventListener("click", () => {
    subtitulo.innerText = document.getElementById("apellido").value;
})