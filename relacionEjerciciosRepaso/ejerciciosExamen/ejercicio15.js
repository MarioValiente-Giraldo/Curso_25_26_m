// Ejercicio 15: Sistema de Favoritos
// Objetivo: Practicar el uso de LocalStorage para gestionar elementos favoritos.
// Datos necesarios: Arrays  usuarios  y  productos  del archivo  src/db/data.js
// Enunciado: Implementa un módulo llamado  sistemaFavoritos  que:
// 1. Implemente un sistema de favoritos para usuarios y productos utilizando LocalStorage
// 2. Debe incluir las siguientes funciones:
// agregarFavorito(tipo, id) : Añade un elemento a favoritos (tipo: 'usuario' o 'producto')
// eliminarFavorito(tipo, id) : Elimina un elemento de favoritos
// esFavorito(tipo, id) : Comprueba si un elemento está en favoritos
// obtenerFavoritos(tipo) : Devuelve todos los favoritos de un tipo
// obtenerFavoritosConDetalles(tipo) : Devuelve los favoritos con todos sus detalles
// 3. Utiliza los arrays  usuarios  y  productos  para obtener los detalles
// 4. Cada favorito debe guardar: tipo, id y fecha de adición
// Crea funciones adicionales para:
// Filtrar favoritos por fecha de adición
// Buscar dentro de los favoritos
// Crear colecciones personalizadas de favoritos
// Muestra los resultados por consola
import { usuarios, productos } from "../data.js";

export function sistemaFavoritos() {

    function agregarFavorito(tipo, id) {
        const clave = tipo === 'usuario' ? 'favoritoUsuarios' : 'favoritoProductos';
        const lista = tipo === 'usuario' ? usuarios : productos;

        let favoritos = JSON.parse(localStorage.getItem(clave)) || [];
        const elemento = lista.find(e => e.id === id);
        if (!elemento) return;

        const existe = favoritos.some(f => f.id === id);
        if (!existe) {
            const nuevoFavorito = {
                tipo: tipo,
                id: id,
                fecha: new Date().toISOString()
            };
            favoritos.push(nuevoFavorito);
            localStorage.setItem(clave, JSON.stringify(favoritos));
        }
    }

    function borrarFavorito(tipo, id) {
        const clave = tipo === 'usuario' ? 'favoritoUsuarios' : 'favoritoProductos';
        let favoritos = JSON.parse(localStorage.getItem(clave)) || [];
        favoritos = favoritos.filter(f => f.id !== id);
        localStorage.setItem(clave, JSON.stringify(favoritos));
    }

    function esFavorito(tipo, id) {
        const clave = tipo === 'usuario' ? 'favoritoUsuarios' : 'favoritoProductos';
        const favoritos = JSON.parse(localStorage.getItem(clave)) || [];
        return favoritos.some(f => f.id === id);
    }

    function obtenerFavoritos(tipo) {
        const clave = tipo === 'usuario' ? 'favoritoUsuarios' : 'favoritoProductos';
        return JSON.parse(localStorage.getItem(clave)) || [];
    }

    function filtrarPorFecha(tipo, fecha) {
        const favoritos = obtenerFavoritos(tipo);
        return favoritos.filter(f => f.fecha === fecha);

    }

    return {
        agregarFavorito,
        borrarFavorito,
        esFavorito,
        obtenerFavoritos,
        filtrarPorFecha
    };
}


