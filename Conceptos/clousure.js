function crearSumador(x){

    return function(y){

        return x+y;
    }
}

var suma5 = crearSumador();
var suma10 = crearSumador();

console.log(suma5(2));