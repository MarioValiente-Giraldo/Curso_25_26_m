import { mostrarTarea, rellenarLocalStorage, getTareas } from './helpers/tareas.js';
import { dbTareas } from './db/db.js';

const TEXT_KEY =  import .meta.env.VITE_TEXT_KEY;
console.log(TEXT_KEY);


rellenarLocalStorage(dbTareas, TEXT_KEY);
mostrarTarea(TEXT_KEY);





