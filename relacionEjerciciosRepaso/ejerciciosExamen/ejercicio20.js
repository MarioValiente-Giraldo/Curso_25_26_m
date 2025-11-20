// Ejercicio 20: Dashboard de Datos
// Objetivo: Practicar la creación de un dashboard con visualización de datos por consola.
// Datos necesarios: Arrays  usuarios ,  productos  y  pedidos  del archivo  src/db/data.js
// Enunciado: Implementa un módulo llamado  dashboardDatos  que:
// 1. Implemente las siguientes funciones:
// crearResumenUsuarios() : Crea un resumen de estadísticas de usuarios
// crearResumenProductos() : Crea un resumen de estadísticas de productos
// crearResumenPedidos() : Crea un resumen de estadísticas de pedidos
// actualizarDashboard() : Actualiza todos los datos del dashboard
// exportarDatos(formato) : Exporta los datos del dashboard
// 2. El dashboard debe incluir:
// Estadísticas de usuarios por ciudad
// Estadísticas de productos por categoría
// Estadísticas de pedidos por estado
// Resumen de métricas clave
// 4. Demuestra su funcionamiento mostrando diferentes visualizaciones de datos
// Muestra los resultados por consola.

import { usuarios, productos, pedidos } from "../data.js";

export function dashboardDatos(){
    function crearResumenUsuarios(){
        const resumen ={};
        usuarios.forEach(usuario=>{
            const ciudad = usuario.ciudad;
            resumen[ciudad] = (resumen[ciudad]||0)+1;
        })
        return resumen;
    }

    function crearResumenProductos(){
        const resumen= {};
        productos.forEach(producto=>{
            const categoría = producto.categoría;
            resumen[categoría] = (resumen[categoría]||0)+1;
        })
        return resumen;
    }

    function crearResumenPedidos(){
        const resumen = {};
        pedidos.forEach(pedido=>{
            const estado = pedido.estado;
            resumen[estado] = (resumen[estado]||0) +1;
        })
        return resumen;
    }
    return {
        crearResumenUsuarios,
        crearResumenProductos,
        crearResumenPedidos
    }
}
const dashboard = dashboardDatos();

console.log(dashboard.crearResumenUsuarios());
console.log("--------------------------------------------------");
console.log(dashboard.crearResumenProductos());
console.log("--------------------------------------------------");
console.log(dashboard.crearResumenPedidos());
