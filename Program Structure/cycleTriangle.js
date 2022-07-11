/*
Escriba un ciclo que haga siete llamadas a console.log 
para generar el siguiente triángulo:

#
##
###
####
#####
######
#######
Puede ser útil saber que puedes encontrar la longitud de un string 
escribiendo .length después de él:

*/
let caracter = "#";
for (let i = 1; i <= 7; i++) {
    console.log(caracter);
    caracter = caracter + "#";
}