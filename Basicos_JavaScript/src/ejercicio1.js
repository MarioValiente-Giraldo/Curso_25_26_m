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

console.log("La suma de 3 + 5 es: " + suma(3, 5));
console.log("La suma de 10 + 5 es: " + suma(10, 5));

function saludar(nombreUsuario){
    return nombreUsuario?? 'Usuario';

}


let nombre='María';
console.log(saludar(nombre));


//Crear una funcion de aprobados y suspensos, que te diga si estás aprobado o suspenso. Si el numero es igual o mayor de 9 es sobresaliente, si está entre 9 y 5 aprobado, si es menor suspenso.


/*function aprobado(nota){

}
*/

// const aprobados = (nota=0) => {
//     return nota>=5? 'Aprobado' : 'Suspenso';
// }

const aprobados = (nota=0) => nota>=5? 'Aprobado' : 'Suspenso';
const aprobadosV2 = (nota=0) =>nota>=9? 'Sobresaliente': nota>=5? 'Aprobado' : 'Suspenso';


console.log(aprobados(9));
console.log(aprobadosV2(9));


