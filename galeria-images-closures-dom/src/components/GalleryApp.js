import { imagesData } from "../data/images";
import { creareImageGrid } from "./ImageCard";
import createImageModal from "./ImageModal";

export default function createGalleryApp() {
    //Contenedor principal 
    const container = document.createElement("div");
    container.className = "min-h-screen bg-linear-to-br from-purple-100 via-white to-pink-900"; 
    

    //Header
    const header = document.createElement("header");
    header.className = "bg-white shadow-lg sticky top-0 z-40";


    const headerContent = document.createElement("div");
    headerContent.className = "max-w-7xl mx-auto py-6 px-6";

    const headerTitle = document.createElement("h1");
    headerTitle.className = "text-3xl font-bold text-purple-800 mb-2";
    headerTitle.textContent = "🌈 Galería de Imágenes 🌈";

    const headerSubtitle = document.createElement("p");
    headerSubtitle.className = "text-gray-600";
    headerSubtitle.textContent= "🤠 Aprende closure, funciones fábrica y manipulación del DOM 🤠";
    
    headerContent.appendChild(headerTitle);
    headerContent.appendChild(headerSubtitle);
    header.appendChild(headerContent);
    container.appendChild(header);


    //Main
    const main = document.createElement("main");
    main.className = "max-w-7xl mx-auto py-6 px-6";

        //Componenentes de favoritos 
        const counterComponent = document.createElement("h2");
        counterComponent.textContent = "Favoritos: 0";

        //Modal de imagen 
        const imageModal = document.createElement("h2");
        imageModal.textContent = "Imagen";

        // Función para abrir el modal
        const handleImageClick = (imageId) => {
            const modal = createImageModal(imageId);
            if (modal) {
                container.appendChild(modal.element);
            }
        };

        //Grid de imágenes 
        const gridComponent = document.createElement("h2");
        const imageComponent = creareImageGrid(imagesData, handleImageClick);
        main.appendChild(imageComponent.element);
    

        //Añadimos todo al main
        main.appendChild(counterComponent);
        main.appendChild(imageModal);
        main.appendChild(gridComponent);
        container.appendChild(main);

    //Footer
    const footer = document.createElement("footer");
    footer.className = "bg-white shadow-lg sticky bottom-0 z-40";

    const footerContent = document.createElement("div");
    footerContent.className = "max-w-7xl mx-auto py-6 px-6";

    const footerTitle = document.createElement("h3");
    footerTitle.className = "text-gray-600";
    footerTitle.textContent = "Mario Valiente Giraldo --- mariovaliente0@gmail.com"

    const footerLink = document.createElement("a");
    footerLink.className = "text-blue-500 hover:underline";
    const rutaImagen = "./src/utils/img/GitHub-Logo.png";
    footerLink.innerHTML = `<img src="${rutaImagen}" alt="Logo de GitHub" style="width:100px;">`;
    footerLink.href ="https://github.com/MarioValiente-Giraldo";

    footerContent.appendChild(footerTitle);
    footerContent.appendChild(footerLink);
    footer.appendChild(footerContent);
    container.appendChild(footer);

    return {
        element : container,
    }   
}
