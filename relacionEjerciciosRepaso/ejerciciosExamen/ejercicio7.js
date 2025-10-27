// Ejercicio 7: Sistema de Etiquetas con Set
// Objetivo: Practicar el uso de Set para gestionar etiquetas únicas.
// Datos necesarios: Array  productos  del archivo  src/db/data.js
// Enunciado: Implementa una función llamada  sistemaEtiquetas  que:
// 1. Extraiga todas las etiquetas del array  productos  y las guarde en un Set para eliminar duplicados
// 2. Implemente las siguientes operaciones:
// agregarEtiqueta(etiqueta) : Añade una nueva etiqueta al Set
// eliminarEtiqueta(etiqueta) : Elimina una etiqueta del Set
// obtenerProductosConEtiqueta(etiqueta) : Devuelve los productos que contengan esa
// etiqueta
// etiquetasDisponibles() : Devuelve un array con todas las etiquetas disponibles
// 3. Devuelva un objeto con el Set de etiquetas y las funciones para gestionarlo
// Crea funciones adicionales para:
// Filtrar productos por múltiples etiquetas (AND/OR)
// Contar el número de productos por etiqueta
// Identificar las etiquetas más populares
// Muestra los resultados por consola.

import { productos } from "../data.js";
function sistemaEtiquetas(){
    //Extraer todas las etiquetas de los productos para guardar en un set 
    const etiquetas = new Set();
    productos.forEach(producto=>{
        producto.etiquetas.forEach(etiqueta=>etiquetas.add(etiqueta));
    });
    //Funciones 
    function agregarEtiqueta(etiqueta){
        etiquetas.add(etiqueta);
    }

    function eliminarEtiqueta(etiqueta){
        etiquetas.delete(etiqueta);
    }
    
    function obtenerProductosConEtiqueta(etiqueta){
        return productos.filter(producto=>producto.etiquetas.includes(etiqueta));
    }

    function etiquetasDisponibles(){
        return Array.from(etiquetas);
    }

    return {
        etiquetas,
        agregarEtiqueta,
        eliminarEtiqueta,
        obtenerProductosConEtiqueta,
        etiquetasDisponibles
    }
}

console.log("Comprobar función principal");
console.log(sistemaEtiquetas());
console.log("----------------------------------------------------------------------");


//------- FUNCIONES ADICIONALES -------
function filtrarPorMultiplesEtiquetas(operacion='AND',etiquetas){
    switch (operacion) {
        case 'AND':
            return productos.filter(producto=>etiquetas.every(etiqueta=>producto.etiquetas.includes(etiqueta)));
            break;
        case 'OR':
            return productos.filter(producto=>etiquetas.some(etiqueta=>producto.etiquetas.includes(etiqueta)));
            break;    
        default:
            return console.log("No se ha encontrado ningún producto con esas etiquetas");
    }
}

console.log("Comprobar etiquetas con AND")
console.log(filtrarPorMultiplesEtiquetas('AND',['gaming','computación']));
console.log("-----------------------------------------------------------------")

function contarProductosPorEtiqueta() {
    const etiquetasContador = {};
    productos.forEach(producto => {
        producto.etiquetas.forEach(etiqueta => {
            etiquetasContador[etiqueta] = (etiquetasContador[etiqueta] || 0) + 1;
        });
    });

    return etiquetasContador;
}
console.log("Ver número de productos por etiqueta");
console.log(contarProductosPorEtiqueta());
console.log("-----------------------------------------------------------------")

function obtenerEtiquetasMasPopulares(){
    const etiquetasContador = contarProductosPorEtiqueta();
    const arrayOrdenado = Object.entries(etiquetasContador).sort((a,b)=>b[1]-a[1]);
    return Object.fromEntries(arrayOrdenado);
}
console.log("Etiquetas más populares");
console.log(obtenerEtiquetasMasPopulares());
console.log("----------------------------------------------------------------");



