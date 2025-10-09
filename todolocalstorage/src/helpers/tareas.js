import { uid } from "uid";
const TEXT_KEY =  import .meta.env.VITE_TEXT_KEY;


function saveJSONParse(text){
    try {
        if(typeof text !== "string") throw new Error('Error, la data ${text}} no es un string');    
        return JSON.parse(text);
    } catch (error) {
        throw new Error("Error parseando la data");
    }
}

export const rellenarLocalStorage=(arrayTareas,tareas="Tareas")=>{
    //Guardar en el local storage en la clave
    localStorage.setItem(tareas,JSON.stringify(arrayTareas));

}
//Crear una función llamada "mostrarTarea" que le pase por parametro una clave y me muestre por consola la clave, utilizar console.table
export const mostrarTarea=(clave)=>{
    console.table(JSON.parse(localStorage.getItem(clave)));

}

//Crear una función llamada "getTareas", que duelva un array con todas las tareas que haya en localStorage, si no hay, devuelve un array vacío.
export const getTareas=()=>{
    
    const tareas = localStorage.getItem('Tareas');
    return tareas ? JSON.stringify(tareas) : [];
} 


//Crear una función llamada "saveTareas", el cual recibe un array de tareas y los guarda en localStorage bajo la clave tareas, señalizalo previamente a JSON
export const saveTareas=(arrayTareas=[])=>{
    try{
        if(!Array.isArray(arrayTareas)) throw new Error ("Error, la data no es un array");
        //Serializamos -> Convertir tipo de dato necesario, en este caso string porque estamos trabajando con localStorage  ‼️‼️‼️
        const json = JSON.stringify(arrayTareas);
        //Guardar en el localStorage
        localStorage.setItem(TEXT_KEY,json);
        console.info("Array guardado correctamente 💾💾")
    }catch(error){
        throw new Error("Error guardando el array ⛔");
    }
}   

/*Crear una funcion llamada "addTarea", el cual recibe como parametro su nombre,
generará su id único, y establece su valor "completado" a false, y la fecha de creación es actual.
 Se añade al array de tareas y se actualiza localStorage */

export const addTarea=(nombreTarea)=>{
    const limpio = String(nombreTarea ?? "").trim();
    const nuevaTarea={
        id: uid(),
        nombre: limpio,
        fechaCreacion: new Date().toISOString(),
        completada: false,
    }
    saveTareas(getTareas().push(nuevaTarea));
}

//Crear una funciñon llamada "deleteTarea", el cual elimina la tarea que coincida con el ID, actualizará el localStorage
export const deleteTarea=(id)=>{
    try {
        if(!id || typeof id !== "string") throw new Error("Error, el id debe ser un string válido");
        
        const tareas = getTareas();
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        
        if(tareas.length === tareasActualizadas.length) {
            console.warn(`Advertencia: No se encontró tarea con id ${id}`);
            return;
        }
        
        saveTareas(tareasActualizadas);
        console.info(`Tarea con id ${id} eliminada correctamente ✅`);
    } catch(error) {
        throw new Error("Error eliminando la tarea ⛔");
    }

}
//Crear una función llamada "completarTarea", se le pasa como parámetro un id, la función debe buscar la tarea por el ID y poner a true su campo "completada"
export const completarTarea=(id)=>{
    try{
        if (!id || typeof id !== "string"){ throw new Error ("Error, el id debe ser un string válido")}

        const tareas = getTareas();
        const tarea = tareas.find(tarea => tarea.id === id);
        if (!tarea){
            console.warn(`Advertencia: No se encontró tarea con id ${id}`);
            return;
        }

        tarea.completada = true;
        saveTareas(tareas);
        console.info(`Tarea con id ${id} completada correctamente ✅`);
    }catch(error){
        throw new Error("Error  al completar la tarea ⛔");
    }

}
//Crear una función llamada "descompletarTarea", se le pasa como se le pasa como parámetro un id, la función debe buscar la tarea por el ID y poner a false su campo "completada"
export const descompletarTarea=(id)=>{
    try {
        if (!id || typeof id !== "string"){ throw new Error ("Error, el id debe ser un string válido")}

        const tareas = getTareas();
        const tarea = tareas.find(tarea => tarea.id === id);
        if (!tarea){
            console.warn(`Advertencia: No se encontró tarea con id ${id}`);
            return;
        }

        tarea.completada = false;
        saveTareas(tareas);
        console.info(`Tarea con id ${id} completada correctamente ✅`);
    }catch(error){
        throw new Error("Error al descompletar la tarea ⛔");
    }
  
}

//Crear una función llamada "buscarCompletadas", el cual devuelve una array de las tareas que estén completas
export const buscarCompletadas=()=>{
    try{

    const tareas = getTareas();
    return tareas.filter(tarea => tarea.completada === true);

    }catch(error){
        throw new Error("Error al buscar las tareas completadas ⛔");
    }

}

//Crear una función llamada "buscarNoCompletadas", el cual devuelve una array de las tareas que NO estén completas
export const buscarnOCompletadas=()=>{
    try{

    const tareas = getTareas();
    return tareas.filter(tarea => tarea.completada === false);

    }catch(error){
        throw new Error("Error al buscar las tareas NO  completadas ⛔");
    }
}

//Crear una función llamada "buscarPorNombre", la cual recibe por parámtro el nombre de la tarea, el cual devolverá un array con las tareas cuyo nombre contenga el texto buscado.
export const buscarPorNombre=(nombre)=>{
    try{
        if(!nombre || typeof nombre !== "string") throw new Error("Error, el nombre debe ser un string válido");
        const tareas = getTareas();
        const formatoCorrectoNombre = nombre.trim().toLowerCase();
        return tareas.filter(tarea => tarea.nombre.toLowerCase().includes(formatoCorrectoNombre));
        
    }catch(error){
        throw new Error("Error al buscar las tareas por nombre ⛔");
    }
}

//Crear una función llamada "borrarTodasLasTareas", está eliminará todas las tareas del localStorage.
export const borrarTodasLasTareas=()=>{
    try {
        localStorage.removeItem(TEXT_KEY);
        console.info("Todas las tareas eliminadas correctamente ✅");
    } catch (error) {
        throw new Error ("Error al eliminar todas las tareas")
    }
}