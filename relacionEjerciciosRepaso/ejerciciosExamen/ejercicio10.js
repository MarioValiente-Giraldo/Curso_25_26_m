// Ejercicio 10: Gestión de Permisos con Set
// Objetivo: Practicar el uso de Set para gestionar permisos de usuarios.
// Datos necesarios: Array  usuarios  del archivo  src/db/data.js
// Enunciado: Implementa una función llamada  gestionarPermisos  que:
// 1. Cree un Map donde la clave sea el id de usuario y el valor sea un Set con sus permisos
// 2. Inicialice el Map con permisos básicos para los usuarios del array  usuarios :
// Usuarios activos: permisos de "leer", "editar"
// Usuarios inactivos: solo permiso de "leer"
// 3. Implemente las siguientes funciones:
// agregarPermiso(idUsuario, permiso) : Añade un permiso a un usuario
// eliminarPermiso(idUsuario, permiso) : Elimina un permiso de un usuario
// tienePermiso(idUsuario, permiso) : Comprueba si un usuario tiene un permiso
// usuariosConPermiso(permiso) : Devuelve un array con ids de usuarios que tienen un
// permiso
// 4. Devuelva un objeto con el Map de permisos y las funciones para gestionarlo
// Crea funciones adicionales para:
// Crear roles predefinidos de permisos
// Asignar roles a múltiples usuarios a la vez
// Generar un informe de permisos
// Muestra los resultados por consola.

import { usuarios } from "../data.js";

function gestionarPermisos(){
    const permisosMap = new Map();
    usuarios.forEach(usuario=>{
        const permisos = new Set();
        if(usuario.activo){
            permisos.add("leer");
            permisos.add("editar");
        }else{
            permisos.add("leer");
        }
        permisosMap.set(usuario.id,permisos);
    })

    function agregarPermiso(idUsuario,permiso){
        const permisos = permisosMap.get(idUsuario);
        if(permisos){
            permisos.add(permiso);
            permisosMap.set(idUsuario,permisos);
        }
    }
    function eliminarPermiso(idUsuario,permiso){
        const permisos = permisosMap.get(idUsuario);
        if(permisos){
            permisos.delete(permiso);
            permisosMap.set(idUsuario,permisos);
        }
    }

    function usuariosConPermiso(permiso){
        const usuariosConPermiso = [];
        permisosMap.forEach((permisos,idUsuario)=>{
            if(permisos.has(permiso)){
                usuariosConPermiso.push(idUsuario);
            }
        })
        return usuariosConPermiso;
    }

    return {
        permisosMap,
        agregarPermiso,
        eliminarPermiso,
        usuariosConPermiso
    }

};

console.log(gestionarPermisos());

//Funciones adicionales

function crearRolesPredefinidos(){
    const roles = new Map();
    roles.set("Invitado",new Set(["leer"]));
    roles.set("Usuario",new Set(["leer","editar"]));
    roles.set("Administrador",new Set(["leer","editar","eliminar"]));
    return roles;
}


function asignarRolesAMultiplesUsuarios(rol,usuarios){
    const rolesMap = new Map(crearRolesPredefinidos());
    const mapUsuarioRoles = new Map();
    usuarios.forEach(usuario=>{
        const permisos = rolesMap.get(rol);
        mapUsuarioRoles.set(usuario.id,permisos);
    })
    return mapUsuarioRoles;
    
}

function generarInformePermisos(usuarios){
    const informe = [];
    const { permisosMap } = gestionarPermisos();
    
    usuarios.forEach(usuario=>{
        const permisos = permisosMap.get(usuario.id);
        if(permisos){
            informe.push({
                nombre:usuario.nombre,
                permisos:Array.from(permisos)
            });
        };
    });
    return informe;
}

console.log(generarInformePermisos(usuarios));
console.log(crearRolesPredefinidos());
console.log(asignarRolesAMultiplesUsuarios("Administrador",usuarios));
