

export default function generarRecomendacion(idCancionBase,cantidad = 3){
    const catalogo = JSON.parse(localStorage.getItem('catalogo'));
    const cancionBase = catalogo.find(cancion => cancion.id === idCancionBase);

    if(!cancionBase) throw new Error (`No se encontró la canción con el ID ${idCancionBase}`);
    const canciones = catalogo.filter(cancion => cancion.id !== idCancionBase);
    const puntuaciones = canciones.map(cancion => {
        let puntuacion = 0;
        const añosRango = 5;
        const segundosRango = 60;
        let motivos = [];
        if(cancion.artista === cancionBase.artista){
            puntuacion +=5;
            motivos.push('Mismo artista');
        }
         if(cancion.genero == cancionBase.genero){
            puntuacion +=3;
            motivos.push('Mismo género');
        }
         if (cancion.año + añosRango>= cancionBase.año && cancion.año - añosRango <= cancionBase.año){
            puntuacion +=2;
            motivos.push('Año similar');
        }
         if (cancion.segundosRango + segundosRango >= cancionBase.segundosRango && cancion.segundosRango - segundosRango <= cancionBase.segundos){
            puntuacion++;
            motivos.push('Duración similar');
        
        }
        return {
            cancion,
            puntuacion,
            motivos

        }
    });
    puntuaciones.sort((a,b)=>b.puntuacion-a.puntuacion);

    const cantidadCanciones = puntuaciones.slice(0,cantidad);
    return cantidadCanciones;    
}