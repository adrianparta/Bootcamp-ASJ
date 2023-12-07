const input = document.getElementsByTagName("input")[0];
const texto = document.getElementsByClassName("h1")[0];
const vocales = ["a","e","i","o","u","A","E","I","O","U"];

input.addEventListener("keyup", () => {


    //CON REGEX
    texto.innerHTML = input.value.replace(/[aeiouáéíóúü]/ig, "_");
    /*
    //SIN REGEX
    let arrayTexto = (input.value).split("");
    let nuevo_input = arrayTexto.map(element => {
        if(vocales.includes(element)){
            return "_";
        }
        return element
        texto.innerHTML = nuevo_input.join("");
    }) */
})