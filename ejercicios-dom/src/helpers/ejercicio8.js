    import { fetching } from "../utils/fetching";

    export default async function createEjercicio8() {
        const menuData = await fetching('menuRestaurante');
        const container = document.createElement('div');
        container.classList.add('menu-container');

        const restaurantTitle = document.createElement('h1');
        restaurantTitle.classList.add('restaurant-title');
        restaurantTitle.textContent = '🍽️ Menú del Restaurante';
        container.appendChild(restaurantTitle);

        menuData.categorias.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.classList.add('menu-category');
            
            const categoryTitle = document.createElement('h2');
            categoryTitle.classList.add('category-title');
            categoryTitle.textContent = category.nombre;
            categoryCard.appendChild(categoryTitle);

            const categoryDivider = document.createElement('div');
            categoryDivider.classList.add('category-divider');
            categoryCard.appendChild(categoryDivider);

            const dishesContainer = document.createElement('div');
            dishesContainer.classList.add('dishes-container');
            
            category.platos.forEach(dish => {
                const dishCard = document.createElement('div');
                dishCard.classList.add('dish-item');
                
                const dishHeader = document.createElement('div');
                dishHeader.classList.add('dish-header');

                const dishName = document.createElement('p');
                dishName.textContent = dish.nombre;
                dishName.classList.add('dish-name');
                dishHeader.appendChild(dishName);
                
                const dishPrice = document.createElement('p');
                dishPrice.textContent = `€${dish.precio.toFixed(2)}`;
                dishPrice.classList.add('dish-price');
                dishHeader.appendChild(dishPrice);
                
                dishCard.appendChild(dishHeader);

                const dishDescription = document.createElement('p');
                dishDescription.textContent = dish.descripcion;
                dishDescription.classList.add('dish-description');
                dishCard.appendChild(dishDescription);

                dishesContainer.appendChild(dishCard);
            });
            
            categoryCard.appendChild(dishesContainer);
            container.appendChild(categoryCard);
        });
        
        return container;
    }