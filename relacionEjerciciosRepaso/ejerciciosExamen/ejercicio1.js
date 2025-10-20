// Ejercicio 1: Filtrado y Transformación de Usuarios
// Objetivo: Practicar el uso de métodos de arrays como  filter ,  map  y  sort .
// Datos necesarios: Array  usuarios  del archivo  src/db/data.js
// Enunciado: Implementa una función llamada  obtenerUsuariosActivosOrdenados  que:
// 1. Filtre solo los usuarios activos del array  usuarios
// 2. Ordene los usuarios resultantes por edad de forma descendente
// 3. Transforme cada usuario en un nuevo objeto que solo contenga las propiedades:  nombre ,  email
// y  edad
// 4. Devuelva el array resultante
// Crea funciones adicionales para:
// Ordenar los resultados por edad (ascendente/descendente)
// Buscar por nombre o email
// Mostrar/ocultar usuarios inactivos
// Muestra los resultados por consola.

import { usuarios } from '../data.js';

function obtenerUsuariosActivosOrdenados(){
    return usuarios
        .filter(usuario=>usuario.activo)
        .sort((a,b)=>b.edad-a.edad)
        .map(usuario=>({nombre:usuario.nombre,email:usuario.email,edad:usuario.edad}));
    };


function obetenerUsuariosEdadAscendente(){
    return usuarios.sort((a,b)=>a.edad-b.edad).map(usuario=>({nombre:usuario.nombre,email:usuario.email,edad:usuario.edad}));;
}

function buscarParametro(parametro){
    const parametroFixex = parametro.trim().toLowerCase();
    return usuarios
    .filter(usuario=>
        usuario.nombre.toLowerCase().includes(parametroFixex)
        ||
        usuario.email.toLowerCase().includes(parametroFixex))
    .map(usuario=>({nombre:usuario.nombre,email:usuario.email,edad:usuario.edad}));
}

function mostrarUsuarios(){
    return usuarios.map(usuario=>({nombre:usuario.nombre,email:usuario.email,edad:usuario.edad,activo:usuario.activo}));
};


console.log(obtenerUsuariosActivosOrdenados());
console.log('------------------------------------------------------------------');
console.log(obetenerUsuariosEdadAscendente());
console.log('------------------------------------------------------------------');
console.log(buscarParametro('Ana'));
console.log('------------------------------------------------------------------');
console.log(mostrarUsuarios());