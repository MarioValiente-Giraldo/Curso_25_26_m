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


//Crear una función llamada "precios con IVA", que al pasarle un array de precios me los devuelva con el IVA incluido.

//Crear una función impares cuadrado que le pase un array de numeros y me devuelva solo los impares elevados al cuadrado.

/*Crear una función llamada "normalizar email" que le pase un array de emails que pueden llevar espacios al principio y al final del email,
 y quiero que me lo devuelva sin espacios.  */

 /*Crear una función llamada "filtrar longitud" que le pase como parametro nombres y un tamaño, 
y que me devuelva solo los nombres cuya longiutd es mayor o igual al parametro que le he pasado*/


//Normalizar nombres propios que le pase como parametro un array de nombres y me los devuelva con la letra capital en mayúscula