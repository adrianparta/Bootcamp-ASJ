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