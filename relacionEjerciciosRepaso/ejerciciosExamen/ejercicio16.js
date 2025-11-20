// Ejercicio 16: Generador de Datos de Productos
// Objetivo: Practicar la creación de funciones para procesar datos de productos.
// Datos necesarios: Array  productos  del archivo  src/db/data.js
// Enunciado: Implementa un módulo llamado  procesadorProductos  que:
// 1. Implemente las siguientes funciones:
// generarResumenProducto(producto) : Crea un resumen de un producto específico
// generarResumenProductos(listaProductos) : Genera resúmenes para múltiples productos
// aplicarFiltros(productos, filtros) : Filtra productos según criterios
// ordenarProductos(productos, criterio) : Ordena productos según diferentes criterios
// 2. Cada resumen debe incluir: nombre, categoría, precio y stock
// 3. Añade etiquetas diferentes según el stock (alto, medio, bajo)
// 4. Crea filtros para: categoría, rango de precios y disponibilidad
// 5. Demuestra su funcionamiento con diferentes productos
// Muestra los resultados por consola

import { productos } from "../data.js";

export function procesadorProductos(){
    function generarResumenProducto(producto){
        return {
            nombre:producto.nombre,
            categoría:producto.categoría,
            precio:producto.precio,
            stock:producto.stock
        }
    }

    function generarResumenProductos(listaProductos){
        return listaProductos.map(producto=>generarResumenProducto(producto));
    }

    function aplicarFiltros(productos, filtros){
        switch(filtros){
            case 'stock':
                return productos.sort((a,b)=>b.stock-a.stock);
            case 'precio':
                return productos.sort((a,b)=>b.precio-a.precio);
            default:
                return productos;
        }
    }
    return {
        generarResumenProducto,
        generarResumenProductos,
        aplicarFiltros
    }
}



//-------- PRUEBA --------

//Primera función
const productoPrueba = productos.find(p=>p.id===101);
const resumenProducto = procesadorProductos().generarResumenProducto(productoPrueba);
console.log(resumenProducto);
console.log("--------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------");

//Segunda función
const resumenProductos = procesadorProductos().generarResumenProductos(productos);
console.log(resumenProductos);
console.log("--------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------");

//Tercera función
const productosFiltrados = procesadorProductos().aplicarFiltros(productos,'stock');
console.log("POR STOCK")
console.log(productosFiltrados);
console.log("--------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------");
const productosFiltrados2 = procesadorProductos().aplicarFiltros(productos,'precio');
console.log("POR PRECIO")
console.log(productosFiltrados2);
