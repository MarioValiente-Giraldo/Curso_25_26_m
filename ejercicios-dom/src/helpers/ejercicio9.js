import { fetching } from "../utils/fetching";

export default async function createEjercicio9() {
    const events = await fetching('eventos');
    const container = document.createElement('div');
    container.classList.add('timeline-container');
    const title = document.createElement('h1');
    title.textContent = '📆Timeline de Eventos📆';
    container.appendChild(title);

    const timelineLine = document.createElement('div');
    timelineLine.classList.add('timeline-line');
    events.forEach((event)=>{
        const eventCard = document.createElement('div');
        eventCard.classList.add('timeline-item');
        event.ponentes.length % 2 === 0 ? eventCard.classList.add('left'): eventCard.classList.add('right');

        const eventContent = document.createElement('div');
        eventContent.classList.add('event-content');

        const eventTitle = document.createElement('h3');
        eventTitle.textContent = event.nombre;
        eventTitle.classList.add('event-title');
        eventContent.appendChild(eventTitle);

        const eventDatetime = document.createElement('p');
        eventDatetime.textContent = `${event.fecha} - ${event.hora}`;
        eventDatetime.classList.add('event-datetime');
        eventContent.appendChild(eventDatetime);

        const eventLocaltion = document.createElement('p');
        eventLocaltion.textContent = event.ubicacion;
        eventLocaltion.classList.add('event-location');
        eventContent.appendChild(eventLocaltion);

        const eventPonentes = document.createElement('p');
        eventPonentes.textContent = event.ponentes.join(', ');
        eventPonentes.classList.add('speakers-list');
        eventContent.appendChild(eventPonentes);

        const eventMeta = document.createElement('p');
        eventMeta.classList.add('event-meta');
        eventMeta.textContent = `€${event.precio.toFixed(2)} | ${event.asistentes} asistentes`;
        eventContent.appendChild(eventMeta);

        eventCard.appendChild(eventContent);
        timelineLine.appendChild(eventCard);
        container.appendChild(eventCard);
    });
    return container;

}
