/**
 * Punto 2 Prueba técnica realizada para Quind
 * Ejercicio realizados por Eduardo Jose Maya Rodriguez
 * Lenguaje empleado JavaScript con nodeJs
 */

/**
 * Escriba un programa que le pida a un usuario que ingrese
 * una cadena de caracteres y envíe un mensaje que indique
 * si la cadena contiene la letra 'a' mientras indica su
 * posición en la cadena
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Fúncion que permite encontrar la letra "a", dentro de una cadena
 * de caracteres, en caso de no encontrarala avisará que no existe 
 * esa palabra dentro de la cadena
 */
function findletterA(word){
    let hasLetterA = word.search(/a/);
    if(hasLetterA!==-1){
        console.log(`La letra 'a' está en la posición: ${hasLetterA}`);
    }else{
        console.log("La palabra no contiene la letra a");
    }
    return 0;
}

readline.question('Ingrese una palabra: ', word => {
    findletterA(word);
    readline.close();
});
 