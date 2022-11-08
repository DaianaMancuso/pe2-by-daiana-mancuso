
alert("Bienvenido a ' By Daiana Mancuso' ! Deleitese con nuestros productos!")

let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")
console.log("Bienvenido " + nombre + " " + apellido + " !") 

// creacion de un objeto
class Producto{
    constructor (id,nombre,precio){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
}

const producto1 = new Producto (1,"Lemon Pie",2500);


//Definicion de array de objetos con los productos del emprendimiento
const productos = [
    producto1,
    {id:2, nombre: "Torta Brownie", precio:3000}, 
    {id:3, nombre: "Crumble de manzana", precio:2900}, 
    {id:4, nombre: "Parfait de Cafe", precio:3100}, 
    {id:5, nombre: "Torta Brownie", precio:3000}, 
    {id:6, nombre: "Pasta Frola", precio:2500}
]
console.log(productos)

precio_acumulador= 0;

// Funcion para que usando el id, el usuario pueda ir agregando los productos que quiera
function cargar_productos (){
    let cargar = "Vaya agregando de a uno los productos que desee comprar. Cuando finalice, escriba: '9' \n\n";
    for (let producto of productos) { 
        cargar += producto.id + " - " + producto.nombre + " => $" + producto.precio + "\n";
    }
    
    let id_producto = 0;

    while (id_producto <= 6) { // bucle para ir agregando los distintos productos al carrito. Solo hay 6 productos, id >6 no se puede
        let id_producto = parseInt(prompt(cargar));

        if (id_producto <= 6) {
            id_producto = parseInt(id_producto);
            console.log(id_producto); 
            let producto = buscar_producto(id_producto); 
            console.log(producto); 
            agregar_producto(producto);

            precio_acumulador = precio_acumulador + producto.precio
            console.log("subtotal: $" + precio_acumulador)
        } else if (id_producto == 9){
            alert("Ingresó '9', continúe para pagar.")
            break;
        }else if (id_producto >6){
            alert("Numero de producto incorrecto. Verifique y vuelva a intentarlo")
        }
    }
}

// cuando elija el producto que quiere, que el sistema lo busque con funcion de orden superior find
function buscar_producto (id){ 
    return productos.find((elemento) => elemento.id == id); 
}

// cuando eligio y se busco el producto en el array con find, que lo agregue y te muestre el nuevo carrito
const carrito = [];

function agregar_producto (producto){ 
    carrito.push(producto); 
    console.log("Producto agregado");
    console.log(carrito);
    console.log(carrito.length)


}

// Que muestre el total de productos:
function mostrar_carrito (){
    console.log("Usted comprará: " + carrito.length + "  productos.")
    console.log("total a abonar: $" + precio_acumulador)
}


cargar_productos();
mostrar_carrito();


// Descuentos (por efectivo y cantidad de productos comprados)
    function descuento_cantidad (cantidad){
        if (carrito.length > 3){
            descuento_porcentaje = (precio_acumulador*10)/100;
            descuento = precio_acumulador - descuento_porcentaje

            console.log("Total a abonar con descuento por cantidad: $" + descuento);
        } else if (cantidad <3){
            console.log("Total a abonar: $" + precio_acumulador)
        }
    }

    descuento_cantidad()

    function descuento_forma_pago (){
        let forma_pago_cliente = parseFloat(prompt(" Cómo abonará? (1) efectivo (2) tarjeta?"));

    switch(forma_pago_cliente){
        case 1:
            let descuento2_porcentaje = (precio_acumulador*10)/100;
            let descuento2 = precio_acumulador - descuento2_porcentaje;
            console.log("Usted abonará $" + descuento2 + "  con descuento por pago en efectivo")
            break;
        case 2:
            console.log("Usted debe abonar $" + precio_acumulador)
    }
    }

    descuento_forma_pago();

