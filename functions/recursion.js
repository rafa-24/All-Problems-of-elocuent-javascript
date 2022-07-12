// hacer una funcion que potencie

function potencia(base, exponente) {
    // caso base
    if (exponente === 0) {
        return 1;
    } else {
        // recursion
        console.log(base);
        return base * potencia(base, exponente - 1);
    }
}

console.log(potencia(2, 3));