const productos = [
    { //tortas
        id:"torta-1",
        nombre:"Lemon Pie",
        imagen:"./img/lemon-pie.jpg",
        categoria:{nombre:"tortas", id:"torta-1"},
        precio:2500
    },
    {
        id:"torta-2",
        nombre:"Torta Brownie",
        imagen:"./img/torta-brownie.jpg",
        categoria:{nombre:"tortas", id:"torta-2"},
        precio:2800
    },
    {
        id:"torta-3",
        nombre:"Crumble",
        imagen:"./img/crumble.png",
        categoria:{nombre:"tortas", id:"torta-3"},
        precio:2900
    },
    {
        id:"torta-4",
        nombre:"Pastafrola",
        imagen:"./img/pastafrola.jpg",
        categoria:{nombre:"tortas", id:"torta-4"},
        precio:2300
    },
    //postres
    {id:"postre-1",
    nombre:"Parfait",
    imagen:"./img/parfait-cafe.jpg",
    categoria:{nombre:"postres", id:"postre-1"},
    precio:3000
    },
    {
        id:"postre-2",
        nombre:"Tiramisu",
        imagen:"./img/tiramisu.jpeg",
        categoria:{nombre:"postres", id:"postre-2"},
        precio:3200
    },
    { //alfajores
        id:"alfajor-1",
        nombre:"Alfajor Chocolate",
        imagen:"./img/alfajor-mar.jpeg",
        categoria:{nombre:"alfajores", id:"alfajor-1"},
        precio:2500
    },
    {
        id:"alfajor-2",
        nombre:"Alfajor Fruta",
        imagen:"./img/alfajor-fruta.jpg",
        categoria:{nombre:"alfajores", id:"alfajor-2"},
        precio:2500},
    {
        id:"alfajor-3",
        nombre:"Alfajor Oreo",
        imagen:"./img/alfajor-oreo.jpg",
        categoria:{nombre:"alfajores", id:"alfajor-3"},
        precio:2500
    },

]

console.log(productos)

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

// For Each para mostrar los productos en el carrito
function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.nombre}</h3>
            <p class="producto-precio>${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}"></button>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;
            // fijarme de mover el coso agregar para abajo para que se vea el precio de los productos
        contenedorProductos.append(div)
    })
}

cargarProductos(productos);



// Que los botones agreguen los productos al array carrito:


let comprar = document.querySelectorAll(".producto-agregar")
//console.log(comprar)

const numerito = document.querySelector("#numerito")


comprar.forEach(boton =>{boton.addEventListener ("click", (e) =>{
    
    const idBoton = e.currentTarget.id;
    console.log(idBoton)

    const productoAgregado = productos.find(producto => producto.id == idBoton)
    console.log(productoAgregado);

    productosEnCarrito.push(productoAgregado)
    console.log(productosEnCarrito);
    actualizarNumerito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
            })  
        })

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.length
    console.log(nuevoNumerito)
    numerito.innerText = nuevoNumerito
}

    // numero de carrito con LS
    let productosEnCarrito;

    let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
    
    if (productosEnCarritoLS) {
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
        actualizarNumerito();
    } else {
        productosEnCarrito = [];
    }










