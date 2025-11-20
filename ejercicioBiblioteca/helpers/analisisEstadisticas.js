
export function generarEstadisticasMusicales(){
    const catalogo = JSON.parse(localStorage.getItem('catalogo'));
    return {
        totalCanciones: catalogo.length,
        duracionTotal: Math.round((catalogo.reduce((acc,cancion)=>acc + cancion.duracion,0)/60)),
        cancionMasReproducida: catalogo.reduce((acc, cancion) => cancion.reproducciones > acc.reproducciones ? cancion : acc),
        generosPorCantidad: catalogo.reduce((acc,cancion)=>{
            acc[cancion.genero] = (acc[cancion.genero] || 0 ) +1;
            return acc;
        },{}),
        artistasUnicos: new Set(catalogo.map(c => c.artista)).size,
        añoPromedio: catalogo.reduce((acc,cancion)=> acc + cancion.año ,0)/catalogo.length,
        distribucionDecadas: catalogo.reduce((acc, cancion) => {
        const decada = Math.floor(cancion.año / 10) * 10;
        acc[decada] = (acc[decada] || 0) + 1;
        return acc;
        }, {}),
    }
}