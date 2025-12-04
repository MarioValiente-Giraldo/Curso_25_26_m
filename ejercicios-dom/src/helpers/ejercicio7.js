import { fetching } from "../utils/fetching";

export default async function createEjercicio7() {
    const container = document.createElement('div');
    container.classList.add('blog-container');
    const posts = await fetching('publicaciones');
    posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.classList.add('post')

            const postTitle = document.createElement('h2');
            postTitle.textContent = post.titulo;
            postTitle.classList.add('post-title');
            postCard.appendChild(postTitle);

            const postInfo = document.createElement('p');
            postInfo.textContent = `Por ${post.autor} | ${post.fecha}`;
            postInfo.classList.add('post-meta');
            postCard.appendChild(postInfo);

            const postContent = document.createElement('p');
            postContent.textContent = post.contenido;
            postContent.classList.add('post-content');
            postCard.appendChild(postContent);

            const postTags = document.createElement('div');
            postTags.classList.add('tags-container');
            post.etiquetas.forEach(tag => {
                const tagItem = document.createElement('p');
                tagItem.textContent = `#${tag}`;
                tagItem.classList.add('tag');
                postTags.appendChild(tagItem);
            });
            postCard.appendChild(postTags);

            const postLikes = document.createElement('p');
            postLikes.classList.add('likes-count');
            postLikes.textContent = `❤️ ${post.likes}`;
            postCard.appendChild(postLikes);

            container.appendChild(postCard);
    });
    return container;



}
