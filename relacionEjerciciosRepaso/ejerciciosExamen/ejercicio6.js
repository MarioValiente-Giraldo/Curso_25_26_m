// Ejercicio 6: Gestión de Inventario con Map
// Objetivo: Practicar el uso de Map para gestionar inventario.
// Datos necesarios: Array  productos  del archivo  src/db/data.js
// Enunciado: Implementa una función llamada  gestionarInventario  que:
// 1. Cree un Map a partir del array  productos  donde la clave sea el id del producto
// 2. Implemente las siguientes operaciones sobre el Map:
// actualizarStock(idProducto, nuevaCantidad) : Actualiza el stock de un producto
// obtenerProductoPorId(idProducto) : Devuelve el producto con ese id
// productosConBajoStock(limite) : Devuelve un array con productos cuyo stock sea
// inferior al límite
// 3. Devuelva un objeto con estas tres funciones y el Map inicial
// Crea funciones adicionales para:
// Generar alertas automáticas cuando el stock baje del límite
// Buscar productos por nombre o categoría
// Guardar cambios en LocalStorage
// Muestra los resultados por consola
import { productos } from "../data.js"

function gestionarInventario() {
  const productosMap = new Map();
  productos.forEach(producto => {
    productosMap.set(producto.id, producto);
  });

  function actualizarStock(idProducto, nuevaCantidad) {
    const mapNuevoStock = new Map();
    productosMap.forEach(producto => {
      if (producto.id === idProducto) {
        mapNuevoStock.set(producto.id, { ...producto, stock: nuevaCantidad });
      } else {
        mapNuevoStock.set(producto.id, producto);
      }
    });
    return mapNuevoStock;
  }

  function obtenerProductoPorId(idProducto) {
    return productosMap.get(idProducto);
  }

  function productosConBajoStock(limite) {
    return Array.from(productosMap.values()).filter(p => p.stock < limite);
  }

  return {
    productosMap,
    actualizarStock,
    obtenerProductoPorId,
    productosConBajoStock
  };
}
const inventario = gestionarInventario();
console.log("Gestionar inventario");
console.log(inventario.productosMap);
console.log("----------------------------------------------------------------------");



//------- FUNCIONES ADICIONALES -------
function generarAlertasAutomáticas(limiteStock){
    const { productosMap } = gestionarInventario();
    const productosBajoStock = Array.from(productosMap.values()).filter(producto => producto.stock < limiteStock);

    productosBajoStock.forEach(p=> console.log(`ALERTA: El producto ${p.nombre} tiene un stock bajo, solo quedan ${p.stock} unidades`));
}

console.log("Alertas de Stock");
generarAlertasAutomáticas(10);
console.log("----------------------------------------------------------------------");


function buscarProductosNombre(nombre) {
    const { productosMap } = gestionarInventario();
    const arrayProductos = Array.from(productosMap.values());
    const normalizarNombre = nombre.trim().toLowerCase();
    return arrayProductos.filter(p=> p.nombre.trim().toLowerCase().includes(normalizarNombre))
};
function buscarProductosCategoria(categoria) {
    const { productosMap } = gestionarInventario();
    const arrayProductos = Array.from(productosMap.values());
    const normalizarCategoria = categoria.trim().toLowerCase();
    return arrayProductos.filter(p=> p.categoría.trim().toLowerCase().includes(normalizarCategoria))
}

console.log("Buscar por nombre")
console.log(buscarProductosNombre("Silla ergonómica Comfort"))
console.log("----------------------------------------------------------------------");
console.log("Buscar por categoría")
console.log(buscarProductosCategoria("Muebles"))
console.log("----------------------------------------------------------------------");


function guardarCambiosLocalStorage(){
    const { productosMap } = gestionarInventario();
    try{
    localStorage.setItem('productosMap', JSON.stringify(Object.fromEntries(productosMap)));
    }catch(error){
        console.log(error);
    }
}
