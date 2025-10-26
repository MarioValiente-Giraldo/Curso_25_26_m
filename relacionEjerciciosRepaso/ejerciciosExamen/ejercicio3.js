import { usuarios } from "../data.js"
// Ejercicio 3: Búsqueda Avanzada de Usuarios
// Objetivo: Practicar búsquedas complejas en arrays de objetos.
// Datos necesarios: Array  usuarios  del archivo  src/db/data.js
// Enunciado: Implementa una función llamada  buscarUsuariosPorHobbies  que:
// 1. Acepte como parámetro un array de hobbies a buscar
// 2. Devuelva todos los usuarios que tengan AL MENOS UNO de los hobbies especificados
// 3. Ordene los resultados por número de hobbies coincidentes (de más a menos)
// 4. En caso de empate, ordene alfabéticamente por nombre
// Crea funciones adicionales para:
// Contar el número de coincidencias por usuario
// Filtrar usuarios por ciudad o nivel
// Calcular estadísticas de los hobbies más populares
// Muestra los resultados por consola.

function buscarUsuariosPorHobbies(hobbies){
    const usuariosFiltrados = usuarios.filter(usuario=>{
        return hobbies.some(hobby=>usuario.hobbies.includes(hobby));
        });
        usuariosFiltrados.sort((a,b)=>{
            const coincidenciasA = a.hobbies.filter(hobby=>hobbies.includes(hobby)).length;
            const coincidenciasB = b.hobbies.filter(hobby=>hobbies.includes(hobby)).length;
            if(coincidenciasA===coincidenciasB){
                return a.nombre.localeCompare(b.nombre);
            }
            return coincidenciasB-coincidenciasA;
        })
        return usuariosFiltrados;          
};



function contarCoincidencias(hobbies){
    return usuarios.map((usuario)=>({
        nombre:usuario.nombre,
        coincidencias:usuario.hobbies.filter(hobby=>hobbies.includes(hobby)).length
    }));
};


function filtrarPorCiudad(ciudad){
    return usuarios.filter(usuario=>usuario.ciudad===ciudad);
};

function filtrarPorNivel(nivel){
    return usuarios.filter(usuario=>usuario.nivel===nivel);
};

function calcularHobbiesMasPopulares(){
    const frecuenciaHobby = {};
    usuarios.forEach(usuario=>{
        usuario.hobbies.forEach(hobby=>{
            frecuenciaHobby[hobby] = (frecuenciaHobby[hobby]||0)+1;
        });
    });
    return Object.entries(frecuenciaHobby).sort((a,b)=> b[1]-a[1]);
}

