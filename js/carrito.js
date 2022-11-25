let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

let botonesEliminar = document.querySelectorAll(".boton-carrito-producto-eliminar")

function cargarProductosCarrito(){
if(productosEnCarrito){
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled")
    contenedorCarritoAcciones.classList.remove("disabled")
    contenedorCarritoComprado.classList.remove("disabled")

    productosEnCarrito.forEach(producto => {


        
        const div = document.createElement("div")
        div.classList.add("carrito-producto")
        div.innerHTML = `
                        <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="carrito-producto-titulo">
                            <small>Título</small>
                            <h3>${producto.nombre}</h3>
                        </div>
                        <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
    `;

    contenedorCarritoProductos.append(div);
    })
    

} else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
}
    actualizarBotonesEliminar()
}

cargarProductosCarrito()

// Actualizar botones de eliminar

actualizarBotonesEliminar()

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

// funcion para eliminar producto con splice
function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        
    productoEliminado = productosEnCarrito.splice(index, 1);
    

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    function actualizarProductosEliminados() {
        
        productosEnCarrito.innerHTML = "";
        

        //cargarProductosCarrito();
    }

    actualizarProductosEliminados();

}





