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
 
}