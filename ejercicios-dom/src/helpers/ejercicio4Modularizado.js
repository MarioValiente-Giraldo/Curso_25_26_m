import { fetching } from "../utils/fetching";

export async function createEjercicio4Modularizado(){
    
    const dataSinFetch = () => alojamientos; 
    const dataConFetch = await fetching('alojamientos');

    const renderTable = (housingArray) => {
        const tableContainer = document.createElement('div');
        
        tableContainer.classList.add('table-container'); 

        const table = document.createElement('table');

        // Crear thead
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Nombre', 'Ubicación', 'Precio', 'Rating'];

        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Crear tbody
        const bodyTable = document.createElement('tbody');

        housingArray.forEach(house => {
            const fila = document.createElement('tr');

            const tdNombre = document.createElement('td');
            tdNombre.textContent = house.nombre;

            const tdUbicacion = document.createElement('td');
            tdUbicacion.textContent = house.ubicacion;

            const tdPrecio = document.createElement('td');
            tdPrecio.textContent = `${house.precio.toFixed(2)}€ `; 
            tdPrecio.classList.add('price'); 

            const tdRating = document.createElement('td');
            tdRating.textContent = '⭐'.repeat(Math.floor(house.rating)) + ` ${house.rating}/5`;
            tdRating.classList.add('rating'); 

            fila.appendChild(tdNombre);
            fila.appendChild(tdUbicacion);
            fila.appendChild(tdPrecio);
            fila.appendChild(tdRating);

            bodyTable.appendChild(fila);
        });

        table.appendChild(bodyTable);
        tableContainer.appendChild(table);

        return tableContainer;
    }

    // Render principal
    const render = (tipoFuente) => {
        const container = document.createElement('div');
        const titulo = document.createElement('h1');
        titulo.textContent = '🏠Alojamientos🏠';
        container.appendChild(titulo);
        container.classList.add('table-container');
        let data;
        if(tipoFuente === 'fetch'){
            data = dataConFetch;
        }else {
            data = dataSinFetch();
        }

        const table = renderTable(data);
        container.appendChild(table);
        return container;
    }

    return { render };
}