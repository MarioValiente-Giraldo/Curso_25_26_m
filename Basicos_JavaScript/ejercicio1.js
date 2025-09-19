//Primer ejercicio de JavaScript
console.log("Hola Mundo!");
//<-------------Declarar función------------->


 
/**
 * Función que devuelve la suma de dos números
 * @param {number} a [a=0] - primer número a sumar con el valor por defecto a 0 
 * @param {number} b [b=0] - segundo número a sumar con el valor por defecto a 0
 * @returns {number} - la suma de a + b 
 */
function suma(a=0, b=0){
    return a + b;
}
//<-------------Inicializar la función------------->
console.log(suma(3, 5));
console.log(suma(10, 5));



