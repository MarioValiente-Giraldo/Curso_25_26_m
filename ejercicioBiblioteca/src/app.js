    import { sistemaGestionMusical } from "../helpers/sistemaGestionMusica.js";
    import { gestionarPlaylists } from "../helpers/sistemaPlaylist.js";
    import { generarEstadisticasMusicales } from "../helpers/analisisEstadisticas.js";
    import { busquedaInteligente } from '../helpers/busquedaInteligente.js';
    import { generarRecomendacion } from '../helpers/generarRecomendaciones.js';
    

    export function initApp() {
//         const sistema = sistemaGestionMusical();
//         const catalogo = sistema.crearCatalogo();
//         const playlists = gestionarPlaylists();
// // Crear playlists
// playlists.crearPlaylist("Rock Classics");
// playlists.crearPlaylist("Favoritas");
// // Agregar canciones
// playlists.agregar("Rock Classics", 1); // Bohemian Rhapsody
// playlists.agregar("Rock Classics", 3); // Stairway to Heaven
// playlists.agregar("Rock Classics", 6); // Hotel California
// playlists.agregar("Favoritas", 1);
// playlists.agregar("Favoritas", 2);
// // Listar playlists
// console.log("Playlists disponibles:", playlists.listar());
// // Obtener canciones de una playlist
// const misRocks = playlists.obtenerPlaylist("Rock Classics");
// console.log(`\nPlaylist "Rock Classics" tiene ${misRocks.length}
// canciones:`);
// misRocks.forEach(cancion => {
//  console.log(` - ${cancion.titulo} (${cancion.artista})`);
// });
// // Eliminar canción de playlist
// playlists.eliminar("Rock Classics", 1);
// console.log(`\nDespués de eliminar, quedan ${playlists.obtenerPlaylist("Rock Classics").length} canciones`);

//   try {
//  const cancion = sistema.reproducirCancion(1);
//  console.log(`Reproduciendo: ${cancion.titulo} - ${cancion.artista}`);
//  console.log(`Total reproducciones: ${cancion.reproducciones}`);

//  sistema.reproducirCancion(1); // Segunda reproducción
//  sistema.reproducirCancion(999); // ID que no existe
// } catch (error) {
//  console.error(`Error: ${error.message}`);
// }      

// const stats = generarEstadisticasMusicales();
// console.log("=== ESTADÍSTICAS MUSICALES ===");
// console.log(`Total de canciones: ${stats.totalCanciones}`);
// console.log(`Duración total: ${stats.duracionTotal} minutos`);
// console.log(`Canción más reproducida:
// ${stats.cancionMasReproducida.titulo}`);
// console.log(`Artistas únicos: ${stats.artistasUnicos}`);
// console.log(`Año promedio: ${stats.añoPromedio}`);
// console.log("\nGéneros:");
// console.table(stats.generosPorCantidad);
// console.log("\nDistribución por década:");
// console.table(stats.distribucionDecadas);
//     }

    // const contruirIndiceBusqueda = busquedaInteligente();
    // const indice = contruirIndiceBusqueda.construirIndiceBusqueda();
    // console.log(`Índice construido con ${indice.size} términos únicos`);
    // console.log(`El término "rock" aparece en ${indice.get("rock").size}
    // canciones`);
    // console.log(`El término "queen" aparece en ${indice.get("queen").size}
    // canciones`);

    // const resultados1 = contruirIndiceBusqueda.buscarCanciones("rock");
    // console.log(`Búsqueda "rock": ${resultados1.length} resultados`);
    // resultados1.forEach(c => console.log(` - ${c.titulo} (${c.genero})`));
    // }

// Generamos recomendaciones basadas en Bohemian Rhapsody (ID 1)
const recomendaciones = generarRecomendacion(1, 5);
console.log(recomendaciones)
console.log("Si te gustó 'Bohemian Rhapsody', te recomendamos:\n");
recomendaciones.forEach((rec, index) => {
console.log(`${index + 1}. ${rec.cancion.titulo} -
${rec.cancion.artista}`);
console.log(` Puntuación: ${rec.puntuacion} puntos`);
console.log(rec.motivos.join(', '));console.log();
});
}
   