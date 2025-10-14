import { VITE_ENV } from "../config/env"
const KEY = VITE_ENV.VITE_STORAGE_KEY;




/**
 * @description Funcion que reciba un array de users y lo guarde en LocalStorage
 * @param {Object} arrayUsers 
 */
export const initialStorage = (arrayUsers) => {
    localStorage.setItem(KEY,JSON.stringify(arrayUsers));
    console.log("Usuarios guardados correctamente")
}

/**
 * @description Funcion que trae del LocalStorage todos los usuarios
 * @returns  Array de usuarios
 */
export const getUsuarios = () => (JSON.parse(localStorage.getItem(KEY)) || [])

/**
 * @description Funcion que guarda un user en el LocalStorage en la key de .env
 * @param {Object} user  
*/
export const setUsuarios = (user) => initialStorage([...getUsuarios(), user]);

