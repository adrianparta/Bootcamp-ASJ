h2 = document.getElementById("h2");
btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((json) => {
        h2.innerText = json.value;
    })
})

