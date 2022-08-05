let imagen = document.getElementById
function Producto(nombre, precio, stock, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;

    /* imagen.querySelector = (".producto__imagen")  */
}
const pinA = new Producto("Pin de rock", 200, 20,)
const pinB = new Producto("Pin de rock devil", 200, 20)
const pinC = new Producto("Pin de rock N Roll", 200, 20)
const remeraA = new Producto("Remera de Rock", 2000, 10)
const remeraB = new Producto("Remera de Punk Rock", 2000, 10)
const remeraC = new Producto("Remera de Punk Rock de Mujer", 2000, 10)
const gorraA = new Producto("Gorra de Estrella Converse", 1200, 15)
const gorraB = new Producto("Gorra de Calabera", 1200, 15)
const gorraC = new Producto("Gorra de Punk Rock", 1200, 15)

let listaDeProductos = [gorraA, gorraB, gorraC, pinA, pinB, pinC, remeraA, remeraB, remeraC]



let listaTotalProductos = listaDeProductos.map((producto) => producto.nombre)

for (const producto of listaDeProductos) {
    
    let tarjeta = document.createElement("div")
    tarjeta.className = "card-container-JS"
    tarjeta.innerHTML +=

        `
        <card>
            <h2> ${producto.nombre}</h2>
            <p> El Precio es de : <strong>${producto.precio}</strong></p>
            <p> Nuestro stock disponible es de : <strong>${producto.stock}</strong></p>
            <button> Comprar </button>
        <card>
        `

    document.body.append(tarjeta)
}




let CantidadCompra = getElementById("inputCompras" )
/* prompt("Ingrese que cantidad de compras desea hacer:") */

let cantidadTotal = 0
let precioTotal = 0



function calculoPrecio(cantidad, precio) {
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, stock, precio) {
    if (stock >= cantidad) {

        calculoPrecio(cantidad, precio)
        alert(`El precio total es de: $  ${(cantidad * precio)}`)
    }
    else {
        alert(`No disponemos de esa cantidad en stock. Nuestro stock actual es de:  ${stock} unidades`)
    }
}




for (let i = 0; i < CantidadCompra; i++) {

    let compraProducto = prompt(`Ingrese el nombre del producto que quiere comprar: \n RECUERDE SOLO PONER EL NOMBRE DEL ARTICULO \n EJ:(gorra) \n ${listaTotalProductos.join("\n -")}`)
    let cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto que quiere comprar:"))

    if (compraProducto.toLowerCase() == "Pin".toLowerCase()) {
        calculoStock(cantidadProducto, pinA.stock, pinA.precio)
    }
    else if (compraProducto.toLowerCase() == "Gorra".toLowerCase()) {
        calculoStock(cantidadProducto, gorraA.stock, gorraA.precio)
    }
    else if (compraProducto.toLowerCase() == "Remera".toLowerCase()) {
        calculoStock(cantidadProducto, remeraA.stock, remeraA.precio)
    }

    else {
        alert("Producto invalido")
    }
}


let formulario = document.getElementById("formulario")


formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e) {

    e.preventDefault()
    let arrayform = e.target

    let mensajeJS = document.getElementById("mensajeJS")
    mensajeJS.className = "h3-JS"

    mensajeJS.innerHTML = ""

    mensajeJS.innerText = `Gracias por su feedback y la suscripción ${arrayform[0].value}`

    mensajeJS.append(mensajeJS)

}
