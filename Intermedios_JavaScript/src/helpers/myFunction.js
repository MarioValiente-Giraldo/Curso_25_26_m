/**
 * 
 * @param {Object} products -- Objeto Data 
 * @returns {Object} -- Objeto con información extraida
 */
export const newData = (products) => {
    const 
    {   nombre,
        fabricante:{
            nombre:nombreFabricante,
            contacto
        },
        especificaciones:{ ram }
    } = products;

    return{
        nombre,
        nombreFabricante,
        contacto,
        ram
    }
 };

