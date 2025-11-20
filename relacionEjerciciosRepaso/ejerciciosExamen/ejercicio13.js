// Ejercicio 13: Configuración de Preferencias
// Objetivo: Practicar el uso de LocalStorage para guardar configuraciones.
// Datos necesarios: No se requieren datos específicos del archivo data.js
// Enunciado: Implementa un módulo llamado  configuracionPreferencias  que:
// 1. Implemente un sistema de preferencias de usuario utilizando LocalStorage
// 2. Debe incluir las siguientes funciones:
// establecerPreferencia(clave, valor) : Guarda una preferencia
// obtenerPreferencia(clave, valorPorDefecto) : Obtiene una preferencia con valor por defecto
// restablecerPreferencias() : Restablece todas las preferencias a sus valores por defecto
// exportarPreferencias() : Devuelve un objeto con todas las preferencias
// importarPreferencias(preferencias) : Importa un objeto de preferencias
// 3. Define preferencias por defecto para:
// Tema (claro/oscuro)
// Idioma (es/en/fr)
// Notificaciones (activadas/desactivadas)
// Elementos por página (10/25/50)
// Crea funciones adicionales para:
// Validar los valores antes de guardar
// Crear perfiles de configuración
// Aplicar las preferencias automáticamente
// Muestra los resultados por consola

export function configuracionPreferencias(){
    const preferencias = {
        tema: ['claro', 'oscuro'],
        idioma: ['es', 'en', 'fr'],
        notificaciones: ['activadas', 'desactivadas'],
        elementosPorPagina: [10, 25, 50]
    };
    function establecerPreferencia(clave,valor){
        localStorage.setItem(clave,valor);
    };
    function obtenerPreferencia(clave,valorPorDefecto){
        return localStorage.getItem(clave) || valorPorDefecto;
    };
    function restablecerPreferencias(){
        localStorage.clear();
    };
    function exportarPreferencias(){
        const preferencias = {};
        for(let i = 0; i< localStorage.length; i++){
            preferencias[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
        
        }
        return preferencias;
    };
    function importarPreferencias(preferencias){
        for(let clave in preferencias){
            localStorage.setItem(clave,preferencias[clave]);
        
        }
    };

    function validarValores(clave,valor){
        if(!preferenicas[clave] || !preferenicas[clave].includes(valor))return false;
        return true;
    };

    function crearPerfilesConfiguracion() {
    const perfiles = {};
    for (let clave in preferencias) {
        perfiles[clave] = obtenerPreferencia(clave, DEFAULTS[clave]);
    }
    return perfiles;
    }
    function aplicarPreferencias(){
    const tema = obtenerPreferencia('tema');
    const idioma = obtenerPreferencia('idioma');
    const notificaciones = obtenerPreferencia('notificaciones');
    const elementos = obtenerPreferencia('elementosPorPagina');

    document.body.setAttribute('data-tema', tema);
    console.log(`Aplicando preferencias: Tema=${tema}, Idioma=${idioma}, Notificaciones=${notificaciones}, ElementosPorPagina=${elementos}`);
    };
    aplicarPreferencias();

    return{
        establecerPreferencia,
        obtenerPreferencia,
        restablecerPreferencias,
        exportarPreferencias,
        importarPreferencias,
        validarValores,
        crearPerfilesConfiguracion,
        aplicarPreferencias
    
    }




}