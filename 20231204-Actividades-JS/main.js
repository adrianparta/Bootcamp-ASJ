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

/* //Ejercicio 2 switch
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
} */

//WHILE

/* 
//ejercicio 1
// Que ingrese un numero, y en base a dicho numero, sumatoria de todos los numeros HASTA ese numero.
// Mostrar promedio

const a = Number(prompt("Ingrese un número:"));

console.log(a);
let b = 0;
let i = 0;
if(!Number.isNaN(a)){
    while(i < a){
        b += i+1;
        i++;
    }
    alert(`la sumatoria es ${b}, y el promedio es ${b/i}`);
}
else{
    alert("incorrecto");
}
 */


/* 
//ejercicio 2
// En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando se ingrese un número negativo.
// Al terminar, mostrarle un mensaje con la cantidad de números positivos que ingresó.

let num = parseInt(prompt("ingrese un numero entero:"));
let i = 0;
while(num > 0){
    i++;
    num = prompt("ingrese otro numero:");
}

alert(`usted ingresó ${i} numero/s positivo/s`);
 */

/* 
//FIZZBUZZ

let num = 1;

console.log(num%3);
while(num <= 100){
    if (!Boolean(num%3) && !Boolean(num%5)){
        console.log("FizzBuzz");
    }
    else if(!Boolean(num%3)){
        console.log("Fizz");
    }
    else if(!Boolean(num %5)){
        console.log("Buzz");
    }
    else{
        console.log(num);
    }
    num++;
}
 */

/* 
//Ejercicio bar

let pedir = true;
alert("Buenos días, bienvenido al bar.");
let opcion;
let total = 0;
let chiste = false;
do {
    opcion = Number(prompt("¿Qué desea ordenar?\nIndique una opción:\n1-Medialuna con jyq\n2-Tostados de miga\n3-Sanguche de milanesa\n4-Jugo de naranja\n6-Más opciones"));

    switch(opcion){
        
        case 1:
            total +=500;
        break;

        case 2:
            total +=550;
        break;

        case 3:
            total +=1400;
        break;

        case 4:
            total +=450;
        break;
        
        case 6:
            let opcion2 = Number(prompt("1-Contar un chiste\n2-Solicitar cuenta"));
            switch(opcion2){
                case 1:
                    if(chiste){
                        alert("-Mamá mamá en la escuela me dicen alfajor\n¿Por qué Jorgito?");
                        chiste = false;
                    }
                    else{
                        alert("¿Qué le dice una piedra a otra?\nNada porque las piedras no hablan xd");
                        chiste = true;
                    }
                break;
                
                case 2: 
                    pedir = false;
                break;

                default:
                    alert("Opcion invalida");
                    break;
            }  
        break;
                        
        default:
            alert("Ingrese un valor valido.");
        break;
    }
} while (pedir);

if(total>0){
    total += (Number(prompt("Antes de traer la cuenta, ¿desea dejar propina? Si la respuesta es si, indique el porcentaje, si la respuesta es no, indique 0"))*total)/100;
    alert(`El total de su cuenta es $${total}\n Muchas gracias por elegirnos, vuelva pronto!`);
}
else{
    alert("No ha comprado nada, muchas gracias de todas formas.");
}
 */



//FOR//

/* 
//Ejercicio 1
let msj = "";

let num = parseInt(prompt("Ingrese un numero:"));
for (let i = 1; i<=num; i++) {
    let a = 0;
    while(a<i){
        msj += "*";
        a++;
    }
    msj += "\n";
}
for (let i = num-1; i>=0; i--) {
    let a = i;
    while(a>0){
        msj += "*";
        a--;
    }
    msj += "\n";
}

alert(msj);
 */



//Ejercicio 2 -- Factorial

let num = parseInt(prompt("Ingrese un numero:"));
let factorial = num;
for(num;num>=2;num--){
    factorial *= num -1;
}

alert(factorial);