input = document.getElementById("input");
enviar = document.getElementById("enviar");
ciudad = document.getElementById("ciudad");
temperatura = document.getElementById("temperatura");
grados = document.getElementById("grados");
wicon = document.getElementById("wicon");
descripcion = document.getElementById("descripcion");

function cargarCiudad(input) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input +
      "&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es"
  )
    .then((response) => response.json())
    .then((json) => {
      ciudad.innerHTML = json.name;
      descripcion.innerHTML = json.weather[0].description;
      temperatura.innerHTML =
        parseFloat(json.main.temp).toFixed(1) + "<sup>°C</sup>";
      wicon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
      );
      document.querySelector(".container").style.visibility = "visible";
    })
    .catch((error) => {
      console.log("Hubo un error: " + error);
    });
}

enviar.addEventListener("click", () => {
  cargarCiudad(input.value);
});
