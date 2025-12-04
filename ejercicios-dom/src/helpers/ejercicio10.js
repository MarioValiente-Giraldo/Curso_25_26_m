import { fetching } from "../utils/fetching";

export default async function createEjercicio10() {
    const dataprojects = await fetching('proyectos');
    // Obtener todas las tecnologías únicas
    const allTech = [...new Set(dataprojects.flatMap(project => project.tecnologias))];

    function filterProjects(tech){
        let filteredProjects = [];
        const buttons = document.querySelectorAll('.filter-btn'); 
        
        buttons.forEach(button=>{
            if(button.textContent === tech){
                button.classList.add('active');
            }else{
                button.classList.remove('active');
            }
        });
        
        if(tech === 'Todos'){
            filteredProjects = dataprojects;
        }else{
            filteredProjects = dataprojects.filter(project => project.tecnologias.includes(tech));
        } 
        
        renderProjects(filteredProjects);
    }

    const container = document.createElement('div');
    container.classList.add('portfolio-container');

    const title = document.createElement('h1');
    title.textContent = 'Portfolio de proyectos';
    container.appendChild(title);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('filter-buttons');

    const buttonAll = document.createElement('button');
    buttonAll.textContent = 'Todos';
    buttonAll.className = 'filter-btn active'; 
    buttonAll.addEventListener('click',(e)=>{
        e.preventDefault();
        filterProjects('Todos');
    });
    buttonContainer.appendChild(buttonAll);


    allTech.forEach(tech=>{
        const buttonTech = document.createElement('button');
        buttonTech.textContent = tech;
        buttonTech.className = 'filter-btn';
        buttonContainer.appendChild(buttonTech);
        buttonTech.addEventListener('click',(e)=>{
            e.preventDefault();
            filterProjects(tech);
        });
    });

    const projectsGrid = document.createElement('div');
    projectsGrid.classList.add('projects-grid');

    function renderProjects(projects){
        projectsGrid.innerHTML = '';
        projects.forEach(project=>{
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            if(project.destacado){
                const span = document.createElement('span');
                span.classList.add('featured-badge');
                span.textContent = '⭐';
                projectCard.appendChild(span);
            }
            const projectContent = document.createElement('div');
            projectContent.classList.add('project-card-content');

            const img = document.createElement('img');
            img.src = project.imagen;
            img.alt = project.titulo;
            projectContent.appendChild(img);

            const title = document.createElement('h3');
            title.textContent = project.titulo;
            title.classList.add('project-title'); 
            projectContent.appendChild(title);

            const description = document.createElement('p');
            description.textContent = project.descripcion;
            description.classList.add('project-description'); 
            projectContent.appendChild(description);

            const technologiesContainer = document.createElement('div');
            technologiesContainer.classList.add('tech-stack');
            project.tecnologias.forEach(tech=>{
                const techItem = document.createElement('span');
                techItem.textContent = tech;
                techItem.classList.add('tech-badge');
                technologiesContainer.appendChild(techItem);
            });
            projectContent.appendChild(technologiesContainer);
            projectCard.appendChild(projectContent);
            projectsGrid.appendChild(projectCard);
        });
    }
    
    renderProjects(dataprojects);

    container.appendChild(buttonContainer);
    container.appendChild(projectsGrid);
    return container
}