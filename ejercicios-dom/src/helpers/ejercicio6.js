import { fetching } from "../utils/fetching";

export default async function createEjercicio6() {
    const container = document.createElement('div');
    container.classList.add('container');


    const users = await fetching('usuariosConHabilidades'); 
    
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');


    users.forEach(user => {
        //Creamos contenedor para los usuarios
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        //Creamos los nombres
        const userName = document.createElement('h3');
        userName.textContent = user.nombre;
        userCard.appendChild(userName);

        //Definimos la información 
        const userInfo = document.createElement('p');
        userInfo.textContent = `${user.edad} años | ${user.email}`;
        userInfo.classList.add('user-info');
        userCard.appendChild(userInfo);

        //Creamos contenedor para las habilidades
        const userSkillContainer = document.createElement('div');
        userSkillContainer.classList.add('skills-container');
    
        
        //Creamos lista para las habilidades
        const userSkills = document.createElement('ul');
        user.habilidades.forEach(skill=>{
            const skillItem = document.createElement('li');
            skillItem.textContent = skill;
            skillItem.classList.add('skill-tag');
            userSkills.appendChild(skillItem);
            
        });
        userCard.appendChild(userSkills);
        //Definimos el nivel del usuario
        const userLevel = document.createElement('p');
        userLevel.textContent = user.nivel;
        userLevel.className = `level-badge ${user.nivel === 'Senior' ? 'senior' : 'junior'}`;
        userCard.appendChild(userLevel);        
        userContainer.appendChild(userCard);
    });
    container.appendChild(userContainer);
    return container;
}
