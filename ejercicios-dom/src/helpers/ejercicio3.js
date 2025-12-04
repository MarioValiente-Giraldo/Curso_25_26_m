import { fetching } from "../utils/fetching";

export async function createEjercicio3Fetch() {
    try{
        const container = document.createElement("div");
        container.classList.add("movies-container");
        const dataMovies = await fetching('peliculas');

        dataMovies.forEach(movie=>{
            const card = document.createElement("div");
            card.classList.add("movie-card");

            const movieTitle = document.createElement("h3");
            movieTitle.textContent = movie.titulo;
            movieTitle.classList.add('movie-title');
            card.appendChild(movieTitle);

            const movieImage = document.createElement("img");
            movieImage.src = movie.imagen;
            movieImage.alt = movie.titulo;
            movieImage.classList.add("movie-image");
            card.appendChild(movieImage);

            const movieYear = document.createElement("p");
            movieYear.textContent = movie.año;
            movieYear.classList.add("movie-year");
            card.appendChild(movieYear);

            const movieRating = document.createElement("div");
            movieRating.classList.add("movie-rating");

            const numStars = Math.floor(movie.rating)/2;
            const starts = "⭐".repeat(numStars);
            movieRating.textContent=`${starts}${movie.rating}/10`;
            card.appendChild(movieRating);

            container.appendChild(card);
        });

        return container;

    }catch(error){
        console.error(error);

    }
//   return (
//     <div>ejercicio3</div>
//   )
}
