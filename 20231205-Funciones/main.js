/* 
//funciones

const saludar = alert("Buenos días, bienvenido al bar.");
let pedir = true;
let opcion;
let opcion2;
let total = 0;
let chiste = true;

const opciones = () => {
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
            masOpciones();
        break;

        default:
            error();
        break;
    }
    return 
}

const masOpciones = () => {
    opcion2 = Number(prompt("1-Contar un chiste\n2-Solicitar cuenta"));
    switch(opcion2){
        case 1:
            chiste = contarChiste();
        break;
        
        case 2: 
            pedir = false;
        break;

        default:
            error();
            break;
    }  
}

const error = () => alert("Opcion invalida")
do {
    opciones();
} while (pedir);

const contarChiste = () => {
    if(chiste){
        alert("-Mamá mamá en la escuela me dicen alfajor\n¿Por qué Jorgito?");
        return false;
    }
    else{
        alert("¿Qué le dice una piedra a otra?\nNada porque las piedras no hablan xd");
        return true;
    }
}

if(total>0){
    total += (Number(prompt("Antes de traer la cuenta, ¿desea dejar propina? Si la respuesta es si, indique el porcentaje, si la respuesta es no, indique 0"))*total)/100;
    alert(`El total de su cuenta es $${total}\n Muchas gracias por elegirnos, vuelva pronto!`);
}
else{
    alert("No ha comprado nada, muchas gracias de todas formas.");
}
 */


//fibonacci
//sin recursividad
let n = parseInt(prompt("Ingrese un número"));

/*
let x = [1,1];
 const fibonacci = (num) => {
    for (let i = 2; i < num; i++) {
        let ultimo = x[i-1];
        let anteultimo = x[i-2];
        x.push(ultimo+anteultimo);
    }
    return x;
}; */
//console.log(fibonacci(num));

//con recursividad
//(SOLO MUESTRA EL NUMERO, NO EL ARRAY)
const fibonacci2 = n => {
    if(n<2) return n;
    return fibonacci2(n-1) + fibonacci2 (n-2);
};

console.log(fibonacci2(n));

