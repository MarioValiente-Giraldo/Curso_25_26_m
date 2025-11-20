// Ejercicio 11: Persistencia de Datos de Usuario
// Objetivo: Practicar el uso de LocalStorage para persistir datos.
// Datos necesarios: Array  usuarios  del archivo  src/db/data.js
// Enunciado: Implementa un módulo llamado  persistenciaUsuario  que:
// 1. Implemente las siguientes funciones:
// guardarUsuario(usuario) : Guarda un usuario en LocalStorage
// obtenerUsuario(id) : Recupera un usuario de LocalStorage por su id
// actualizarUsuario(id, datos) : Actualiza datos de un usuario en LocalStorage
// eliminarUsuario(id) : Elimina un usuario de LocalStorage
// listarUsuarios() : Devuelve todos los usuarios guardados en LocalStorage
// 2. Maneja los casos en que no haya datos en LocalStorage
// 3. Incluye manejo de errores para operaciones que puedan fallar
// Crea funciones adicionales para:
// Validar los datos antes de guardar
// Exportar/importar datos en formato JSON
// Sincronizar datos entre diferentes pestañas
// Muestra los resultados por consola

import { usuarios } from "../data.js";

export function persistenciaUsuario(){
    function guardarUsuario(usuario){
        try {
            localStorage.setItem(usuario.id,JSON.stringify(usuario));
        } catch (error) {
            throw new Error("No se ha podido guardar el usuario");
        }
    }
    function obtenerUsuario(id){
        try {
            localStorage.getItem(id);
        } catch (error) {
            throw new Error("No se ha podido obtener el usuario");
        }
    }

    function actualizarUsuario(id,datos){
        try {
            localStorage.setItem(id,JSON.stringify(datos));
        } catch (error) {
            throw new Error("No se ha podido actualizar el usuario");
        }
    }

    function eliminarUsuario(id){
        try {
            localStorage.removeItem(id);
        } catch (error) {
            throw new Error("No se ha podido eliminar el usuario");
        }
    }

    function listarUsuarios(){
        const usuarios = [];
        try {
            for(let i = 0; i<localStorage.length; i++){
                usuarios.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }catch(error){
            throw new Error("No se ha podido listar los usuarios");
        }
    }

    function validarDatos(usuario){
        if (!usuario || typeof usuario !== 'object') return false;
        if (typeof usuario.nombre !== 'string' || usuario.nombre.length < 3) return false;   
        return true;
    }

    function exportarJSON(){
        const usuarios = [];
        for(let i = 0; i<localStorage.length; i++){
            usuarios.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        return JSON.stringify(usuarios);
    
    }

    function importarJSON(datos){
        return JSON.parse(datos);
    }

    function sincronizarDatos(){
        window.addEventListener('storage', (event) => {
            if (event.key === STORAGE_KEY) {
                console.log("🔄 Datos de usuario actualizados en otra pestaña. Sincronizando...");
                
            }
        });   
    }
    return {
        guardarUsuario,
        obtenerUsuario,
        actualizarUsuario,
        eliminarUsuario,
        listarUsuarios,
        validarDatos,
        exportarJSON,
        importarJSON,
        sincronizarDatos
    }

}


