import { fetching } from "../utils/fetching";



export async function createEjercicio4Fetch() {
    try{
    //Creamos el contenedor
    const container = document.createElement('div');
    //Obtenemos los datos
    const alojamientos =await fetching('alojamientos');

    //Crear encabezado
    const titulo = document.createElement("h1");
    titulo.textContent = "🏠Alojamientos🏠";
    container.appendChild(titulo);

    //Crear la tabla
    //1.- Crear el contenedor 
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    //2.- Crear el elemento tabla
    const table = document.createElement('table');

    //3.- Crear thead (cabecera) con headers (th)
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headers = ['Nombre', 'Ubicación', 'Precio', 'Rating'];
    headers.forEach(headerText =>{
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    

    //4.- Crear el body de la tabla
    const bodyTable = document.createElement('tbody');

    //5.- Iterar sobre la entrada de datos
    alojamientos.forEach(alojamiento=>{
        //Crear fila
        const fila = document.createElement('tr');

        //Crear los td`s (datos) de la fila
        //td para nombre
        const tdNombre = document.createElement('td');
        tdNombre.textContent = alojamiento.nombre;
        fila.appendChild(tdNombre);
        //td para unicación
        const tdUbicacion = document.createElement('td');
        tdUbicacion.textContent = alojamiento.ubicacion;
        fila.appendChild(tdUbicacion);
        //td para precio
        const tdPrecio = document.createElement('td');
        tdPrecio.classList.add('price');
        tdPrecio.textContent=alojamiento.precio;
        fila.appendChild(tdPrecio);
        //td para rating 
        const tdRating = document.createElement('td');
        tdRating.classList.add('rating');
        const numEstrellas = Math.floor(alojamiento.rating);
        tdRating.textContent = '⭐'.repeat(numEstrellas) + ` ${alojamiento.rating}/5`;
        fila.appendChild(tdRating);
        //Agregar la fila al cuerpo de la tabla 
        bodyTable.appendChild(fila);
        
    });
    //6.- Agregar el tbody a la tabla 
    table.appendChild(bodyTable);

    //7.-Agregar la tabla al contenedor de la tabla
    tableContainer.appendChild(table);

    //8.-Agregar el contenedor de la tabla al contenedor
    container.appendChild(tableContainer);

    //9.- Retornar nuestro contenedor
    return container;

    }catch(error){
        console.error(error);
    }
}
