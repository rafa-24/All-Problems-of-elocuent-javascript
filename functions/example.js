// alcance global, local , bloque

let x = 20; // global
if (true) { // block
    let y = 30; // block
    var z = 20; // global
    console.log(x + y + z);
}

console.log(x + z);

// pila de llamadas
function saludar(quien) {
    console.log("Hola " + quien);
}
saludar("Rafael");
console.log("adios");

// Parametros adicionales

function cuadrado(x) { return x * x };

// Ventaja de los parametros adicionales

function menos(a, b) {
    if (b === undefined) { return -a }
    else return a - b;
}

console.log(menos(10))
console.log(menos(5, 5))

function envolver(n) {
    let local = n;
    return () => local;
}

let envolver1 = envolver(1);
let envolver2 = envolver(2);

console.log(envolver1())
console.log(envolver2())

// funciones que multipliquen por una cantidad arbitraria.

function multiplicar(x) {
    return numero => numero * x // numero es un funcion
}

const duplicar = multiplicar(5);
console.log(duplicar(2))