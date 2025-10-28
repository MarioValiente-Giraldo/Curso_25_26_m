// Ejercicio 8: Comparación de Colecciones
// Objetivo: Practicar operaciones entre Map y Set.
// Datos necesarios: Sets  coloresPrimarios ,  coloresSecundarios  y Map
// ciudadesPoblacion  del archivo  src/db/data.js
// Enunciado: Implementa una función llamada  compararColecciones  que:
// 1. A partir de los Sets  coloresPrimarios  y  coloresSecundarios , cree:
// Un Set con todos los colores (unión)
// Un Set con los colores que están en ambos (intersección)
// Un Set con los colores que están en primarios pero no en secundarios (diferencia)
// 2. A partir del Map  ciudadesPoblacion , cree otro Map solo con las ciudades cuya población sea
// superior a 1 millón
// 3. Devuelva un objeto con todos estos resultados
// Crea funciones adicionales para:
// Añadir nuevos elementos a las colecciones
// Calcular estadísticas de las operaciones
// Exportar los resultados de las operaciones
// Muestra los resultados por consola
import { coloresPrimarios, coloresSecundarios, ciudadesPoblacion } from "../data.js"

function compararColecciones(){
    const union = new Set([...coloresPrimarios, ...coloresSecundarios]);
    const intersección = new Set([...coloresPrimarios].filter(color=>coloresSecundarios.has(color)));
    const diferencia = new Set([...coloresPrimarios].filter(color=>!coloresSecundarios.has(color)));
    const mapCiudadesPobladas = new Map();
    const ciudadesGrandes = new Map([...ciudadesPoblacion].filter(([ciudad,poblacion])=>poblacion>1000000));

    ;
    return {
        union,
        intersección,
        diferencia,
        ciudadesGrandes
    }
}
console.log(compararColecciones());

function añadirColorPrimerio(color){
    coloresPrimarios.add(color);
}
function añadirColorSecundario(color){
    coloresSecundarios.add(color);

}
function añadirCiudadPoblacion(ciudad,poblacion){
    ciudadesPoblacion.set(ciudad,poblacion);
}

function calcularEstadisticas(){
    const {union,intersección,diferencia,ciudadesGrandes} = compararColecciones();
    const estadisticas={
        union:union.size,
        intersección:intersección.size,
        diferencia:diferencia.size,
        ciudadesGrandes:ciudadesGrandes.size
    }
    return estadisticas;
}

function exportarResultados(){
    const resultados= compararColecciones();
    const estadisticas = calcularEstadisticas();
    return {
        resultados,
        estadisticas
    };

};