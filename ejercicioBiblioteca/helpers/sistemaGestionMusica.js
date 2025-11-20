import { canciones } from "../db/data.js";

export function sistemaGestionMusical(){
    function crearCatalogo(){
        const catalogo = new Map();
        canciones.forEach(cancion => {
            catalogo.set(cancion.id, {
                id: cancion.id,              
                titulo: cancion.titulo,    
                artista: cancion.artista,  
                album: cancion.album,      
                duracion: cancion.duracion,   
                genero: cancion.genero,    
                año: cancion.año,             
                reproducciones: cancion.reproducciones, 
                historialReproduccion: []
            })
        })
        localStorage.setItem('catalogo', JSON.stringify(Array.from(catalogo.values())));
        return catalogo;
    }
    function reproducirCancion(idCancion){
        const catalogo = JSON.parse(localStorage.getItem('catalogo'));
        const cancion = catalogo.find(cancion => cancion.id === idCancion);
        if(!cancion){
            throw new Error (`No se encontró la canción con el ID ${idCancion}`);
        }
        cancion.reproducciones++;
        cancion.historialReproduccion.push({
            fecha:new Date().toISOString(),
            timestamp: Date.now()
        });
        localStorage.setItem('catalogo', JSON.stringify(catalogo)); 
        return cancion;
    }
    
    return {
        crearCatalogo,
        reproducirCancion
    

    }
}