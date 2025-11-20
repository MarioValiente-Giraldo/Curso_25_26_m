import { canciones } from "../db/data.js";

export function gestionarPlaylists(){
    function crearPlaylist(nombrePlaylist){
    const playlistsData = localStorage.getItem('playlists');
    const playlists = playlistsData 
        //Creamos el map a partir de los datos del localStorage, donde parseamos la data, y mapeamos el map para que añada el nombre y sus ids respectivos
        ? new Map(JSON.parse(playlistsData).map(([nombre, ids]) => [nombre, new Set(ids)]))
        : new Map();
    
    if(playlists.has(nombrePlaylist)){
        return false;
    }
    playlists.set(nombrePlaylist, new Set());
    const playlistsArray = Array.from(playlists.entries()).map(
    ([nombre, ids]) => [nombre, Array.from(ids)]
    );
    localStorage.setItem('playlists', JSON.stringify(playlistsArray));

    
    return true;
    }

    function agregar(nombrePlaylist, idCancion) {
    const playlistsData = localStorage.getItem('playlists');
    if (!playlistsData) return false;
     //Creamos el map a partir de los datos del localStorage, donde parseamos la data, y mapeamos el map para que añada el nombre y sus ids respectivos
    const playlists = new Map(JSON.parse(playlistsData).map(([nombre, ids]) => [nombre, new Set(ids)]));
    if (!playlists.has(nombrePlaylist)) {
        return false;
    }
    const playlist = playlists.get(nombrePlaylist);
    if (playlist.has(idCancion)) {
        return false; 
    }
    playlist.add(idCancion);
    playlists.set(nombrePlaylist, playlist);
    //Convierte el Map en un array, los Sets que tiene cada clave los convierte a arrays para poder guardarlo en localStorage
    localStorage.setItem('playlists',JSON.stringify(Array.from(playlists.entries()).map(([nombre, ids]) => [nombre, Array.from(ids)])));
    return true;
    }

    function eliminar(nombrePlaylist, idCancion) {
        const playlistsData = localStorage.getItem('playlists');
        //Creamos el map a partir de los datos del localStorage, donde parseamos la data, y mapeamos el map para que añada el nombre y sus ids respectivos
        const playlists = new Map(JSON.parse(playlistsData).map(([nombre, ids])=>[nombre, new Set(ids)]));
        if(!playlists.has(nombrePlaylist)) return false;
        const playlist = playlists.get(nombrePlaylist);
        if(!playlist.has(idCancion)) return false;
        playlist.delete(idCancion);
        playlists.set(nombrePlaylist, playlist);
         //Convierte el Map en un array, los Sets que tiene cada clave los convierte a arrays para poder guarfarlo en localStorage
        localStorage.setItem('playlists',JSON.stringify(Array.from(playlists.entries().map(([nombre,ids])=>[nombre,Array.from(ids)]))))
        return true;
    }

    function obtenerPlaylist(nombrePlaylist){
        const playlistsData = localStorage.getItem('playlists');
        const playlists = new Map(JSON.parse(playlistsData).map(([nombre,ids]) => [nombre, new Set(ids)]));
        if(!playlists.has(nombrePlaylist)) return [];
        const idCanciones = playlists.get(nombrePlaylist);
        const cancionesPlaylist = canciones.filter(cancion => idCanciones.has(cancion.id));
        return cancionesPlaylist;
    }

    function listar(){
        const playlistsData = localStorage.getItem('playlists');
        return playlistsData ? JSON.parse(playlistsData) : [];
    }

    return{
        crearPlaylist,
        agregar,
        eliminar,
        obtenerPlaylist,
        listar
    
    }

}