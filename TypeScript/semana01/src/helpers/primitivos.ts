// primitivos en TyperScript

// 1.- String
let nombre: string = "Mario";
const apellidos: string = "Valiente Giraldo";
let nombreCompleto: string = `${nombre} ${apellidos}`;

function saludar(nombre: string):string {
    return `Hola ${nombre.trim().toUpperCase()}`;
}

saludar(nombreCompleto);
console.log(saludar(nombreCompleto));

let saludo = "asdasd"; // declaración con Interferencia de TIPOS

//2.- Number

function calcularPrecopFinal(precio:number, impuesto:number, descuento:number):number{
    console.log(precio*(1+(impuesto/100))*(1-(descuento/100)));
    return precio*(1+(impuesto/100))*(1-(descuento/100));
}
calcularPrecopFinal(60,21,3);


//Cualquier tipo (‼️‼️No usar salvo ocasiones muy excepcionales ‼️‼️)
//Función que verifique que lo que pase como parámetro es un número.
//No es infinito, isNaN
function validarNumero(numero:any):boolean{
    return !isNaN(numero) && typeof numero === "number" &&  isFinite(numero);
}

//Calcular el promedio total de los elementos de un array de números.

function calcularPromedio(numeros: number[]):number{
    if(numeros.length === 0) throw new Error ("No se puede dividir entre 0");
    const suma: number = numeros.reduce((acc,numero)=> acc +=numero,0);
    return suma/numeros.length;

}

function calcularExtremos(numeros: number[]):[min:number,max:number]{
    if(numeros.length === 0) throw new Error ("No se puede dividir entre 0");
    const min:number=Math.min(...numeros);
    const max:number=Math.max(...numeros);
    return [min,max];

}

//3.- Booleanos
//Comprobar si un email es correcto o no 

function esValidoEmail(email:string):boolean{
// El punto y el espacio son caracteres especiales, por lo que hay que escaparlos con \.  \s
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]\.[^\s@]+$/;
    return emailRegex.test(email);

}
esValidoEmail("aaa@aaaa.com");

//interface: Tipo de dato generado por el usuario para una determinada situación.
interface permisoUsuario{
    puedeLeer: boolean,
    puedeEscribir: boolean,
    puedeEliminar: boolean
}
//Crear una funcion llamada obtenerPermisos que dependiendo de si el usuario es admin, 
//invitado o usuario cambie los permisos de la interface.

type tipoUsuario = "invitado" | "admin" | "usuario";

function obtenerPermisos(usuario:tipoUsuario):permisoUsuario{
    switch(usuario){
        case "invitado":
            return {
                puedeLeer: false,
                puedeEscribir: false,
                puedeEliminar: false,
            }
        case "usuario":
            return {
                puedeLeer: true,
                puedeEscribir: true,
                puedeEliminar: false,
        }

        case "admin":
            return {
                puedeLeer: true,
                puedeEscribir: true,
                puedeEliminar: true,
            }
    }
}

obtenerPermisos("admin");


//NULL - UNDEFINED 
let posibleNombre :string | null = "Invitado";
let posibleNombreIndefinido :string | undefined = undefined;

//arrow function 

const duplicar = (numero: number):number => numero * 2;



//4.- Array

//Crear una función que le pase como parámetro un array de objetos y me devuelva los usuarios que son mayor de edad
const usuarios = [
    {nombre: "Ana", edad:11},
    {nombre: "Mario", edad:23},
    {nombre: "Pedro", edad:34},
    {nombre: "Carolina", edad:22},

];

const mayorEdad = (usuarios:Object[]):Object[] =>{
    return usuarios.filter((usuario:any) => usuario.edad >= 18);
}
mayorEdad(usuarios);


const misNumeros :number[] = [1,-2,33,4,554,6,79,8,9,10];
//Función procesarNumero(arrayNumeros) devuelva un array de números solo positivos, multiplicados por 2 y ordenados de menor a mayor.

function procesarNumeros(arrayNumeros:number[]):number[]{
    return arrayNumeros
    .filter((numero:number) => numero >= 0)
    .map((numero:number) => numero * 2)
    .sort((a:number,b:number) => b - a);
}

procesarNumeros(misNumeros);

interface Cliente {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
}

//Crear una función que genere un MAP con la siguiente estructura 
/*
{
    idUsuario:{
        nombre:string
        email:string
        telefono:string
    }

}
*/

const listaClientes: Cliente[] = [
    { id: 101, nombre: "Ana Pérez", email: "ana.perez@ejemplo.com", telefono: "555-1234" },
    { id: 102, nombre: "Juan Gómez", email: "juan.gomez@ejemplo.com", telefono: "555-5678" },
    { id: 305, nombre: "Marta Ruiz", email: "marta.ruiz@ejemplo.com", telefono: "555-9012" }
];

function mapearClientes(clientes:Cliente[]):Map<number,Cliente>{
    const mapa = new Map<number,Cliente>();
    clientes.forEach((cliente:Cliente)=>{
        mapa.set(cliente.id,cliente);
    });
    return mapa;
}

mapearClientes(listaClientes);


