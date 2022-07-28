function Producto (nombre, precio , stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    }
    const pinA = new Producto ("Pin de rock" , 200 , 20)
    const pinB = new Producto ("Pin de rock devil" , 200 , 20)
    const pinC = new Producto ("Pin de rock N Roll" , 200 , 20 )
    const remeraA = new Producto ("Remera de Rock" , 2000 , 10)
    const remeraB = new Producto ("Remera de Punk Rock" , 2000 , 10)
    const remeraC = new Producto ("Remera de Punk Rock de Mujer" , 2000 , 10)
    const gorraA = new Producto("Gorra de Estrella Converse", 1200 , 15)
    const gorraB = new Producto("Gorra de Calabera", 1200 , 15)
    const gorraC = new Producto("Gorra de Punk Rock", 1200 , 15)
     
    let listaDeProductos = [gorraA , gorraB , gorraC , pinA , pinB , pinC , remeraA , remeraB , remeraC]
    
    
    const listaTotalProductos = listaDeProductos.map((producto) => producto.nombre)
    
    
    let descripcionProducto = prompt("Ingrese que cantidad de compras desea hacer: ")
    
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
    
        let compraProducto = prompt("Ingrese el nombre del producto que quiere comprar: \n RECUERDE SOLO PONER EL NOMBRE DEL ARTICULO \n EJ:(gorra) \n" + listaTotalProductos.join("\n -"))
        let cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto que quiere comprar:"))
    
        if(compraProducto.toLowerCase() == "Pin".toLowerCase()){
            calculoStock(cantidadProducto, pinA.stock, pinA.precio)
        }
        else if(compraProducto.toLowerCase() == "Gorra".toLowerCase()){
            calculoStock(cantidadProducto, gorraA.stock, gorraA.precio)
        }
        else if(compraProducto.toLowerCase() == "Remera".toLowerCase()){
            calculoStock(cantidadProducto, remeraA.stock, remeraA.precio)
        }
        
        else{
            alert("Producto invalido")
        }
    }
    
