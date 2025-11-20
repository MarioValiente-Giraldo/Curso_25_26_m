// Ejercicio 18: Gestor de Validación de Datos
// Objetivo: Practicar la creación de funciones de validación de datos.
// Datos necesarios: Arrays  usuarios  y  productos  del archivo  src/db/data.js
// Enunciado: Implementa un módulo llamado  validadorDatos  que:
// 1. Implemente las siguientes funciones:
// validarCampo(tipo, valor) : Valida diferentes tipos de datos
// validarUsuario(usuario) : Valida un objeto de usuario completo
// validarProducto(producto) : Valida un objeto de producto completo
// mostrarErrores(errores) : Formatea los errores de validación
// corregirDatos(datos, tipo) : Intenta corregir datos comunes
// 2. Crea validaciones para:
// Email (formato válido)
// Edad (rango específico)
// Precio (número positivo)
// Campos requeridos
// 3. Demuestra su funcionamiento validando diferentes datos
// Muestra los resultados por consola

import { usuarios, productos } from "../data.js";

export function validadorDatos(){
    function validarCampo(tipo, valor) {
        const trimearTipos = tipo.toLowerCase().trim();
        switch (trimearTipos) {
            case 'string':
            return typeof valor === 'string';
            case 'number':
            return typeof valor === 'number';
            case 'boolean':
            return typeof valor === 'boolean';
            default:
            return false;
        }
    }
    function validarUsuario(usuario) {
        const clavesBase = Object.keys(usuarios[0]);
        const clavesUsuario = Object.keys(usuario);
        return clavesBase.every(clave => clavesUsuario.includes(clave)) && clavesUsuario.every(clave => clavesBase.includes(clave));      
    }
    function validarProducto(producto) {
        const clavesBase = Object.keys(productos[0]);
        const clavesProducto = Object.keys(producto);
        return clavesBase.every(clave => clavesProducto.includes(clave)) && clavesProducto.every(clave => clavesBase.includes(clave));      
    
    }

    function validarEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validacion = emailRegex.test(email);
        validacion? "Formato correcto": "Formato incorrecto";
        return validacion;
    
    }
    
    function validarEdad(edad){
        const validacion =  edad >= 18 && edad <= 99;
        validacion? "Edad válida": "Edad inválida";
        return validacion;
        
    }
    
    function validarPrecio(precio){
        const validacion = precio > 0;
        validacion? "Precio válido": "Precio inválido";
        return validacion;    
    }

    function corregirDatos(datos, tipo) {
    const claves = Object.keys(datos);
    const valores = Object.values(datos);

    const nuevosValores = valores.map(valor => {
        if (tipo === 'string') {
            return typeof valor === 'string' ? valor : String(valor);
        } else if (tipo === 'number') {
            return typeof valor === 'number' ? valor : Number(valor);
        } else {
            return valor; 
        }
    });

    const nuevoObjeto = {};
    claves.forEach((clave, i) => {
        nuevoObjeto[clave] = nuevosValores[i];
    });

    return nuevoObjeto;
    }

    


}