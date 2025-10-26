import { productos } from "../data.js"
// Ejercicio 2: Análisis de Productos por Categoría
// Objetivo: Practicar el uso de  reduce  para agrupar datos y realizar cálculos.
// Datos necesarios: Array  productos  del archivo  src/db/data.js
// Enunciado: Implementa una función llamada  analizarProductosPorcategoría  que:
// 1. Agrupe los productos del array  productos  por categoría
// 2. Para cada categoría, calcule:
// Número total de productos
// Precio medio de los productos
// Stock total
// Valoración media
// 3. Devuelva un objeto donde las claves sean las categorías y los valores sean objetos con la información
// calculada
// Crea funciones adicionales para:
// Filtrar categorías con stock bajo o valoración alta
// Ordenar categorías por diferentes criterios (productos, precio, stock)
// Identificar categorías con problemas (stock bajo, valoración baja)
// Muestra los resultados por consola.
function analizarProductosPorcategoría() {
    const productosPorcategoría = productos.reduce((acc, producto) => {
        if (!acc[producto.categoría]) {
            acc[producto.categoría] = {
                totalProductos: 0,
                precioMedio: 0,
                stockTotal: 0,
                valoracionMedia: 0,
                sumaPrecio: 0,
                sumaValoracion: 0,
            };
        }
        
        acc[producto.categoría].sumaPrecio += producto.precio;
        acc[producto.categoría].sumaValoracion += producto.numValoraciones;
        acc[producto.categoría].totalProductos++;
        acc[producto.categoría].stockTotal += producto.stock;
        
        acc[producto.categoría].precioMedio = 
            acc[producto.categoría].sumaPrecio / acc[producto.categoría].totalProductos;
        
        acc[producto.categoría].valoracionMedia = 
            acc[producto.categoría].sumaValoracion / acc[producto.categoría].totalProductos;
        
        return acc;
    }, {});
    return productosPorcategoría;

}

console.log("Analizar por categoría");
console.log(analizarProductosPorcategoría());
console.log("----------------------------------------------------------------------");


function filtrarSstockBajo(){
    const productosPorcategoría = analizarProductosPorcategoría();
    const categoriasStockBajo=Object
    .keys(productosPorcategoría)
    .filter(categoria=>productosPorcategoría[categoria].stockTotal<10);
    return categoriasStockBajo;

}

function filtrarPorValoracionAlta(){
    const productosPorcategoría = analizarProductosPorcategoría();
    const categoriasValoracionAlta = Object
    .keys(productosPorcategoría)
    .filter(cateogria=>productosPorcategoría[cateogria].valoracionMedia>4);

}

function filtrarPorCriterio(criterio){
    const productosPorcategoría = analizarProductosPorcategoría();
    switch (criterio) {
        case "productos":
            return Object.keys(productosPorcategoría)
            .sort((a,b)=>productosPorcategoría[b].totalProductos-productosPorcategoría[a].totalProductos);
        case "precio":
            return Object.keys(productosPorcategoría)
            .sort((a,b)=>productosPorcategoría[b].precioMedio-productosPorcategoría[a].precioMedio);

        case "stock":
            return Object.keys(productosPorcategoría)
            .sort((a,b)=>productosPorcategoría[b].stockTotal-productosPorcategoría[a].stockTotal);
        default:
            return Object.keys(productosPorcategoría);
    
    }
}
console.log(filtrarPorCriterio('productos'));


function categoriasProblemas(){
    const productosPorcategoría = analizarProductosPorcategoría();
    return Object.keys(productosPorcategoría)
            .filter(categoria=>productosPorcategoría[categoria].stockTotal<25 
                                || 
                                productosPorcategoría[categoria].valoracionMedia<10);
}


console.log(categoriasProblemas());