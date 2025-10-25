import { usuarios } from "../data.js";
/**
 *  Esta función sirve para obtener los usuarios que contengan uno de los hobbies que le pasemos en los parámetros
 * @param {String[]} hobbies - Array de hobbies a buscar
 * @return {Object[]} - Devuelve un array de usuarios con sus coincidencias 
 */
function buscarUsuarioPorHobby(hobbies){
    if(hobbies.length===0 || !Array.isArray(hobbies))return [];
    const usuariosCoincidencias = usuarios.filter(usuario=>
        usuario.hobbies.some(hobbie => hobbies.includes(hobbie))
    );

    const conteoHobbies = usuariosCoincidencias.map(usuario=>{
        const coincidencias = usuario.hobbies.filter(hobbie=>hobbies.includes(hobbie)).length;
        return {...usuario,coincidencias};
    });

    const usuariosOrdenados = conteoHobbies.sort((a,b)=>{
        if(b.coincidencias!==a.coincidencias){
            return b.coincidencias-a.coincidencias;
        }
        return a.nombre.localeCompare(b.nombre);
    });

    return usuariosOrdenados;
}
/**
 *  Función que sirve para ver cuantos hobbies tiene el usuario
 * @param {Object} usuario - Usuario al cual vamos a buscar su número de coincidencias
 * @param {String[]} hobbies  - Array de hobbies a comprobar si los tiene el usuario
 * @returns {Number} - Número de hobbies que tiene el usuario
 */
function contarCoincidenciasUsuario(usuario,hobbies){
    if(hobbies.length===0 || !Array.isArray(hobbies))return 0;
    if(usuario.hobbies.length===0 || !Array.isArray(usuario.hobbies))return 0;
    return usuario.hobbies.filter(hobbie=>hobbies.includes(hobbie)).length;

}
/**
 *  Función que sirve para filtrar los usuarios por su ciudad
 * @param {String} ciudad - Nombre de la ciudad por la que vamos a buscar 
 * @returns {Object[]} - Retorna los usuarios que sean de la ciudad pasada como parámetro
 */
function filtrarPorCiudad(ciudad){
    if(typeof ciudad !== "string" || ciudad === '')return [];
    const ciudadNormalizada = ciudad.trim().toLowerCase();
    return usuarios.filter(usuario=>usuario.ciudad.trim().toLowerCase() === ciudadNormalizada);
}

/**
*  Función que sirve para filtrar los usuarios por su nivel
 * @param {String} nivel - Nivel de los usuarios por el cual vamos a filtrar
 * @returns {Object[]} - Retorna los usuarios del nivel por el que filtremos
 */
function filtrarPorNivel(nivel){
    if(typeof nivel !== "string" || nivel === '')return [];
    const nivelNormalizado = nivel.trim().toLowerCase();
    return usuarios.filter(usuario=>usuario.nivel.trim().toLowerCase() === nivelNormalizado);
}

function calcularHobbiesMasPopulares(){
    const conteoHobbies = {};

    usuarios.forEach(usuario=>{
        usuario.hobbies.forEach(hobbie=>{
            conteoHobbies[hobbie] = (conteoHobbies[hobbie] || 0)+1;
        });
    });

    const estadisticas = Object.entries(conteoHobbies)
    .map(([hobbie,conteo])=>({hobbie,conteo}))
    .sort((a,b)=>b.conteo-a.conteo);
    return estadisticas;

}

console.log("=== Usuarios con fotografía ===");
const resultado1 = buscarUsuarioPorHobby(['fotografía']);
console.log(resultado1);

console.log("\n=== Usuarios con lectura o viajes ===");
const resultado2 = buscarUsuarioPorHobby(['lectura', 'viajes']);
console.log(resultado2);

console.log("\n=== Usuarios con videojuegos, cocina o yoga ===");
const resultado3 = buscarUsuarioPorHobby(['videojuegos', 'cocina', 'yoga']);
console.log(resultado3);

console.log("\n=== Estadísticas de hobbies más populares ===");
const stats = calcularHobbiesMasPopulares();
console.log(stats);





