// // Uso de los arrays 

// //declaración 
// const edades=[1,23,4,67,4,234,2,444,663];

// const frutas=["pera","manzana","fresa"];

// //usando el constructor

// const codigoPostales = new Array();

// const cc = new Array("asdasda","adasdasd","fadsa");

// // Añadir
// edades.push(10); //añadiendo al final.
// edades.unshift(5); //añadiendo al principio. 


// // Eliminar
// edades.pop(); //elimina el último dato, me retorna el dato eliminado.
// edades.shift(); //elimina el primer dato, me retorna el dato eliminado.

// // **** slice - Extrae trozos de un array retornando un nuevo array sin mutar el array original 

// edades.slice(1,6);
// edades.slice(-5); //Extrae los 5 ultimos 
// edades.slice(1,-1); //Extrae desde la posicion 1 hasta el penultimo elemento del array


// // ************************ map
// edades.map((edad)=> edad*2);

// //*************************** filter
// edades.filter((edad)=> edad>=18);



/* Dado un array de nombres, crear una función llamada mayúsculas que ponga en mayúsculas todos 
 los elementos del array que yo le pase como parámetro */
 const nombresTest = ["Mario","Pepe","Manolo","Carolina","Antonio"];
 /**
  * 
  * @param {string[]} nombres - Se le pasa un array de nombres
  * @returns {string[]} - Retorna un array con los nombres en mayusculo de dicho array pasado como parámetro
  */
 function nombresMayuscula(nombres){
    return nombres.map((nombre => nombre.toUpperCase()));
 }

 console.log(nombresMayuscula(nombresTest));


//Crear una función llamada "precios con IVA", que al pasarle un array de precios me los devuelva con el IVA incluido.


const preciosTest = [24.21,12.02,98,2];
/**
 * 
 * @param {number[]} precios - Se le pasa por parámetro un array que contiene precios sin el IVA aplicado
 * @returns {number[]} - Retorna un array de los precios pasados con el IVA incluido
 */
function preciosIva(precios){
    return precios.map((precio) => (precio * 1.21).toFixed(2));
}
console.log(preciosIva(preciosTest))

//Crear una función impares cuadrado que le pase un array de numeros y me devuelva solo los impares elevados al cuadrado.

const numerosImparesTest = [2,3,4,5,6,7];
/**
 * 
 * @param {number[]} numeros - Se le pasa un array de números 
 * @returns  {number[]} - Retorna un array de los números impares al cuadrado
 */
function imparesCuadrado(numeros){
    return numeros.filter((numero) => numero % 2 !== 0).map((numero)=> numero ** 2);

}

console.log(imparesCuadrado(numerosImparesTest))

/*Crear una función llamada "normalizar email" que le pase un array de emails que pueden llevar espacios al principio y al final del email,
 y quiero que me lo devuelva sin espacios. */

 const emailsTest = ["mariovaliente0@gmail.com ", " hola@hola.hola ", " adios@adios.adios"]
/**
 * 
 * @param {string[]} emails - Recibe un array de emails 
 * @returns {string[]} - Retorna los emails pasados eliminando los espacios
 */
 function normalizarEmails(emails){
    return emails.map((email)=>email.trim());
 }

 console.log(normalizarEmails(emailsTest));


 /*Crear una función llamada "filtrar longitud" que le pase como parametro nombres y un tamaño, 
y que me devuelva solo los nombres cuya longiutd es mayor o igual al parametro que le he pasado*/
const nombresLongitudTest = ["Mario","Braquiosaurio","Mew","Eustaquio"]
/**
 * 
 * @param {string[]} nombres - Recibe un array de nombres 
 * @param {number} longitud - Recibe un número que determina la longitud de los nombres a la que se va a filtrar 
 * @returns {string[]} - Retorna el array cuyo nombre cumpla la longitud establecida
 */
function filtrarLongitud(nombres,longitud){
    return nombres.filter((nombre)=>nombre.length>=longitud);
}

console.log(filtrarLongitud(nombresLongitudTest,6));

//Normalizar nombres propios que le pase como parametro un array de nombres con apellidos y me los devuelva con la letra capital en mayúscula

const nombresFormalizadosTest = ["mARio VALIENTE", " CAROlina coLLado"]
/**
 * 
 * @param {string[]} nombres - Recibe un array de nombres que pueden incluir apellidos
 * @returns {string[]} - Retorna el array de nombres formalizados, es decir, con sus letras capitales en mayúscula
 */
function nombresFormalizados(nombres) {
  return nombres.map((nombre) => nombre.toLowerCase().split(" ")
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join(" ") 
  );
}

console.log(nombresFormalizados(nombresFormalizadosTest));

