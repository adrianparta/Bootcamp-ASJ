let colors = generateRandomColors(6);
const cuadrados = document.querySelectorAll(".square");
const reset = document.getElementById("reset");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const h1 = document.getElementById("h1");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const divHard = document.getElementsByClassName("hard");

easy.addEventListener("click", ()=>{
    easy.setAttribute("class", "selected");
    hard.setAttribute("class", "");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    console.log(pickedColor);
    colorDisplay.innerText = pickedColor;
    for(let i = 0; i<colors.length; i++){
        let cuadrado = cuadrados[i];
        let color = colors[i];
        cuadrado.style.backgroundColor = color;
        cuadrado.addEventListener("click", ()=>cuadradoClickeado(cuadrado))
    }


    for (let i = 0; i<3; i++) {
        divHard[i].style.display = "none";
    }

})
hard.addEventListener("click", ()=>{
    location.reload();
})


reset.addEventListener("click", ()=>{
    if(message.innerText === "Correcto!"){
        location.reload();
    }
})

for(let i = 0; i<colors.length; i++){
    let cuadrado = cuadrados[i];
    let color = colors[i];
    cuadrado.style.backgroundColor = color;
    cuadrado.addEventListener("click", ()=>cuadradoClickeado(cuadrado))
}


let pickedColor = pickColor();
colorDisplay.innerText = pickedColor;

function cuadradoClickeado(cuadrado){
    const color = cuadrado.style.backgroundColor;
    if(color == pickedColor){
        message.innerText = "Correcto!"
        h1.style.color = color;

        for (const cuadrado of cuadrados) {
            cuadrado.style.backgroundColor = color;
        }

    } else {
        message.innerText = "Intente nuevamente"
        cuadrado.style.backgroundColor = "#232323"
    }
} 

function pickColor(){
    const random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r + ", " + g + ", " + b})`;   
}

function generateRandomColors(num){
    const arrayColores = [];
    for (let i = 0; i < num; i++) {
        const randomColorCreated = randomColor();
        arrayColores.push(randomColorCreated);
    }

    return arrayColores;
}

generateRandomColors(3);