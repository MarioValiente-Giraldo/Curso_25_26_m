import { canciones } from "../db/data";
import { sistemaGestionMusical } from "../helpers/sistemaGestionMusica";

export function busquedaInteligente(){
    function construirIndiceBusqueda(){
        const catalogo = sistemaGestionMusical().crearCatalogo();
        const indice = new Map();
        const terminos = ['titulo','artista','album','genero','año'];
        catalogo.forEach(cancion=>{
            terminos.forEach(termino=>{
                let clave = cancion[termino];
                if(clave){
                    const c = clave.toString().toLowerCase().split(' ');
                    c.forEach(palabra =>{
                        if(!indice.has(palabra)){
                            indice.set(palabra,new Set());
                        }
                        indice.get(palabra).add(cancion.id);
                    })
                }
            })
        })
        const indiceFinal = new Map();
        for (const [clave, valor] of indice.entries()){
            indiceFinal.set(clave,{termino: clave, ids:[...valor]})
        }
        localStorage.setItem('indiceBusqueda',JSON.stringify(Array.from(indiceFinal.values())));
        return indice
    }

    function buscarCanciones(termino, filtro = {}) {
    const indiceBusqueda = JSON.parse(localStorage.getItem('indiceBusqueda'));
    const terminoFormalizado = termino.toString().toLowerCase();
    const ids = [];
    const busquedaFiltrada = indiceBusqueda.filter(busqueda => busqueda.termino === terminoFormalizado);
    busquedaFiltrada.forEach(busqueda => busqueda.ids.forEach(id => ids.push(id)));

    const catalogoMap = sistemaGestionMusical().crearCatalogo();
    const catalogo = Array.from(catalogoMap.values());

    const catalogoFiltrado = catalogo.filter(cancion => ids.includes(cancion.id));
    catalogoFiltrado.sort((a, b) => b.reproducciones - a.reproducciones);

    return catalogoFiltrado;
    }

    return{
        construirIndiceBusqueda,
        buscarCanciones
    }
}