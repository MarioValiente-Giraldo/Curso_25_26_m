// Ejercicio 14: Carrito de Compras Persistente
// Objetivo: Practicar el uso de LocalStorage para un carrito de compras.
// Datos necesarios: Array  productos  del archivo  src/db/data.js
// Enunciado: Implementa un módulo llamado  carritoCompras  que:
// 1. Implemente un carrito de compras que persiste en LocalStorage
// 2. Debe incluir las siguientes funciones:
// agregarProducto(idProducto, cantidad) : Añade un producto al carrito
// eliminarProducto(idProducto) : Elimina un producto del carrito
// actualizarCantidad(idProducto, nuevaCantidad) : Actualiza la cantidad de un
// producto
// vaciarCarrito() : Elimina todos los productos del carrito
// obtenerCarrito() : Devuelve el contenido actual del carrito
// calcularTotal() : Calcula el precio total del carrito
// 3. Utiliza los datos del array  productos  para obtener información de los productos
// 4. Guarda en el carrito: idProducto, nombre, precio, cantidad y subtotal
// Crea funciones adicionales para:
// Aplicar códigos de descuento
// Calcular gastos de envío según el total
// Simular el proceso de checkout
// Muestra los resultados por consola.
import { productos } from "../data.js";

export function carritoCompras(){
    function agregarProducto(idProducto, cantidad){
        localStorage.setItem(idProducto,{
            idProducto:idProducto,
            nombre:productos.find(p=>p.id===idProducto).nombre,
            precio:productos.find(p=>p.id===idProducto).precio,
            cantidad:cantidad,
            subtotal:productos.find(p=>p.id===idProducto).precio*cantidad
        });
    }

    function eliminarProducto(idProducto){
        localStorage.removeItem(idProducto);
    }

    function obtenerCarrito(){
        const carrito = [];
        for(let i = 0; i<localStorage.length; i++){
            carrito.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        return carrito;
    }

    function limpiarCarrito(){
        localStorage.clear();
    }

    function calcularTotalSinDescuento(){
        const carrito = obtenerCarrito();
        return carrito.reduce((total,producto)=>total+(producto.precio*producto.cantidad),0);
    
    }

    function calcularTotalConDescuento(){
        const carrito = obtenerCarrito();
        
        const carritoDescuento = carrito.map(producto=>{
            return {
                idProducto:producto.idProducto,
                nombre:producto.nombre,
                precio:producto.precio,
                cantidad:producto.cantidad,
                subtotal:producto.precio*cantidad,
                subtotalDescuento:subtotal * (1 - producto.descuento / 100)
            }
        })
        return carritoDescuento;
    }

    function simularCheckout(){
        const carrito = calcularTotalConDescuento();
        const total = carrito.reduce((total,producto)=>total+producto.subtotalDescuento,0);
        return total;

        console.log(`🛒COMPRA FINALIZADA CON ÉXITO: ${total}`);
    }

    return {
        agregarProducto,
        eliminarProducto,
        obtenerCarrito,
        limpiarCarrito,
        calcularTotalSinDescuento,
        calcularTotalConDescuento,
        simularCheckout
    }
}





