function cantidadCaracteres(text){
    return text.length;
}

alert("ejercicio1");
let text = prompt("ingrese su texto:")
console.log(cantidadCaracteres(text));


function aniosADias(edad){
    edad = parseInt(edad);
    return edad*365;
}
alert("ejercicio2");
let edad = prompt("ingrese su edad:")
console.log(`Su edad a días es: ${aniosADias(edad)}`);

function suma(num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 + num2;
}

alert("ejercicio3");
let num1 = prompt("ingrese un numero:");
let num2 = prompt("ingrese otro numero:");
console.log(`La suma es ${suma(num1, num2)}`);

function snacks(edad, edadMaxima, snack, cant, prec){
    edad = parseInt(edad);
    edadMaxima = parseInt(edadMaxima);
    
    let aniosHastaMaximo = edadMaxima - edad;
    let snacksTotales = aniosHastaMaximo * 365 * cant;
    let gastoTotal = snacksTotales * prec;
    return `Necesitarás ${snacksTotales} ${snack} para que te alcancen hasta los ${edadMaxima} años. Gastarás $${gastoTotal} para comprarlos`; 
}

alert("ejercicio4");
let edad1 = prompt("Ingrese su edad:");
let edadMaxima = prompt("Ingrese su maxima:");
let snack = prompt("Ingrese su snack favorito:");
let cant = prompt("Ingrese la cantidada que consume por día:");
let precio = prompt("ingrese precio de snack por unidad:");
console.log(snacks(edad1, edadMaxima, snack, cant, precio));


function dineroComida(cantDias, presupuesto, cantComidas){

    presupuesto = parseInt(presupuesto);
    cantDias = parseInt(cantDias);
    cantComidas = parseInt(cantComidas);

    let comida = presupuesto / (cantComidas * cantDias);

    return `Podés gastar ${comida} en cada comida para que te alcance la plata durante los ${cantDias} días de viaje`;
}

alert("ejercicio5");
let cantDias = prompt("Ingrese la cantidad de dias de vacaciones:");
let presupuesto = prompt("Ingrese su presupuesto:");
let cantComidas = prompt("Ingrese la cantidad de comidas por dia:");
console.log(dineroComida(cantDias, presupuesto, cantComidas));


/*
Desarrollá un programa que calcule cuánto debe abonar un cliente al finalizar su compra.
Para eso, el programa debe solicitar el ingreso del precio del artículo y la cantidad que llevará.
Usá Template Literals e interpolación de Strings para realizar la operación matemática.
*/

alert("ejercicio6");
function abonar(precio, cant){
    precio = parseInt(precio);
    cant = parseInt(cant);
    return `El cliente debe abonar ${precio*cant} para finalizar su compra`;
}

let prec = prompt("Ingrese precio:");
let cantidad = prompt("Ingrese cantidad:");

console.log(abonar(prec, cantidad));