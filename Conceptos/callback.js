
function saludar(nombre){
    alert('hola' + nombre)
}

function procesarEntradaUsuario(callback){
    let nombre = prompt("Ingrese un nombre");
    callback(nombre);
}

// procesarEntradaUsuario(saludar)