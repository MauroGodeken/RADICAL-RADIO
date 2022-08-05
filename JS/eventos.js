function Producto(nombre, precio, stock, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;

    
}

const pinA = new Producto("Pin de rock", 200, 20,"../Imagenes/pin-radical-mano.jpg")
const pinB = new Producto("Pin de rock devil", 200, 20,"../Imagenes/pin-radical-mano-devil.jpg") 
const pinC = new Producto("Pin de rock N Roll", 200, 20,"../Imagenes/rock-and-roll.jpg")
const remeraA = new Producto("Remera de Rock", 2000, 10,"../Imagenes/remera-radical-guitarra.jpg")
const remeraB = new Producto("Remera de Punk Rock", 2000, 10,"../Imagenes/remera-radical-punk-rock.jpg")
const remeraC = new Producto("Remera de Punk Rock de Mujer", 2000, 10, "../Imagenes/remera-radical-radi-mujer.jpg")
const gorraA = new Producto("Gorra de Estrella Converse", 1200, 15,"../Imagenes/gorra-punk-rock.jpg")
const gorraB = new Producto("Gorra de Calabera", 1200, 15,"../Imagenes/gorra-radical-radio.jpg" )
const gorraC = new Producto("Gorra de Punk Rock", 1200, 15,"../Imagenes/gorra-punk-rock-gangster.jpg")

let listaDeProductos = [gorraA, gorraB, gorraC, pinA, pinB, pinC, remeraA, remeraB, remeraC]



let listaTotalProductos = listaDeProductos.map((producto) => producto.nombre)

for (const producto of listaDeProductos) {
    if(
        producto.stock !=0){

           
    let tarjeta = document.createElement("div")
    tarjeta.className = "card-container-JS"
    tarjeta.innerHTML +=

        `
        <card>
            <h2> ${producto.nombre}</h2>
            <img src="${producto.imagen}" heigt="200px" width="200" <img/> 
            <p> El Precio es de : <strong>${producto.precio}</strong></p>
            <p> Nuestro stock disponible es de : <strong>${producto.stock}</strong></p>
            <button"> Comprar </button>
        <card>
        `
    let containerCards = document.getElementById("containerCards")
    containerCards.append(tarjeta)
}}

let botonComprar = document.getElementById("botonComprar")

botonComprar.addEventListener("click", addToCart())

function addToCart(){

    let compra = document.createElement("div")
    compra.className= "containerCarrito"
    compra.innerHTML +=
    `
    <h2> Gracias por tu compra</h2>
    
    `
    let agregar = document.getElementsById("agregar")
    agregar.append(compra)

}







