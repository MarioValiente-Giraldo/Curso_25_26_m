// Ejercicio 12: Historial de Búsquedas
// Objetivo: Practicar el uso de LocalStorage para mantener historial.
// Datos necesarios: Array  palabras  del archivo  src/db/data.js  para demostración
// Enunciado: Implementa un módulo llamado  historialBusquedas  que:
// 1. Implemente un sistema de historial de búsquedas utilizando LocalStorage
// 2. Debe incluir las siguientes funciones:
// agregarBusqueda(termino) : Añade una nueva búsqueda al historial
// obtenerHistorial() : Devuelve el historial completo ordenado por fecha (más reciente
// primero)
// eliminarBusqueda(id) : Elimina una búsqueda específica del historial
// limpiarHistorial() : Elimina todo el historial
// buscarEnHistorial(termino) : Busca búsquedas que contengan un término
// 3. Cada búsqueda debe guardar: término, fecha y un id único
// 4. Limita el historial a un máximo de 50 búsquedas
// Crea funciones adicionales para:
// Agrupar búsquedas por términos similares
// Marcar búsquedas como favoritas
// Calcular estadísticas de las búsquedas más frecuentes
// Muestra los resultados por consola

import { palabras } from "../data.js";

export function historialBusquedas(){
    const historial = [];
    function agregarBusqueda(termino){
        const busqueda = {
            id: ''+Date.now()+historial.length,
            termino:termino,
            fecha: new Date()
        }
            historial.push(busqueda);
            if(historial.length>50){
                historial.shift();
            }
            localStorage.setItem('historial',JSON.stringify(historial));
        }
    function obtenerHistorial(){
        const historial = JSON.parse(localStorage.getItem('historial'));
        return historial.sort((a,b)=>b.fecha-a.fecha);
    
    }
    function eliminarEnHistorial(id){
        localStorage.removeItem(id);
    }
    function limpiarHistorial(){
        localStorage.clear();
    }
    function buscarEnHistorial(termino){
        const historial = obtenerHistorial();
        return historial.filter(busqueda=>busqueda.termino.includes(termino));

    }

}