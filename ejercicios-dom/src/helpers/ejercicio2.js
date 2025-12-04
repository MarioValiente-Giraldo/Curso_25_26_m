//Importar las variables .env
const PORT = import.meta.env.VITE_PORT;
const URL = import.meta.env.VITE_URL;
const URL_PORT = `${URL}:${PORT}`;

export async function  createEjercicio2Fetch() {
    try{
        const container = document.createElement("div");
        const response = await fetch(`${URL_PORT}/tareas`);
        if(!response.ok){
            throw new Error('Error al obtener la data');
        }
        const data = await response.json();
        const list = document.createElement("ul");
        data.forEach(entry=>{
            const listItem = document.createElement("li");
            listItem.textContent = entry.texto;
            entry.completada? listItem.classList.add("completed") : listItem.classList.add("task-item");
            list.appendChild(listItem);
        });

        container.appendChild(list);
        return container;
    }catch(error){
        console.error(error);
    }
}

export async function  createEjercicio2SinFetch() {
    try{
        
    }catch(error){

    }
}


