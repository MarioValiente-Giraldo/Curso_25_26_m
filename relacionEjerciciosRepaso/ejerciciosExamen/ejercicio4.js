import { pedidos, metodosPago } from "../data.js"
// Ejercicio 4: Cálculo del Total de Pedidos
// Objetivo: Practicar el manejo de arrays anidados y cálculos complejos.
// Datos necesarios: Array  pedidos  del archivo  src/db/data.js
// Enunciado: Implementa una función llamada  calcularTotalPedidos  que:
// 1. Calcule el total de cada pedido (cantidad × precio unitario para cada producto)
// 2. Sume los totales de todos los productos de cada pedido
// 3. Devuelva un array de objetos con la siguiente estructura:
// { 
//   idPedido: número, 
//   total: número, 
//   numeroProductos: número, 
//   idUsuario: número, 
//   estado: string, 
//   fecha: Date 
// } 
// Crea funciones adicionales para:
// Calcular comisiones por método de pago
// Obtener estadísticas de ventas por mes
// Muestra los resultados por consola.

function calcularTotalPedidos(){
    const totalPedido = pedidos.map(pedido =>({
        idPedido:pedido.id,
        total:pedido.productos.reduce((total,prodcuto)=>total+prodcuto.cantidad*prodcuto.precioUnitario,0),
        numeroProductos:pedido.productos.length,
        idUsuario:pedido.idUsuario,
        estado:pedido.estado,
        fecha:pedido.fecha
    }))

    return totalPedido;
}
// // Métodos de pago disponibles
// export const metodosPago = [
//   { id: 'tarjeta', nombre: 'Tarjeta de crédito/débito', comision: 0 },
//   { id: 'paypal', nombre: 'PayPal', comision: 0.02 },
//   { id: 'transferencia', nombre: 'Transferencia bancaria', comision: 0 },
//   { id: 'contrareembolso', nombre: 'Contra reembolso', comision: 0.03 }
// ];
function calcularComisionesPorMetodoPago(){
    const pedidosConComisiones = pedidos.map(pedido=>{
    const comision =  metodosPago.find(metodo=>metodo.id===pedido.metodoPago).comision;
    const totalPedido = pedido.productos.reduce((total, producto) => 
        total + producto.cantidad * producto.precioUnitario,
     0);
    const totalComision = totalPedido * comision;
        return {
        idPedido:pedido.id,
        numeroProductos:pedido.productos.length,
        idUsuario:pedido.idUsuario,
        estado:pedido.estado,
        fecha:pedido.fecha,
        metodoDePago:pedido.metodoPago,
        comision:comision+'%',
        totalComision:totalComision,
        total:totalPedido,
    }
    });
    return pedidosConComisiones;
};

function obtenerEstadisticasVentasPorMes(){
    const ventasPorMes = {};
    pedidos.forEach(pedido=>{
        const mes = pedido.fecha.getMonth()+1;
        if(!ventasPorMes[mes]){
            ventasPorMes[mes]=0;
        }
        ventasPorMes[mes]+=pedido.productos.reduce((total,producto)=>total+producto.cantidad*producto.precioUnitario,0);
    });
    return ventasPorMes;
}