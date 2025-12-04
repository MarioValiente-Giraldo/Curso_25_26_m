import { fetching } from "../utils/fetching";

export default async  function createEjercicio5() {
    //Obtenemos la data
    const ubications = await fetching('ubicaciones');
    //Contenedor del programa 
    const container = document.createElement('div');
    container.classList.add('container');

    //Cabecera de la página
    const title = document.createElement('h1');
    title.textContent='🏘️🏖️Váyase de vacaciones🏖️🏘️'
    //Contenedor de los mensajes (vacio al principio)
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');

    /*
    ---------FORMULARIO---------
    */
    
    //Crear grupo del formulario
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-group');

    //Crear el formulario
    const form = document.createElement('form');


    //Crear select de ubicación
    const selectionGroup = document.createElement('div');
    
    const locationLabel = document.createElement('label');
    locationLabel.htmlFor = 'ubication';
    locationLabel.textContent = 'Ubicación:';
    
    const locationSelect = document.createElement('select');
    locationSelect.id = 'ubication';
    locationSelect.name = 'Ubicación';

    //Crear opciones por ubicación
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Seleccione una ubicación';
    locationSelect.appendChild(defaultOption);

    ubications.forEach(ubication=>{
        const option = document.createElement('option');
        option.value = ubication.id;
        option.textContent = ubication.nombre;
        locationSelect.appendChild(option);
    });

    //Anexar los distintos elementos a los formularios
    selectionGroup.appendChild(locationLabel);
    selectionGroup.appendChild(locationSelect);
    form.appendChild(selectionGroup);
    formContainer.appendChild(form);
    container.appendChild(formContainer);


    //Crear la fila para las fechas
    const dateRow = document.createElement('div');
    dateRow.classList.add('form-row');
    
    //Chenk-in
    const checkInGroup = document.createElement('div');
    const checkInLabel = document.createElement('label');
    checkInLabel.htmlFor = 'check-in';
    checkInLabel.textContent = 'Check-in:';
    const checkInInput = document.createElement('input');
    checkInInput.type = 'date';
    checkInInput.id = 'check-in';
    checkInInput.name = 'Check-in';
    checkInGroup.appendChild(checkInLabel);
    checkInGroup.appendChild(checkInInput);

    //Check-out
    const checkOutGroup = document.createElement('div');
    const checkOutLabel = document.createElement('label');
    checkOutLabel.htmlFor = 'check-out';
    checkOutLabel.textContent = 'Check-out:';
    const checkOutInput = document.createElement('input');
    checkOutInput.type = 'date';
    checkOutInput.id = 'check-out';
    checkOutInput.name = 'Check-out';
    checkOutGroup.appendChild(checkOutLabel);
    checkOutGroup.appendChild(checkOutInput);

    dateRow.appendChild(checkInGroup);
    dateRow.appendChild(checkOutGroup);
    form.appendChild(dateRow);


    //Boton submit
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = '🔍 Buscar alojamiento';    
    form.appendChild(submit);

    /*
    ---------EVENTOS---------
    */
    //Agregar el evento del botón del formulario
    form.addEventListener('submit', async (e)=>{
        e.preventDefault();
        //Limpiar los mensajes anteriores
        messageContainer.textContent='';

        //Obtener los valores del formulario
        const ubication = locationSelect.value;
        const checkIn = checkInInput.value;
        const checkOut = checkOutInput.value;

        //Validar que todos los campos esten completos
        if(!ubication || !checkIn || !checkOut){
            messageContainer.textContent = '❌ Por favor, completa todos los campos';
            return;
        }

        //Validar que las fechas sean compatibles
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const dateNow = new Date();
        dateNow.setHours(0, 0, 0, 0); // ← IMPORTANTE: resetear hora

        // Validar fechas no anteriores a hoy
        if (checkInDate < dateNow || checkOutDate < dateNow){
        messageContainer.textContent = '❌ Las fechas no pueden ser anteriores a la fecha actual';
        messageContainer.classList.add('error');
        return;
        }
        if(checkInDate >= checkOutDate){
            messageContainer.textContent = '❌ La fecha de check-out debe ser posterior a la de check-in';
            messageContainer.classList.add('error');
            return;
        }
        

        const ubicacionSeleccionada = ubications.find(u => u.id == ubication);
        messageContainer.textContent =`✅ ¡Búsqueda realizada! Usted se va a ${ubicacionSeleccionada.nombre} del ${checkIn} al ${checkOut}`;
        messageContainer.classList.add('success');

    })
    container.appendChild(title);
    container.appendChild(messageContainer);
    container.appendChild(form);
    return container;

}
