const numeros = [1,2,3,4,5,6];

//Generar un objeto que tenga los siguientes campos:
/*
{
    valor: numero_correspondiente,
    posicion: posicion_dentro_del_array
    esUltimo: array_que_me_diga_si_es_el_último (true/false)
}
*/

const resumenNumeros = numeros.map((numero,indice,myArray)=>{
    return {
        valor : numero,
        posicion: indice,
        esUltimo: indice === myArray.length-1 ? true:false
    }
});

console.log(resumenNumeros); //Array de objetos mapeados a una estructura dada.

const products = [
    {
        name: "Laptop", price: 100, stock:5, active:true
    },
    {
        name: "Mouse Logitech", price: 28.56,stock:0, active:false
    }
    ]

/* Mapeado:

nombre
precioOriginal
precioConIva
hayStock

*/

const resumeProdcuts = products.map((prodcuto)=>{
    return {
        name: prodcuto.name,
        originalPrice: prodcuto.price,
        priceIVA: prodcuto.price * 1.21,
        stockAvailable: prodcuto.stock === 0 ? false:true,

    }

});


// Filtrame los productos que tienen stock y están activos
const productsFiltered = products.filter(product => product.stock > 0 && product.active);

// Mostrar toda la información de todos los laptops de forma case insensitive
const productsLaptops = products
    .filter(product => product.name.toLowerCase()
        .includes("laptop")
    );


console.log(productsLaptops);

// Una función que  como parámetro un array y un nombre, donde tiene que buscar el objeto en la array por su nombre.

function searchProducto (nameProduct,myArray){
    return myArray.filter(arrayProduct => arrayProduct.name.toLowerCase().includes(nameProduct.toLowerCase));
}

/*
 Crear una función que le pase como parámetro un array de producto, precio inicial,
 precio final y me devuelva los productos cuyo precio está en ese rango de valores
 */
/**
 * 
 * @param {Array[]} productsArray 
 * @param {number} initialPrice 
 * @param {number} finalPrice 
 * @returns {Array[]}
 */
 const filterPrice = (productsArray,initialPrice,finalPrice) => productsArray
    .filter((productArray) => productArray.price > initialPrice && productArray.price < finalPrice);     


const filterPriceWithErrorControl = (productsArray = [], initialPrice = 0, finalPrice = 0) => {
    // Validar que los precios sean números
    if(typeof initialPrice !== 'number' || typeof finalPrice !== 'number') {
        return [];
    }
    
    // Validar que los precios sean válidos
    if(initialPrice >= 0 && (finalPrice >= initialPrice && finalPrice >= 0)) {
         return productsArray
                   .filter((productArray) => productArray.price >= initialPrice && productArray.price <= finalPrice);
    } else {
        return [];
    }
}


//Modificar findProductos para que además me muestra solo las que están activos.


const carrito = [
    {
        name:"laptop",
        price:100,
        count:5,
        category: "Electronica"
    },
    {
        name:"Teclado Mecánico",
        price: 28.56,
        count:1,
        category: "Electronica",

    },
    {
        name: "Polo Scalper",
        price: 218.6,
        count: 10,
        category: "Ropa"
    },
    {
        name: "Pantalon Stradivarius",
        price: 150,
        count: 2,
        category: "Ropa"
    },
];


/**
 * @author: Mario Valiente Giraldo 
 * @param {Object[]} cart -- Carrito de objetos
 * @param {Number}vat -- Impuesto a aplicar
 * @return {Number} -- Total del carrito
 */
const totalShoppingCart = (cart = [],vat=1.21) => cart
    .reduce((acc,product)=> product.count >5 
            ? (acc + (product.price * vat))*0.95 
            : acc + (product.price * vat)
        ,0);


// Agrupar el carrito por categorias.

const productsCategory = (carrito = []) => {
    return carrito.reduce((groups, product) => {
        const categoryFilter = product.category;
        if(!groups[categoryFilter]){
            groups[categoryFilter] = [];
        }
        groups[categoryFilter].push(product);
        return groups;
    }, {});
};  

/*
    Electronica[
    {},
    {}
    ],
    Ropa[
    {},
    {}
    ],

*/

const votos = ["Ana","Carlos","Ana","Beatriz","Carlos","Ana"];
// Crear función que cuente los votos que tiene cada usuario

const countVotes = (votos =[]) =>{
    return votos.reduce((countsVote,vote)=>{
        countsVote[vote] = (countsVote[vote] || 0) + 1;
        return countsVote;
    },{});
};


const usuarios=[
    {id:1,nombre:"Ana",rol:"admin"},
    {id:2,nombre:"Carlos",rol:"usuario"},
    {id:3,nombre:"Beatriz",rol:"admin"}
]

//Funcion (arrayUsuarios, idBusqueda) --> delvuelve el rol que tiene.
//Buscar el usuario por ID = 2 y obtener el rol que tiene.

const getRol = (arrayUsuarios=[], idBusqueda=1) =>{
    return arrayUsuarios.find((user) =>{
        if(encontrado = Number(user.id) === Number(idBusqueda)){
            return user.rol
        }else{
            return "Error: Usuario no encontrado"
        }

    })
};


const indexFinder = (userArray, id = 1) => {
    return user.findIndex(user => Number(user.id) === Number(id));
}



//-------------- some() --> Devuelve true si uno de los elementos  cumple las condiciones.
const numerosPares = [2,6,3,1,6,8];

//¿Hay números pares en ese array?

const comprobarPares = numerosPares.some(numero => numero % 2 ===0);

