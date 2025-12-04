import { bienvenida } from "../db/data";

//Importar las variables .env
const PORT = import.meta.env.VITE_PORT;
const URL = import.meta.env.VITE_URL;
const URL_PORT = `${URL}:${PORT}`;

export function createEjercicio1(){
    async function  createEjercicio1Fetch() {
        try {   
            const container = document.createElement("div");
            const response = await fetch(`${URL_PORT}/bienvenida`); 
            if (!response.ok) {
                throw new Error("ERROR");
            }
            const data = await response.json();
            const texto = data.texto;

            const parrafo = document.createElement("p");
                parrafo.textContent = texto;
                parrafo.classList.add('welcome-message');
                container.appendChild(parrafo);
            return container;

        } catch(error) {
            console.log(error);
        }
    }

    function createEjercicio1SinFetch(){
        const data = bienvenida;
        const container = document.createElement("div");
        const parrafo = document.createElement("p");
            parrafo.textContent = data.texto;
            parrafo.classList.add('welcome-message');
            container.appendChild(parrafo);
        
        return container;
    } 


    return {
        createEjercicio1Fetch,
        createEjercicio1SinFetch
    }


}



