//Ejercicio 1
// Dado un array de números, utiliza los métodos filter y map para obtener los números pares y
// elevarlos al cuadrado.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosAlCuadrado = numeros.filter(numero => numero % 2 === 0).map(numero => numero ** 2 );
console.log(numerosAlCuadrado);

//Ejercicio 2
// Dado un array de strings, usa reduce para concatenar todos los strings en una sola frase con espacios
// entre ellos.
const palabras = ["Hola", "mundo", "esto", "es", "JavaScript"];
const frase = palabras.reduce((frase,palabra) => frase + " " + palabra);
console.log(frase);

//Ejercicio 3
// Dado un array de números, usa some para verificar si existe algún número mayor a 100 y every para
// comprobar si todos los números son positivos.
const numerosSome = [1, 50, 75, 99];
const numeroMayor = numerosSome.some(numerosSome=>numerosSome>100);
console.log(numeroMayor);

//Ejercicio 4
// Dado un array de números desordenados, usa sort para ordenarlos de mayor a menor.
const numerosOrdenar = [5, 1, 8, 3, 10, 2];
const numerosOrdenados = numerosOrdenar.sort((a,b)=>b-a);
console.log(numerosOrdenados);

//Ejercicio 5
// Usa el método find para obtener el primer número divisible por 3 de un array, y findIndex para
// obtener su índice.
const numerosDividir = [4, 5, 9, 12, 7];
const numeroDivisible= numerosDividir.find(numero => numero % 3 ===3);
console.log(numeroDivisible);

//Ejercicio 6 
// Dado un array de números, usa forEach para sumar todos los números.
const numerosSumar = [2, 4, 6, 8];
const numerosSumados = numerosSumar.forEach(numero=>numero+numero);
console.log(numerosSumados);

//Ejercicio 7
// Dado un array de números, usa slice para obtener los primeros 3 números y splice para eliminar los
// dos últimos elementos del array original.
const numerosCortar = [10, 20, 30, 40, 50, 60];
const primerosTres= numerosCortar.slice(0,3);
console.log(primerosTres);
const numerosEliminar = numerosCortar.splice(3,2);
console.log(numerosEliminar);

//Ejercicio 8
// Dado un objeto que representa un producto, usa Object.keys para obtener las claves del objeto y
// Object.values para obtener sus valores.
const producto = { nombre: "Laptop", precio: 1000, stock: 5 };

const claves = Object.keys(producto);
const valores = Object.values(producto);

console.log(claves);
console.log(valores);

//Ejercicio 9
// Dado un objeto que representa un coche, usa Object.entries para convertirlo en un array de pares
// clave-valor.
const coche = { marca: "Toyota", modelo: "Corolla", año: 2020 };
const pares = Object.entries(coche);
console.log(pares);

//Ejercicio 10
// Dado un objeto de configuración, usa Object.assign para crear una copia del objeto con una
// propiedad adicional.
const configuracion = { tema: "oscuro", idioma: "español" };
const objectoNuevo = Object.assign({},configuracion,{ nuevaClave: true}); 
/*//El método assing se usa de la siguiente manera Object.assign(
    1º Parámetro es lo que devuelve, en este caso es un objeto {}
    2º Parámetro es lo que va a copiar, en este caso el objeto "configuracion"
    3º Parámetro es lo que vayamos a cambiar, como sobreescribir o añadir algo, en esta caso hemos creado una nueva clave con su valor.
)
 */
console.log(objectoNuevo);


//Ejercicio 11
// Crea un objeto que combine dos objetos dados usando el spread operator (...).
const usuario = { nombre: "Ana", edad: 30 };
const detalles = { ciudad: "Madrid", ocupacion: "Ingeniera" };
const combinacion = {...usuario,...detalles};
console.log(combinacion)

//Ejercicio 12
// Dado un objeto con varias propiedades, usa delete para eliminar una propiedad específica.
const libro = { titulo: "1984", autor: "George Orwell", paginas: 328 };
delete(libro.paginas);
console.log(libro);

//Ejercicio 13
// Dado un objeto que representa una cuenta de usuario, usa hasOwnProperty para comprobar si tiene
// una propiedad específica.
const cuenta = { usuario: "Juan", email: "juan@mail.com" };
const propio = cuenta.hasOwnProperty("usuario");
console.log(propio);

//Ejercicio 14
// Dado un objeto que representa un pedido, convierte todas sus claves a mayúsculas utilizando
// Object.keys y reduce.
const pedido = { producto: "Silla", cantidad: 4, precio: 50 };
