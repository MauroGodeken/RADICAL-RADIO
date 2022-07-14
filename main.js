


for(let i = 3 ; i >=1 ; i--){ 

   let nombreUsuario = prompt("Ingrese su Nombre:");

    alert("Bienvenido " + nombreUsuario + " .");
let cantidadEntradas = parseInt(prompt("Elegí un numero entre 1 y 10 " + nombreUsuario + "." + "\n ¡¡¡Te podes ganar una entrada!!!"))

    if (cantidadEntradas == 5){
        alert("GANASTE UNA ENTRADA GRATIS PARA NUESTRO PROXIMO SHOW")
        

    }
    else {
        alert("Que lástima, la proxima será")
    }
        
}
