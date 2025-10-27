// Ejercicio 5: Estadísticas de Usuarios
// Objetivo: Practicar el uso de métodos de arrays para obtener estadísticas.
// Datos necesarios: Array  usuarios  del archivo  src/db/data.js
// Enunciado: Implementa una función llamada  obtenerEstadisticasUsuarios  que:
// 1. Calcule la edad media de todos los usuarios
// 2. Encuentre el usuario más joven y el más mayor
// 3. Determine cuántos usuarios hay por ciudad
// 4. Calcule el porcentaje de usuarios activos
// 5. Devuelva un objeto con toda esta información
// Crea funciones adicionales para:
// Filtrar estadísticas por nivel de usuario
// Comparar estadísticas entre diferentes grupos
// Obtener usuarios destacados por diferentes criterios
// Muestra los resultados por consola.
import { usuarios } from "../data.js"

function obtenerEstadisticasUsuarios(){
    //Calcular la edad media
    const edadTotal= usuarios.reduce((acc,usuario)=>{
        return acc+usuario.edad;
    },0);
    const edadMedia = edadTotal/usuarios.length;

  // Encontrar la edad mínima/máxima primero
const edadMinima = Math.min(...usuarios.map(u => u.edad));
const edadMaxima = Math.max(...usuarios.map(u => u.edad));

// Luego buscar el usuario
const usuarioJoven = usuarios.find(u => u.edad === edadMinima);
const usuarioMayor = usuarios.find(u => u.edad === edadMaxima);

    //Cuantos usuarios hay por ciudad
    const usuariosPorCiudad= usuarios.reduce((acc,usuario)=>{
        if(!acc[usuario.ciudad]){
            acc[usuario.ciudad]=0;
        }
        acc[usuario.ciudad]++;
        return acc;
    },{});

    //Calcular el porcentaje de usuarios activos
    const porcentajeActivos = (usuarios.filter(usuario=>usuario.activo).length/usuarios.length)*100;

    //Calcular la media de puntos
    const puntosTotal=usuarios.reduce((acc,usuario)=>acc+usuario.puntos,0)
    const puntosMedia = puntosTotal/usuarios.length;

    //Deolver el objeto pedido
    return {
        puntosMedia:puntosMedia,
        edadMedia:edadMedia,
        usuarioJoven:usuarioJoven,
        usuarioMayor:usuarioMayor,
        usuariosPorCiudad:usuariosPorCiudad,
        porcentajeActivos:porcentajeActivos
    }

}

console.log("Obtener estadísticas de los usuarios");
console.log(obtenerEstadisticasUsuarios());
console.log("----------------------------------------------------------------------");


//------- FUNCIONES ADICIONALES ------- 
function filtrarEstadisticasPorNivel(nivel){
    if(!typeof nivel === 'string' || !nivel || nivel === '') return {};
    return usuarios.filter(usuario=>usuario.nivel===nivel);    
}

console.log("Obtener usuarios por su nivel");
console.log(filtrarEstadisticasPorNivel("premium"));
console.log("----------------------------------------------------------------------");


function compararEstadisticas(criterio,usuario1,usuario2){
    if(!typeof criterio !== 'string' || !criterio || criterio === '') return {};
    let resultado='';
    switch (criterio) {
        case "edad":
            if(usuario1.edad>usuario2.edad){
                resultado = usuario1.nombre+' es mayor que '+usuario2.nombre;
            }else{
                resultado = usuario2.nombre+' es mayor que '+usuario1.nombre;
            }
        case "puntos":
            if(usuario1.puntos>usuario2.puntos){
                resultado = usuario1.nombre+' tiene más puntos que '+usuario2.nombre;
            }else{
                resultado = usuario2.nombre+' tiene más puntos que '+usuario1.nombre;
            }
        default:
            return 0;
    }
    return resultado;
}


function obtenerUsuariosDestacados(criterio) {
    if (typeof criterio !== 'string') return [];
    const estadísticas = obtenerEstadisticasUsuarios();    
    switch (criterio) {
        case "edad":
            return usuarios.filter(usuario => usuario.edad > estadísticas.edadMedia);
        case "puntos":
            return usuarios.filter(usuario => usuario.puntos > estadísticas.puntosMedia);
        default:
            return [];
    }
    }


console.log("------------------------------------------------------------------------")
const criterio = "puntos";
console.log(`Obtener resultados destacados por ${criterio}`);
console.log(obtenerUsuariosDestacados(criterio));
