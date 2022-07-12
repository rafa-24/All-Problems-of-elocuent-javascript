/*
Define una función recursiva esPar que corresponda a esta descripción.
La función debe aceptar un solo parámetro
(un número entero, positivo) y devolver un Booleano.

Pruébalo con 50 y 75. Observa cómo se comporta con -1.
Por qué? Puedes pensar en una forma de arreglar esto?
*/

let esPar = function (num) {
    // caso base
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else if (num < 0) {
        return undefined;
    }
    else {
        // recursion
        return esPar(num - 2)
    }
}
console.log(esPar(-1))