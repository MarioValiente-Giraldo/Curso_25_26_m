import { canciones } from '../db/data.js';

export function     gestionMusica(){
    function guardarLocalStorage(clave,data){
        localStorage.setItem(clave, JSON.stringify(data));
    }

    function cargarLocalStorage(clave){
        return JSON.parse(localStorage.getItem(clave));
    }

    function crearCatalogo(){
        const mapaCanciones = new Map();
        canciones.forEach(cancion => {
            mapaCanciones.set(cancion,{
                id: cancion.id,
                titulo: cancion.titulo,
                artista:cancion.artista,
                album: cancion.album,
                genero: cancion.genero,
                año: cancion.año,
                reproducciones: cancion.reproducciones,
                historialReproduccion:[],
                duracion: cancion.duracion
            });
        });
        const arrayCanciones = Array.from(mapaCanciones.values());
        guardarLocalStorage('catalogo',arrayCanciones);
        return mapaCanciones;
    }

    function reproducirCancion(idCancion){
        const catalogo = cargarLocalStorage('catalogo');
        const cancion = catalogo.find(c => c.id === idCancion);
        if(!cancion) throw new Error ('Cancion no encontrada');
        cancion.reproducciones++;
        cancion.historialReproduccion.push({
            fecha: new Date().toISOString(),
            timestamp: Date.now()
        });
        guardarLocalStorage('catalogo',catalogo);
        return cancion;
    }

    function gestionarPlaylist(){
        function crear(nombrePlaylist){
            const playlistLocal = cargarLocalStorage('playlist');
            const playlists = playlistLocal 
            ? new Map(playlistLocal.map(([nombrePlaylist,ids])=>[nombrePlaylist,new Set(ids)])) 
            : new Map();

            if(playlists.has(nombrePlaylist )){
                return false;
            }
            playlists.set(nombrePlaylist,new Set());
            const playlistsArray = Array.from(playlists.entries().map(([nombre, ids])=>[nombre,Array.from(ids)]));
            guardarLocalStorage('playlist',playlistsArray);
            return true;
        }

        function agregar(nombrePlaylist,idCancion){
            const playlistLocal = cargarLocalStorage('playlist');
            const catalogo = cargarLocalStorage('catalogo')
            if(!playlistLocal) return false;
            const cancion = catalogo.find(c => c.id === idCancion);
            if(!cancion) return false;
            const playlists = new Map(playlistLocal.map(([nombrePlaylist,ids])=>[nombrePlaylist,new Set(ids)]));
            const playlist = playlists.get(nombrePlaylist);
            if(!playlist) return false;
            playlist.add(idCancion);
            playlists.set(nombrePlaylist,playlist);
            const playlistsArray = Array.from(playlists.entries().map(([nombre,ids])=>[nombre,Array.from(ids)]));
            guardarLocalStorage('playlist',playlistsArray);
            return true;
        }

        function eliminar(nombrePlaylist,idCancion){
            const playlistLocal = cargarLocalStorage('playlist');
            if(!playlistLocal) return false;
            const miPlaylist = playlistLocal.find(([nombre])=>nombre === nombrePlaylist);
            if(!miPlaylist) return false;
            const mapPlaylists = new Map(playlistLocal.map(([nombre,ids])=>[nombre,new Set(ids)]));
            const playlist = mapPlaylists.get(nombrePlaylist);
            if(!playlist) return false;
            playlist.delete(idCancion);
            const playlistArray = Array.from(mapPlaylists.entries().map(([nombre,ids])=>[nombre,Array.from(ids)]));
            guardarLocalStorage('playlist',playlistArray);
            return true;
        }

        function obtener(nombrePlaylist){
            const playlistLocal = cargarLocalStorage('playlist');
            if(!playlistLocal) return false;
            const catalogoLocal = cargarLocalStorage('catalogo');
            if(!catalogoLocal) return false;
            const mapPlaylists = new Map(playlistLocal.map(([nombre,ids])=>[nombre,new Set(ids)]));
            const idsPlaylist = mapPlaylists.get(nombrePlaylist);
            if(!idsPlaylist) return false;
            const catalogo = catalogoLocal.filter(cancion=>idsPlaylist.has(cancion.id));
            return catalogo;            
        }

        function listar(){
        return  cargarLocalStorage('playlist')  || []
        }

        return {
            crear,
            agregar,
            eliminar,
            obtener,
            listar
        }
    }
    function contruirIndiceBusqueda(){
        const catalogo = cargarLocalStorage('catalogo');
        const indiceInvertido = new Map();
        const terminos = ['titulo','artista','album','genero','año'];
        catalogo.forEach(cancion=>{
            terminos.forEach(termino=>{
                const clave = cancion[termino]
                if(clave){
                    const c = clave.toString().toLowerCase().split(' ');
                    c.forEach(palabra=>{
                        if(!indiceInvertido.has(palabra)){
                            indiceInvertido.set(palabra,new Set());
                        }
                        indiceInvertido.get(palabra).add(cancion.id);
                    })
                }
            })
        });
        const arrayIndiceInvertido = Array.from(indiceInvertido.entries().map(([palabra,ids])=>[palabra,Array.from(ids)]));
        guardarLocalStorage('indiceInvertido',arrayIndiceInvertido);
        return indiceInvertido;
    }

    function buscarCanciones(termino, filtros = {}) {
    const indiceGuardado = cargarLocalStorage('indiceInvertido');
    const catalogo = cargarLocalStorage('catalogo');
    if (!indiceGuardado || !catalogo) return [];

    // Reconstruir el índice invertido desde el array almacenado
    const indiceInvertido = new Map(indiceGuardado.map(([palabra, ids]) => [palabra, new Set(ids)]));

    // Normalizar el término de búsqueda (minúsculas y sin acentos)
    const terminoNormalizado = termino.toString().toLowerCase();

    // Buscar IDs asociados al término
    const ids = indiceInvertido.get(terminoNormalizado);
    if (!ids) return [];

    // Convertir IDs en objetos canción
    let resultados = catalogo.filter(cancion => ids.has(cancion.id));

    // Aplicar filtros opcionales
    if (filtros.genero) {
        resultados = resultados.filter(c => c.genero.toLowerCase() === filtros.genero.toLowerCase());
    }

    if (filtros.añoMin) {
        resultados = resultados.filter(c => c.año >= filtros.añoMin);
    }

    if (filtros.añoMax) {
        resultados = resultados.filter(c => c.año <= filtros.añoMax);
    }

    if (filtros.duracionMax) {
        resultados = resultados.filter(c => c.duracion <= filtros.duracionMax);
    }

    // Ordenar por número de reproducciones (descendente)
    resultados.sort((a, b) => b.reproducciones - a.reproducciones);

    return resultados;
    }

    function generarEstadisticasMusicales(){
        const catalogo = cargarLocalStorage('catalogo');
        return {
            totalCanciones: catalogo.length,
            duracionTotal: Math.round((catalogo.reduce((acc,cancion)=>acc + cancion.duracion,0)/60)),
            cancionMasReproducida:catalogo.reduce((acc,cancion)=>cancion.reproducciones>acc.reproducciones?cancion:acc),
            generosPorCantidad: catalogo.reduce((acc,cancion)=>{
                acc[cancion.genero] = (acc[cancion.genero] || 0)+1;
                return acc;
                
            },{}),
            artistasUnicos: new Set(catalogo.map(cancion=>cancion.artista)).size,
            añoPromedio: catalogo.reduce((acc,cancion)=>acc+cancion.año,0)/catalogo.length,
            distribucionDecadas: catalogo.reduce((acc,cancion)=>{
                const decada = Math.floor(cancion.año/10)*10;
                acc[decada] = (acc[decada] || 0)+1;
                return acc;
            },{})
        }
    }

    function generarRecomendaciones(idCancionBase, cantidad = 3) {
    const catalogo = cargarLocalStorage('catalogo');
    const cancionBase = catalogo.find(c => c.id === idCancionBase);
    if (!cancionBase) return [];

    const rangoAño = 5;
    const rangoSegundos = 60;

    const catalogoSinBase = catalogo.filter(c => c.id !== idCancionBase);

    const recomendaciones = catalogoSinBase.map(cancion => {
        let puntuacion = 0;
        let razones = [];

        if (cancion.artista === cancionBase.artista) {
            puntuacion += 5;
            razones.push('Mismo artista');
        }
        if (cancion.genero === cancionBase.genero) {
            puntuacion += 3;
            razones.push('Mismo género');
        }
        if (cancion.año >= cancionBase.año - rangoAño && cancion.año <= cancionBase.año + rangoAño) {
            puntuacion += 2;
            razones.push('Año similar');
        }
        if (cancion.duracion >= cancionBase.duracion - rangoSegundos && cancion.duracion <= cancionBase.duracion + rangoSegundos) {
            puntuacion += 1;
            razones.push('Duración similar');
        }

        return {
            ...cancion,
            puntuacion,
            razones
        };
    });

    recomendaciones.sort((a, b) => b.puntuacion - a.puntuacion);
    return recomendaciones.slice(0, cantidad);
}


    return {
        crearCatalogo,
        reproducirCancion,
        gestionarPlaylist,
        contruirIndiceBusqueda,
        buscarCanciones,
        guardarLocalStorage,
        cargarLocalStorage,
        generarEstadisticasMusicales,
        generarRecomendaciones
    }

}