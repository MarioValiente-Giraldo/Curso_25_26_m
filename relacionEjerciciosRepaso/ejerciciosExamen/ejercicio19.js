// Ejercicio 19: Sistema de Notificaciones por Consola
// Objetivo: Practicar la creación de un sistema de notificaciones por consola.
// Datos necesarios: No se requieren datos específicos del archivo data.js
// Enunciado: Implementa un módulo llamado  sistemaNotificaciones  que:
// 1. Implemente las siguientes funciones:
// mostrarNotificacion(mensaje, tipo) : Muestra una notificación por consola
// formatearNotificacion(mensaje, tipo) : Formatea una notificación según su tipo
// registrarNotificacion(mensaje, tipo) : Registra una notificación en un historial
// obtenerHistorialNotificaciones() : Devuelve el historial de notificaciones
// filtrarNotificaciones(tipo) : Filtra notificaciones por tipo
// 2. Tipos de notificaciones:
// éxito (verde)
// error (rojo)
// advertencia (amarillo)
// información (azul)
// 3. Características:
// Formato especial para cada tipo
// incluir timestamp en cada notificación
// Historial de notificaciones
// 4. Demuestra su funcionamiento mostrando diferentes tipos de notificaciones
// Muestra los resultados por consola

export function sistemaNotificaciones() {
    const notificaciones = [];
    const tiposNotificaciones = new Map([
        ['exito', 'green'],
        ['error', 'red'],
        ['advertencia', 'yellow'],
    ]);

    function obtenerTimestamp() {
        return new Date().toISOString();
    }

    function registrarNotificacion(mensaje, tipo) {
        const timestamp = obtenerTimestamp();
        const color = tiposNotificaciones.get(tipo) || 'white';

        notificaciones.push({
            tipo,
            mensaje,
            timestamp,
            mensajeFormato: {
                texto: `%c [${timestamp}] ${tipo.toUpperCase()}: ${mensaje}`,
                estilo: `color: ${color};`
            }
        });
    }

    function mostrarNotificacion(mensaje, tipo) {
        const color = tiposNotificaciones.get(tipo) || 'white';
        const timestamp = obtenerTimestamp();

        switch (tipo) {
            case 'exito':
                console.log(`%c 🏅 [${timestamp}] ${tipo.toUpperCase()}: ${mensaje}`, `color: ${color};`);
                registrarNotificacion(mensaje, tipo);
                break;

            case 'error':
                console.log(`%c ❌ [${timestamp}] ${tipo.toUpperCase()}: ${mensaje}`, `color: ${color};`);
                registrarNotificacion(mensaje, tipo);
                break;

            case 'advertencia':
                console.log(`%c ⚠️ [${timestamp}] ${tipo.toUpperCase()}: ${mensaje}`, `color: ${color};`);
                registrarNotificacion(mensaje, tipo);
                break;

            default:
                console.log(`[${timestamp}] ${mensaje}`);
                break;
        }
    }

    function formatearNotificacion(mensaje, tipo) {
        const color = tiposNotificaciones.get(tipo) || 'white';
        const timestamp = obtenerTimestamp();
        return [`%c [${timestamp}] ${tipo.toUpperCase()}: ${mensaje}`, `color: ${color};`];
    }

    function obtenerHistorialNotificaciones() {
        return notificaciones;
    }

    function filtrarNotificaciones(tipo) {
        return notificaciones.filter(n => n.tipo === tipo);
    }

    return {
        mostrarNotificacion,
        registrarNotificacion,
        formatearNotificacion,
        obtenerHistorialNotificaciones,
        filtrarNotificaciones
    };
}


const sistema = sistemaNotificaciones();

sistema.mostrarNotificacion("Operación completada", "exito");
sistema.mostrarNotificacion("Error al guardar datos", "error");
sistema.mostrarNotificacion("Advertencia: bajo espacio", "advertencia");

console.log("📜 Historial completo:", sistema.obtenerHistorialNotificaciones());
console.log("🔴 Solo errores:", sistema.filtrarNotificaciones("error"));
console.log("❗ Solo advertencias:", sistema.filtrarNotificaciones("advertencia"));