// Ejercicio 9: Cache de Resultados con Map
// Objetivo: Practicar el uso de Map como sistema de cache.
// Datos necesarios: Array  numeros  del archivo  src/db/data.js  para demostración
// Enunciado: Implementa una función llamada  crearCacheFunciones  que:
// 1. Implemente un sistema de cache utilizando Map para almacenar resultados de funciones
// 2. Debe incluir las siguientes funciones:
// cacheFunction(fn) : Recibe una función y devuelve una nueva función que cachea resultados
// getCache() : Devuelve el Map con todos los resultados cacheados
// clearCache() : Limpia el cache
// 3. Aplica este sistema a una función que calcule el factorial de un número
// Crea funciones adicionales para:
// Medir y comparar los tiempos de ejecución
// Configurar el tamaño máximo de la cache
// Aplicar el sistema a otras funciones complejas
// Muestra los resultados por consola
import { numeros } from "../data.js";

export function crearCacheFunciones(){
    const cache = new Map(); // Mapa para almacenar resultados
    function cacheFunction(fn) {
        return function (...args) {
        const key = JSON.stringify(args); // clave única por argumentos
        const result = fn(...args);
        cache.set(key, result);
        return result;
        };
    };

    function getCache() {
    return cache;
    };

    function clearCache(){
        cache.clear();
    }

    return {
        cacheFunction,
        getCache,
        clearCache
    }
};