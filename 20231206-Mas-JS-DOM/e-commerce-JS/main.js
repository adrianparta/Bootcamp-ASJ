const btnCarrito = document.getElementsByClassName("card");
const btnCantidadmenos = document.getElementsByClassName("cantidad-menos")[0];
const btnCantidadmas = document.getElementsByClassName("cantidad-mas")[0];
const cantidadLabel = document.getElementById("cantidad-label");
const addToCart = document.getElementById("add-cart");
const productosCarrito = document.getElementById("productos-carrito");
let aux = [];

for (let i = 0; i < btnCarrito.length; i++) {
    redireccionar(btnCarrito[i]); 
};

function redireccionar(obj){
    obj.addEventListener("click", () =>{
        producto = obj.getElementsByTagName("h2")[0].innerHTML;
        precio = obj.getElementsByTagName("span")[0].innerHTML;
        imagen = obj.getElementsByTagName("img")[0].getAttribute("src");

        localStorage.setItem("producto", producto);
        localStorage.setItem("precio", precio);
        localStorage.setItem("imagen", imagen);

        window.location.href ="detail.html";
    })
};

function cargarCarrito(){
    aux = (localStorage.getItem("carrito") === null) ? [] : JSON.parse(localStorage.getItem("carrito"));

    aux.push(
        {
        prod: localStorage.getItem("producto"),
        prec: localStorage.getItem("precio"),
        img: localStorage.getItem("imagen"),
        cant: localStorage.getItem("cantidad")
        }
    );

    localStorage.setItem("carrito", JSON.stringify(aux));
}


//traigo los atributos del producto que se haya seleccionado
if (window.location.href.endsWith("/detail.html")){
    let imagen = document.getElementsByTagName("img")[2];
    let precio = document.getElementById("precio");
    let producto = document.getElementById("producto");
    
    imagen.setAttribute("src", localStorage.getItem("imagen"));
    precio.innerHTML = localStorage.getItem("precio");
    producto.innerHTML = localStorage.getItem("producto");
}

//logica de los botones de cantidad y add to cart

if(window.location.href.endsWith("cart.html")){
    const btnMenos = document.getElementsByClassName("cantidad-menos");
    const btnMas = document.getElementsByClassName("cantidad-mas");
    const cantidadTotal = document.getElementById("cantidad-total");
    const cantidadEnvio = document.getElementById("precio-envio");
    const cantidadTotalEnvio = document.getElementById("precio-total-envio");
    const pagar = document.getElementById("pagar");

    let mis_productos;
    let precioCarrito;

    window.addEventListener("load", () => {
        mis_productos = JSON.parse(localStorage.getItem("carrito"));
        precioCarrito = document.getElementsByClassName("precio-carrito");
        cantidadTotal.innerHTML = 0;
        cantidadEnvio.innerHTML = parseFloat(cantidadTotal.innerHTML)/10;
        cantidadTotalEnvio.innerHTML = parseFloat(cantidadTotal.innerHTML) * 1.1;

        for(let i = 0; i< mis_productos.length; i++){
            productosCarrito.innerHTML += `
            <div class="tarjeta-carrito">
            <img class="imagen-carrito" src="${mis_productos[i].img}" alt="">
            <div class="datos-carrito">
            <h3>${mis_productos[i].prod}</h3>
            <div id="cantidad-carrito">
            <button class="cantidad-menos">-</button>
            <label id="cantidad-carrito">${mis_productos[i].cant}</label>
            <button class="cantidad-mas">+</button>
            </div>
            <p>$ <strong class="precio-carrito">${mis_productos[i].cant * mis_productos[i].prec}</strong></p>
            </div>
            </div>`;
            cantidadTotal.innerHTML = String(parseFloat(cantidadTotal.innerHTML) + mis_productos[i].cant * mis_productos[i].prec);
            cantidadEnvio.innerHTML = parseFloat(cantidadTotal.innerHTML)/10;
            cantidadTotalEnvio.innerHTML = Number(cantidadTotal.innerHTML) * 1.1;

        }

        if(mis_productos != undefined){
                for(let i=0; i<mis_productos.length;i++){
                    if(btnMenos[i] != undefined){
                        btnMenos[i].addEventListener("click", ()=>{
                            if(parseInt(btnMenos[i].nextElementSibling.innerHTML) > 0) {
                                btnMenos[i].nextElementSibling.innerHTML = String(parseInt(btnMenos[i].nextElementSibling.innerHTML) -1); 
                                mis_productos[i].cant = btnMenos[i].nextElementSibling.innerHTML;
                                localStorage.setItem("carrito", JSON.stringify(mis_productos));
                                precioCarrito[i].innerHTML = mis_productos[i].cant * mis_productos[i].prec;
                                cantidadTotal.innerHTML = String(parseFloat(cantidadTotal.innerHTML) - mis_productos[i].prec);
                                cantidadEnvio.innerHTML = parseFloat(cantidadTotal.innerHTML)/10;
                                cantidadTotalEnvio.innerHTML = Number(cantidadTotal.innerHTML) * 1.1;

                            }   
                    })
                    if(btnMas[i] != undefined){
                        btnMas[i].addEventListener("click", () =>{
                            btnMas[i].previousElementSibling.innerHTML = String(parseInt(btnMas[i].previousElementSibling.innerHTML) +1);
                            mis_productos[i].cant = btnMas[i].previousElementSibling.innerHTML;
                            localStorage.setItem("carrito", JSON.stringify(mis_productos));
                            precioCarrito[i].innerHTML = mis_productos[i].cant * mis_productos[i].prec;
                            cantidadTotal.innerHTML = String(parseFloat(cantidadTotal.innerHTML) + parseFloat(mis_productos[i].prec));
                            cantidadEnvio.innerHTML = parseFloat(cantidadTotal.innerHTML)/10;
                            cantidadTotalEnvio.innerHTML = Number(cantidadTotal.innerHTML) * 1.1;

                        })
                    }
                    
                }
            }

            pagar.addEventListener("click", ()=>{
                localStorage.clear();
                alert("Muchas gracias por su compra.");
                window.location.href = "index.html";
            })
        }
    });

    

}
else if(window.location.href.endsWith("detail.html")){
    btnCantidadmenos.addEventListener("click", () => {
        if(parseInt(cantidadLabel.innerHTML) > 0) {
            cantidadLabel.innerHTML = String(parseInt(cantidadLabel.innerHTML) -1); 
        }
    })
    
    btnCantidadmas.addEventListener("click", () => {
        cantidadLabel.innerHTML = String(parseInt(cantidadLabel.innerHTML) + 1); 
    })
    
    addToCart.addEventListener("click", () =>{
        localStorage.setItem("cantidad", cantidadLabel.innerHTML)
        cargarCarrito();
        window.location.href = "cart.html";
    })
}
