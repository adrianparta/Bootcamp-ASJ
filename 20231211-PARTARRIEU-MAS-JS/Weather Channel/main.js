input = document.getElementById("input");
enviar = document.getElementById("enviar");
ciudad = document.getElementById("ciudad");
temperatura = document.getElementById("temperatura");
grados = document.getElementById("grados");
wicon = document.getElementById("wicon");
descripcion = document.getElementById("descripcion");



function cargarCiudad(input){
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input +"&appid=1a9b3670ada3ece0551373f7325e028d")
    .then((response) => response.json())
    .then((json) =>{
        console.log(json);
        descripcion.innerHTML = json.weather[0].description;
        document.querySelector(".container").style.visibility = "visible"
    })
    .catch((error) =>{
        console.log("Hubo un error: " + error);
    })

}

enviar.addEventListener("click", ()=>{
    cargarCiudad(input.value);
})