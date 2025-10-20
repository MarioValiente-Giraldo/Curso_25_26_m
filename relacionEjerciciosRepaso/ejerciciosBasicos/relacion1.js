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

//Ejercicio 15:
// Dado un array de objetos que representan estudiantes, usa filter y map para obtener los nombres de
// los estudiantes que tienen una calificación mayor o igual a 85. Métodos sugeridos: filter, map.
const estudiantes = [
{ nombre: "Carlos", calificacion: 80 },
{ nombre: "Ana", calificacion: 90 },
{ nombre: "Luis", calificacion: 88 },
{ nombre: "María", calificacion: 70 },
];

const estudiantesFiltrados = estudiantes.filter(estudiante=>{
    estudiante.filter(estudiante.calificacion>=85);
});

//Ejercicio 16:
// Dado un array de productos, usa reduce para calcular el costo total de todos los productos
// multiplicando el precio por la cantidad. Métodos sugeridos: reduce.
const productos = [
{ nombre: "Teclado", precio: 25, cantidad: 2 },
{ nombre: "Mouse", precio: 15, cantidad: 3 },
{ nombre: "Monitor", precio: 200, cantidad: 1 },
];
const totalPrecio = productos.reduce((acc,producto)=>{
    return acc+(producto.precio*producto.cantidad);
},0)

//Ejercicio 17:
// Dado un array de números y un objeto que clasifique esos números en pares e impares, usa forEach
// para llenar el objeto con los números correspondientes. Métodos sugeridos: forEach.
const numerosEjercicio17 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const clasificacion = { pares: [], impares: [] };

numerosEjercicio17.forEach(numero=>{
    if(numero%2===0){
        clasificacion.pares.push(numero);
    }else{
        clasificacion.impares.push(numero);
    
    }
});
console.log(clasificacion.impares);
console.log(clasificacion.pares);


// Ejercicio 18:
// Dado un objeto de empleados con sus salarios, usa Object.entries y reduce para calcular el salario
// promedio. Métodos sugeridos: Object.entries, reduce:
const empleados = {
Juan: 1000,
Maria: 1200,
Pedro: 1500,
Ana: 1100,
};

const salarios = Object.values(empleados);
const promedio = salarios.reduce((acum, salario) => acum + salario, 0) / salarios.length;
console.log(promedio);

// Ejercicio 19:
// Dado un array de strings, usa reduce y split para contar cuántas veces aparece una letra específica en
// todos los strings. Métodos sugeridos: reduce, split.
const palabrasEjercicio19 = ["hola", "mundo", "javascript", "es", "genial"];
const letraABuscar = "a";

const contadorLetra = palabrasEjercicio19.reduce((acc,palabra)=>{
    const encontrado = palabra.split("a").length -1;
    return acc+encontrado;
},0);
console.log(contadorLetra);

// Ejercicio 20:
// Dado un array de objetos que representan compras con propiedades fecha y monto, usa sort para
// ordenar las compras por fecha (más reciente primero). Métodos sugeridos: sort
const compras = [
{ fecha: new Date(2023, 9, 21), monto: 200 },
{ fecha: new Date(2022, 1, 13), monto: 300 },
{ fecha: new Date(2023, 5, 10), monto: 150 },
];


// | Orden       | Comparador        | Ejemplo resultado |
// | ----------- | ----------------- | ----------------- |
// | Ascendente  | `(a, b) => a - b` | `[1, 2, 3, 4]`    |
// | Descendente | `(a, b) => b - a` | `[4, 3, 2, 1]`    |

const comprasOrdenadas = compras.sort((a,b)=>{
    return b.fecha - a.fecha;
})
console.log(comprasOrdenadas);


// Ejercicio 21:
// Dado un array de objetos que representan tareas con una propiedad completada, usa some y every
// para verificar si hay alguna tarea incompleta y si todas están completas. Métodos sugeridos: some,every
const tareasEjercicio21 = [
{ tarea: "Lavar los platos", completada: true },
{ tarea: "Sacar la basura", completada: false },
{ tarea: "Comprar comida", completada: true },
];

const tareasIncompletas = tareasEjercicio21.some(tarea => !tarea.completada);
const tareasCompletas = tareasEjercicio21.every(tarea =>tarea.completada);
console.log(tareasIncompletas);
console.log(tareasCompletas);

// Ejercicio 22:
// Dado un array de objetos con propiedades nombre y puntuacion, usa reduce para encontrar el objeto
// con la puntuación más alta. Métodos sugeridos: reduce
const jugadores = [
{ nombre: "Carlos", puntuacion: 120 },
{ nombre: "Ana", puntuacion: 180 },
{ nombre: "Luis", puntuacion: 150 },
];

const bestPlayer = jugadores.reduce((acc,jugador)=>{
    if(jugador.puntuacion>acc.puntuacion){
        acc.nombre = jugador.nombre;
        acc.puntuacion = jugador.puntuacion;
    }
    return acc;
},{nombre:"",puntuacion:0});
console.log(bestPlayer);


//Ejercicio 23
// Dado un objeto que contiene arrays como valores, usa Object.values y flat para obtener todos los
// elementos de esos arrays en un solo array. Métodos sugeridos: Object.values, flat
const categorias = {
frutas: ["manzana", "plátano", "pera"],
verduras: ["lechuga", "tomate"],
carnes: ["pollo", "cerdo"],
};

const contenido = Object.values(categorias).flat();
console.log(contenido);

// Ejercicio 24:
// Dado un array de objetos con propiedades nombre y edad, usa filter, map y reduce para obtener la
// suma de las edades de las personas cuyo nombre empieza con una vocal. Métodos sugeridos: filter, map, reduce.
const personas = [
{ nombre: "Oscar", edad: 25 },
{ nombre: "Ana", edad: 30 },
{ nombre: "Luis", edad: 28 },
{ nombre: "Elena", edad: 22 },
];

