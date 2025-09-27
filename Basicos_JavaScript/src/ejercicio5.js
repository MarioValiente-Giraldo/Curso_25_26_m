// .at <--- acceso con índices negativos.
const frutas= ["Pera","Fresa","Manzana","Melocoton"];
console.log(frutas.at(-2)); // Me cogería la manzana. 
console.log(frutas.slice(-2)); // Me cogería la manzana y el melocotón. 


//splice <--- Se utiliza para modificar un array.  ‼️‼️‼️‼️ MUTA EL ARRAY ‼️‼️‼️‼️
/* frutas.splice(1,2,"pera") <---   Elimina dos elemenentos desde la posición 1, es decir, elimina la fresa y la manzana.
                                    Al poner pera, sustituye lo eliminado por "pera"
*/

//concat <--- Se utiliza para concatenar dos o más arrays.
const verduras = ["lechuga","pimiento","espinacas"];

frutas.concat(verduras);
frutas.concat(...verduras); // ESTA ES LA QUE HAY QUE USAR. ES MÁS FLEXIBLE.


// SET <--- Otro tipo de dato formado por datos únicos sin orden.

const pesos = [4,3,2,5,6,33,6,7,32,7,7,7,77,7,7,7,7,7,7];
const pesosNoDiplucados = [... new Set(pesos)]; //‼️‼️‼️‼️‼️ SI NO SE PONEN LOS PUNTOS NO SE CREA EL ARRAY 


// reduce <--- Reduce un array a un único valor.
/* array.reduce(
    acumulador, -- No es opcional
    elemento, -- No es opcional
    indice, -- Opcional
    array) ==> aquí va la lógica, el valor inicial
*/
pesos.reduce((suma,peso)=>suma+peso    , 0  /* valor inicial, es la antesala del resultado final*/    );



// Realizar la multiplicación de todo el array
pesos.reduce((multiplicar,peso)=>multiplicar*peso, 1);

// Encontrar el máximo de un array, y el mínimo
peso.reduce((max,peso)=> peso >  max ? peso : max, pesos[0]);  /*  ‼️‼️EL VALOR INCIAL DE MAX ES EL PRIMER VALOR DEL ARRAY ‼️‼️*/ 
peso.reduce((min,peso)=> peso <  min ? peso : min, pesos[0]);  


// Dado un array que sea [manzana, platano, naranja, manzana, manzana, platano, pera, pera], devolverme un objeto clave - valor que me diga nombre de la fruta: número de repeticiones
 const frutas2 = ["manzana", "platano", "naranja", "manzana", "manzana", "platano", "pera", "pera"];

 frutas2.reduce((acc,fruta) =>{
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
 }        , {} );



// Dado el siguiente array bidimensional, se pide aplanar dicho array en un array.
const alimentos = [
    ["Manzana", "Banana", "Naranja", "Uva", "Pera"],      
    ["Zanahoria", "Brócoli", "Espinaca", "Tomate", "Lechuga"] 
]

alimentos.reduce((acc,alimento)=> acc.concat(alimento),[]);


 // array de objetos

 const usuarios = [
    {id: 1, nombre: "Mario", edad:22, data:{books: 100}},
    {id: 2, nombre: "Pepe", edad:32, data: {books: 50}},
    {id: 3, nombre: "Penelope", edad:42, data:{books: 20}},
    {id: 4, nombre: "Angel", edad:46, data:{books: 20}},
    {id: 5, nombre: "Carolina", edad:22, data:{books: 0}},


 ];

 // Dame la información del usuario cuyo nombre es Mario.
 // Utilizamos el método .find()
 usuarios.find(usuario=>usuario.nombre.toLowerCase() === "mario");

 // Dame todos los usuarios cuya edad es superior o igual a 28.
let resultado = usuarios.find(usuario=>Number(usuario.edad)>=28) ?? {} ;

// Dado el siguiente array de usuarios, devolver un array con solo el nombre de los usuarios que tienen en su bibliteca más de 20 libros.
usuarios.reduce((acc,usuario)=>Number(usuario.data.books)>20 ?  [...acc, usuario.nombre] : acc, []);

// Obtener el valor promedio total de todos los libros si suponemos un precio medio de 28€. 
usuarios.reduce((acc,usuario)=> acc + (usuario.data.books)*28,0);

// Dado del siguiente array, decir que usuarios no tienen libros.
usuarios.reduce((acc,usuario)=>Number(usuario.data.books)==0 ?  [...acc, usuario.nombre] : acc, []);






const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 5, categoria: 'Tecnología' },
  { id: 2, nombre: 'Camiseta', precio: 35, stock: 15, categoria: 'Ropa' },
  { id: 3, nombre: 'Monitor', precio: 300, stock: 0, categoria: 'Tecnología' },
  { id: 4, nombre: 'Libro', precio: 20, stock: 50, categoria: 'Literatura' },
  { id: 5, nombre: 'Móvil', precio: 800, stock: 10, categoria: 'Tecnología' },
  { id: 6, nombre: 'Pantalón', precio: 60, stock: 5, categoria: 'Ropa' },
];

// Se pide:
// 1.- Obtener un array con los nombres de todos los productos que están agotados.
productos.reduce((acc,producto)=> producto.stock===0 ? [...acc,producto.nombre] : acc , []);
// 2.- Calcular el valor total del inventario (precio * stock) de todos los productos.
productos.reduce((total,producto)=> total+ (producto.precio*producto.stock),0);
// 3.- Filtrar los productos que pertenecen a la categoría 'Tecnología' y tienen un precio mayor a 500.
productos.reduce((acc,producto)=> producto.categoria === "Tecnología" && producto.precio>500?[...acc,producto] : acc,[]);
// 4.- Crear un nuevo array de productos aplicando un descuento del 10% a todos los productos de la categoría 'Ropa'.
productos.map(producto => producto.categoria==="Ropa"? {...producto,precio: producto.precio * 0.9}:producto);











































// Author: Mario Valiente Giraldo