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
const numeroTiradas = 0;


//<--------------Declarar función tirarDado-------------->
function tirarDado(){
    let numero = Math.floor(Math.random() * 6 ) + 1;
    numeroSacados.push(numero)
    return numero
}

//<--------------Declarar función simular-------------->
function simular(){
    
}



console.log(tirarDado());