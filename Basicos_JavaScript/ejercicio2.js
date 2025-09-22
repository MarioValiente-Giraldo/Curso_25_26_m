/*Crear un juego de un dado que utlizando una función llamada tirar dado, permita tirar un dado de 6 caras, con valores del 1 al 6. 
 Ademas crear una función llamada simular que le pase el número de tiradas y me devuelva el número que ha salido más veces 
*/

//<--------------Declarar variables-------------->
const numeroSacados = [];
  let numerosRepetidos = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };

//<--------------Declarar función tirarDado-------------->
/**
 * 
 * @returns {number} - número aleatorio entre 1 y 6
 */
function tirarDado(){
    let numero = Math.floor(Math.random() * 6 ) + 1;
    numeroSacados.push(numero)
    return numero
}

//<--------------Declarar función simular-------------->
/**
 * 
 * @param {number} x - número de veces que se tira el dado 
 * @returns - número que más ha salido
 */
function simular(x=0){
    for(let i=0; i<x; i++){
        tirarDado();
    }

    for(let j=0; j<numeroSacados.length; j++){
        numerosRepetidos[numeroSacados[j]] += 1;
    }
    
    let numeroMasRepetido = 0;
    for(const numero in numerosRepetidos){
        if(numerosRepetidos[numero] > numeroMasRepetido){
            numeroMasRepetido = numero;
        }
    }

    return numeroMasRepetido;

}
console.log(tirarDado());

console.log("El número que más ha salido es el: " + simular(10));