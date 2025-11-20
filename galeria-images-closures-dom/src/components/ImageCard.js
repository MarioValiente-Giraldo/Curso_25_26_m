import { imagesData } from "../data/images";

export function createImageCard(image, onImageClick, onFavoriteToggle) {
    //Contenedor principal
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer group relative";
    card.dataset.imageId = image.id;
    
    //Imagen
    const img = document.createElement("img");
    img.className = "w-full h-64 object-cover group-hover:opacity-90 transition-opacity";
    img.src = image.url;
    img.alt = image.title;
    // img.onerror = () => img.src = "ruta/a/imagen-generica.jpg";
    card.appendChild(img);
    
    //Corazón de favoritos 
    const favoriteButton = document.createElement("button");
    favoriteButton.className ="absolute top-3 right-3 text-3xl transition duration-300";  
    favoriteButton.innerHTML= "🤍";
    card.appendChild(favoriteButton);

    //Creamos una variable para comprobar si es favoritos
    let isFavorite = false;

    favoriteButton.onclick = (e)=>{
        //IMPORTANTE: ‼️SI NO PONEMOS stopPropagation() siempre que le demos al corazón se abrir la imagen modal‼️
        e.stopPropagation();
        isFavorite = !isFavorite;
        favoriteButton.innerHTML = isFavorite ? "❤️" : "🤍";
        if (onFavoriteToggle) {
            onFavoriteToggle(image.id, isFavorite);
        }
    } 
    
    
    //Información de la imagen
    const infoContainer = document.createElement("div");
    infoContainer.className = "p-4 bg-white";
    
    const title = document.createElement("h3");
    title.className = "text-lg font-bold text-gray-800 mb-2";
    title.textContent = image.title;
    infoContainer.appendChild(title);

    const author = document.createElement("p");
    author.className = "font-semibold text-sm text-gray-600";
    author.textContent = `Por ${image.author}`;
    infoContainer.appendChild(author);
    card.appendChild(infoContainer);

    card.onclick = () => {
        if (onImageClick) {
            onImageClick(image.id);
        }
    };

    //Retornar el componente
    return {
        element: card,
        //Aquí van las funciones que necesite, por ejemplo, isFavorite y setFavorite
    };
}

export function creareImageGrid(images, onImageClick, onFavoriteToggle) {
    //Creamos un map privado que guarde las tarjetas
    const cardsMap = new Map();
    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6";

    //Crear cada tarjeta con createImageCard
    images.forEach(image => {
        const card = createImageCard(image, onImageClick, onFavoriteToggle);
        grid.appendChild(card.element);
        cardsMap.set(image.id, card);
    });

    return {
        element: grid,
        //Aquí irían las funciones que necesiten
    };
}