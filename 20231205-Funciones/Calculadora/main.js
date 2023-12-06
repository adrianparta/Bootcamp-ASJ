let texto =  document.getElementById("texto");

const btnDEL = document.getElementById("del");
const btnPorcentaje = document.getElementById("porcentaje");
const btn0 = document.getElementById("boton0");
const btn1 = document.getElementById("boton1");
const btn2 = document.getElementById("boton2");
const btn3 = document.getElementById("boton3");
const btn4 = document.getElementById("boton4");
const btn5 = document.getElementById("boton5");
const btn6 = document.getElementById("boton6");
const btn7 = document.getElementById("boton7");
const btn8 = document.getElementById("boton8");
const btn9 = document.getElementById("boton9");
const btnSuma = document.getElementById("botonmas");
const btnDividir = document.getElementById("dividir");
const btnMenos = document.getElementById("botonmenos");
const btnPor = document.getElementById("botonpor");
const btnIgual = document.getElementById("botonigual");
const btnPunto = document.getElementById("botonpunto");
const pantalla = document.getElementById("pantalla");
let param1 = 0;
let param2 = 0;
let operacion = "";



const asignarParametros = btnNumero => {
    if(operacion === ""){
        param1 += btnNumero;
    }
    else{
        param2 += btnNumero;
    }
    texto.innerHTML += btnNumero;
}

btnDEL.addEventListener("click", () => {
    param1 = "";
    param2 = "";
    operacion = "";
    texto.innerHTML = "";
});

btnPunto.addEventListener("click", () => {
    asignarParametros(btnPunto.innerHTML);
})

btn0.addEventListener("click", () => {
    asignarParametros(btn0.innerHTML);
})

btn1.addEventListener("click", () => {
    asignarParametros(btn1.innerHTML);
})

btn2.addEventListener("click", () => {
    asignarParametros(btn2.innerHTML);
})

btn3.addEventListener("click", () => {
    asignarParametros(btn3.innerHTML);
})

btn4.addEventListener("click", () => {
    asignarParametros(btn4.innerHTML);
})

btn5.addEventListener("click", () => {
    asignarParametros(btn5.innerHTML);
})

btn6.addEventListener("click", () => {
    asignarParametros(btn6.innerHTML);
})

btn7.addEventListener("click", () => {
    asignarParametros(btn7.innerHTML);
})

btn8.addEventListener("click", () => {
    asignarParametros(btn8.innerHTML);
})

btn9.addEventListener("click", () => {
    asignarParametros(btn9.innerHTML);
})

btnSuma.addEventListener("click", () => {
    operacion = btnSuma.innerHTML;
    texto.innerHTML = "";
});

btnDividir.addEventListener("click", () => {
    operacion = btnDividir.innerHTML;
    texto.innerHTML = "";
});

btnMenos.addEventListener("click", () => {
    operacion = btnMenos.innerHTML;
    texto.innerHTML = "";
});

btnPor.addEventListener("click", () => {
    operacion = btnPor.innerHTML;
    texto.innerHTML = "";
});

btnPorcentaje.addEventListener("click", () => {
    operacion = btnPorcentaje.innerHTML;
    texto.innerHTML = "";
})

btnIgual.addEventListener("click", () => {
    texto.innerHTML = "";
    param1 = parseFloat(param1);
    param2 = parseFloat(param2);
    
    console.log(param1,param2);

    if(operacion != ""){
        texto.innerHTML = param1;
    }
    
    switch(operacion){
        case "+":
            if(param2 === ""){
                param2 = 0;
            }
            texto.innerHTML = param1 + param2;
            param1 = texto.innerHTML;
            param2 = 0;
        break;

        case "-":
            if(param2 === ""){
                param2 = 0;
            }
            texto.innerHTML = param1 - param2;
            param1 = texto.innerHTML;
            param2 = 0;
        break;

        case "*":
            if(param2 === ""){
                param2 = 1;
            }
            texto.innerHTML = param1 * param2;
            param1 = texto.innerHTML;
            param2 = "";
        break;

        case "/":
            if(param2 === ""){
                param2 = 1;
            }
            const valor = (param2==0) ? "Error" : (param1/param2);
            texto.innerHTML = valor;
            if(texto.innerHTML != "Error"){
                param1 = texto.innerHTML;
            }
            else{
                param1 = 0;
            }
            param2 = "";
        break;

        case "%":
            if(param2 === ""){
                param2 = 100;
            };
            texto.innerHTML = param1 * (param2/100);
            param1 = texto.innerHTML;
            param2 = "";
    }
})