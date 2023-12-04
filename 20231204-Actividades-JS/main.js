
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