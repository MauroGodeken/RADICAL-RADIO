
/* function Producto (nombre, precio , stock){
this.nombre = nombre;
this.precio = precio;
this.stock = stock;
}
const pinRock = new Producto ("Pin de rock" , 200 , 20)
const pinRockDevil = new Producto ("Pin de rock devil" , 200 , 20)
const pinRockNRoll = new Producto ("Pin de rock N Roll" , 200 , 20 )
const remeraRock = new Producto ("Remera de Rock" , 2000 , 10)
const remeraPunk = new Producto ("Remera de Punk Rock" , 2000 , 10)
const remeraPunkMujer = new Producto ("Remera de Punk Rock de Mujer" , 2000 , 10)
const gorraConverse = new Producto("Gorra de Estrella Converse", 1200 , 15)
const gorraCalabera = new Producto("Gorra de Calabera", 1200 , 15)
const gorraPunkRock = new Producto("Gorra de Punk Rock", 1200 , 15)
 */

let nombreProducto1  = "Pin de rock"
let stockProducto1 = 200
let precioProducto1  = 200

let nombreProducto2 = "Gorra de Rock"
let stockProducto2 = 100
let precioProducto2 = 1500

let nombreProducto3 = "Remera de Rock"
let stockProducto3 = 50
let precioProducto3 = 2000

let descripcionProducto = prompt("Ingrese que cantidad  de compras desea hacer: ")
/* let cantidadProducto = prompt("Cantidad") */


let cantidadTotal = 0
let precioTotal = 0

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, stock, precio){
    if(stock >= cantidad){
        calculoPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
    }
    else{
        alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + " unidades")
    }
}


for(let i = 0; i < descripcionProducto; i++){

    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \nPin\nGorra\nRemera")
    let cantidad1 = parseInt(prompt("Ingrese la cantidad del producto que quiere comprar:"))

    if(compra1 == "Pin"){
        calculoStock(cantidad1, stockProducto1, precioProducto1)
    }
    else if(compra1 == "Gorra"){
        calculoStock(cantidad1, stockProducto2, precioProducto2)
    }
    else if(compra1 == "Remera"){
        calculoStock(cantidad1, stockProducto3, precioProducto3)
    }
    
    else{
        alert("No tenemos ese producto")
    }
}
 
