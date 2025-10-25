//-------------MAP------------------------ 
const edades = new Map<string, number>();
edades.set("Mario",22);
// Para saber si existe la clave 
edades.has("Mario")



interface Datos{
    nombre: string;
    email: string;
    cp:number;
}

//Para crear map con clave string y el valor sea tipo interface 

const usuarios2= new Map<string,Datos>();
usuarios2.set("Mario",{
    nombre:"Mario",
    email:"mariovaliente0@gmail.com",
    cp:18007
    }
)


//---------SET------------

const mySet = new Set<number>();
mySet.add(19);


/* Ejercicio 2: Crear un sistema de reservas de un restaurante que tenga:
- Un map con clave Hora de la reserva, el formato es YYYY-MM-dd
y el valor es un SET con el nombre:DNI de los clientes que han reservado ese dia 

Funciones: agregarReserva(),cancelarReserva(),mostrarReserva() 
- estadisticaReservas(): reservas totales, media de reservas, reservas por dia..

*/
const reservas: Map<string, Set<string>> = new Map();

function agregarReserva(fecha: Date, nombre: string): boolean {
    const fecha2 = fecha.toISOString().split('T')[0]; // usar solo la fecha YYYY-MM-DD
    if (!reservas.has(fecha2)) reservas.set(fecha2, new Set());
    reservas.get(fecha2)!.add(nombre);
    return true;
}

function cancelarReserva(fecha: Date, nombre: string): void {
    const fecha2 = fecha.toISOString().split('T')[0];
    if (reservas.has(fecha2)) reservas.get(fecha2)!.delete(nombre);
}

function mostrarReserva(fecha: Date, nombre: string): void {
    const fecha2 = fecha.toISOString().split('T')[0];
    if (!reservas.get(fecha2)?.has(nombre)) throw new Error("No existe esa reserva");
    console.log(`Reserva de: ${nombre} el ${fecha2} está confirmada`);
}

function estadisticaReservas(): void {
    let totales = 0;
    for (const [fecha, nombres] of reservas) {
        console.log(`Reservas del ${fecha} -> ${nombres.size}`);
        totales += nombres.size;
    }
    const media = reservas.size > 0 ? totales / reservas.size : 0;
    console.log(`Reservas totales: ${totales}`);
    console.log(`Media de reservas por día: ${media}`);
}