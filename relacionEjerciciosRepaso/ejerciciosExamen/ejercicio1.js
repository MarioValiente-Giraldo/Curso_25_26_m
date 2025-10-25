import { usuarios } from "../data.js"
// Ejercicio 1: Filtrado y Transformación de Usuarios
// Objetivo: Practicar el uso de métodos de arrays como  filter ,  map  y  sort .
// Datos necesarios: Array  usuarios  del archivo  src/db/data.js
// Enunciado: Implementa una función llamada  obtenerUsuariosActivosOrdenados  que:
// 1. Filtre solo los usuarios activos del array  usuarios
// 2. Ordene los usuarios resultantes por edad de forma descendente
// 3. Transforme cada usuario en un nuevo objeto que solo contenga las propiedades:  nombre ,  email y  edad
// 4. Devuelva el array resultante
// Crea funciones adicionales para:
// Ordenar los resultados por edad (ascendente/descendente)
// Buscar por nombre o email
// Mostrar/ocultar usuarios inactivos
// Muestra los resultados por consola.
function obtenerUsuariosActivosOrdenados(){
    const usuariosActivos = usuarios.filter(usuario=>usuario.activo);
    const usuariosOrdenados = usuariosActivos.sort((a,b)=>b.edad-a.edad);
    const usuariosTransformados = usuariosOrdenados.map(usuario=>{
        return{
            nombre:usuario.nombre,
            email:usuario.email,
            edad:usuario.edad
        }
    });
    return usuariosTransformados;

};

//FUNCIONES ADICIONALES

function ordenarPorEdad(usuarios,orden){
    switch (orden) {
        case "ascendente":
            return usuarios.sort((a,b)=>a.edad-b.edad);
        case "descendente":
            return usuarios.sort((a,b)=>b.edad-a.edad);
        default:
            return usuarios;
    }
}
/**
 * 
 * @param {Object[]} usuarios 
 * @param {*} busqueda 
 * @returns 
 */
function buscarPorNombreEmail(usuarios, busqueda) {
    const termino = busqueda.toLowerCase();
    return usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(termino) ||
        usuario.email.toLowerCase().includes(termino)
    );
}

function mostrarOcultarInactivos(mostrar){
    if(mostrar){
        return usuarios;
    }else{
        return usuarios.filter(usuario=>usuario.activo);
    }
};


//Mostrar por consola

console.log('Mostrar todos los usuarios activos y ordenados');

const usuariosActivosOrdenados = obtenerUsuariosActivosOrdenados();
console.log(usuariosActivosOrdenados);
console.log('-----------------------------------------------');
console.log("Ordenar por edad ascendente")
console.log(ordenarPorEdad(usuariosActivosOrdenados,"ascendente"));
console.log('-----------------------------------------------');
console.log(typeof usuariosActivosOrdenados);
console.log("Buscar por nombre Ana");
 console.log(buscarPorNombreEmail(usuariosActivosOrdenados,'Ana'));
console.log('-----------------------------------------------');
console.log("Mostrar usuarios inactivos");
console.log(mostrarOcultarInactivos(true));

