/*Pseudocodigo
1. generar un rango dependiendo al numero mayor
2. encontrar en ese rango el numero mas pequeño
3. si lo ordeno ya obtengo el menor
*/

// Input = min(10,2)
// Output = 2

function min(num1, num2) {
    let minor;
    let range = [];
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            range.push(i);
            minor = range[0];
        }
    }
    else if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            range.push(i);
            minor = range[range.length - 1];
        }
    } else {
        minor = num1;
    }
    return minor;
}

console.log(min(-10, 0));

