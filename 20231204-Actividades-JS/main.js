/*
//Par impar switch
const num = parseInt(prompt("ingrese un número"));

switch(num%2){
    case 0:
        alert("numero par");
    break;

    case 1:
        alert("numero impar");
    break;

    default:
        alert("ingrese un numero valido");
    break;
}
*/

/*
//ejercicio 1

const text = prompt("ingrese una palabra:");

switch(text){
    case "casa":
        alert("house");
    break;
    case "perro":
        alert("dog");
    break;
    case "pelota":
        alert("ball");
    break;
    case "árbol":
        alert("tree");
    break;
    case "genio":
        alert("genius");
    break;
    default:
        alert("palabra incorrecta");
    break;
}
*/

//Ejercicio 2 switch
const valoracion = prompt("valore la pelicula");
const gracias = "Gracias por su visita."

switch(valoracion){
    case "Muy mala":
        alert(`calificaste la película como ${valoracion}, lo lamentamos mucho, ${gracias}`);
    break;

    case "Mala":
        alert(`calificaste la película como ${valoracion}, mejoraremos, ${gracias}`);
    break;

    case "Mediocre":
        alert(`calificaste la película como ${valoracion}, ni muy muy ni tan tan, ${gracias}`);
        break;

    case "Buena":
        alert(`calificaste la película como ${valoracion}, que bien!, ${gracias}`);
    break;

    case "Muy buena":
        alert(`calificaste la película como ${valoracion}, nos alegra mucho, ${gracias}`);
    break;

    default:
        alert("ingrese un texto valido");
    break;
}