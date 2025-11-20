// Ejercicio 17: Sistema de Tablas de Datos
// Objetivo: Practicar la creación de tablas de datos y funciones de ordenación.
// Datos necesarios: Array  usuarios  del archivo  src/db/data.js
// Enunciado: Implementa un módulo llamado  tablaDatos  que:
// 1. Implemente las siguientes funciones:
// crearTabla(datos, columnas) : Crea una estructura de tabla a partir de datos
// ordenarTabla(datos, columna, direccion) : Ordena los datos según una columna
// paginarTabla(datos, pagina, elementosPorPagina) : Implementa paginación
// filtrarTabla(datos, terminoBusqueda) : Filtra datos por un término
// exportarTabla(datos, formato) : Exporta los datos en diferentes formatos
// 2. La tabla debe ser procesable con:
// Ordenación por diferentes columnas
// Controles de paginación
// Búsqueda de texto
// Resaltado de datos específicos
// 3. Demuestra su funcionamiento con los datos de usuarios
// Muestra los resultados por consola.
import { usuarios } from "../data.js";

export function tablaDatos(){
    function crearTabla(datos,columnas){
        const columnasFinales = columnas ||Object.keys(datos[0]);
        const filas = datos.map(item=>{
            const fila = {};
            columnasFinales.forEach(col => {
            fila[col] = item[col];
            });
            return fila;
        
        });
        return {
            filas,
        }
    }


    function ordenarTabla(datos,columna,direccion){
        const datosOrdenados=datos.sort((a,b)=>{
            const valorA = a[columna];
            const valorB = b[columna];
            const comparacion = valorA>valorB? 1: valorB>valorA? -1:0;

            return direccion === 'asc'? comparacion : -comparacion;

        });
        return datosOrdenados;
    }

    function paginarTabla(datos,pagina,elementosPorPagina){
        const inicio = (pagina-1)*elementosPorPagina;
        const fin = pagina*elementosPorPagina;

        if(inicio>=datos.length){
            return [];
        }
        return datos.slice(inicio,fin);
    }

    function filtrarTabla(datos,terminoBusqueda){
        return datos.filter(item=>{
            return Object.entries(item).some(valor =>valor.includes(terminoBusqueda));
        }
        )
    }

    function exportarTabla(datos,formato){
        switch (formato) {
            case 'json':
                return JSON.stringify(datos);
            default:
            console.log("Fomato no válido")
        }
    }

    return {
        crearTabla,
        ordenarTabla,
        paginarTabla,
        filtrarTabla,
        exportarTabla
    }
}

 console.log('🚀 === EJERCICIO 17: SISTEMA DE TABLAS ===\n');

 const tabla = tablaDatos();

// 1. CREAR TABLA
    console.log('1️⃣ CREAR TABLA');
    const miTabla = tabla.crearTabla(usuarios, ['nombre', 'email', 'edad']);

    console.table(miTabla.filas);
    console.log('\n');

    // 2. ORDENAR
    console.log('2️⃣ ORDENAR por edad (descendente)');
    const ordenados = tabla.ordenarTabla(usuarios, 'edad', 'desc');
    console.table(ordenados);
    console.log('\n');

    // 3. FILTRAR
    console.log('3️⃣ FILTRAR "ana"');
    const filtrados = tabla.filtrarTabla(usuarios, 'Ana');
    console.table(filtrados);
    console.log('\n');

    // 4. PAGINAR
    console.log('4️⃣ PAGINAR (página 1, 3 elementos)');
    const paginados = tabla.paginarTabla(usuarios, 1, 3);
    console.table(paginados);
    console.log('\n');

  

