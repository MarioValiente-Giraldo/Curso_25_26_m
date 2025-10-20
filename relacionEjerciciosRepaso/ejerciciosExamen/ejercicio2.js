import { productos } from "../data.js";

function analizarProdutosPorcategoría(){
    const agrupados = productos.reduce((acc,producto)=>{
        const categoría = producto.categoría;
        if(!acc[categoría]){
            acc[categoría]={
             totalProductos:0,
             sumaPrecios:0,
             stockTotal:0,
             valoracionTotal:0,
            }
        }
        acc[categoría].totalProductos++;
        acc[categoría].sumaPrecios+=producto.precio;
        acc[categoría].stockTotal+=producto.stock;
        acc[categoría].valoracionTotal+=producto.valoracion;
        return acc;
    },{});

    for (const categoría in agrupados){
        const datos = agrupados[categoría];
        agrupados[categoría]={
            totalProductos: datos.totalProductos,
            precioMedio:Number((datos.sumaPrecios/datos.totalProductos).toFixed(2)),
            stockMedio:Number((datos.stockTotal/datos.totalProductos).toFixed(2)),
            valoracionMedia:Number((datos.valoracionTotal/datos.totalProductos).toFixed(2)),
        }
    }
    return agrupados;
}


function filtrarStockBajo(){
    const productos = analizarProdutosPorcategoría();
    return Object.entries(productos)
    .filter(([categoría,datos])=>datos.stockMedio<15)
    .map(([categoría,datos])=>({categoría,...datos}));

}

function filtrarValoracionAlta(){
    const productos = analizarProdutosPorcategoría();
    return Object.entries(productos)
    .filter(([categorías,datos])=>datos.valoracionMedia>=4)
    .map(([categoría,datos])=>({categoría,...datos}));
    
};

//Para ordenar dirección ascendete es a-b, si es descendente es b-a.
function ordenarStock(direccion='asc'){
    const productos = analizarProdutosPorcategoría();
    if(direccion.trim().toLowerCase()==='asc'){
        return Object.entries(productos)
        .sort((a,b)=>a[1].stockMedio-b[1].stockMedio)
        .map(([categoría,datos])=>({categoría,...datos}));
    }else{  
        return Object.entries(productos)
        .sort((a,b)=>b[1].stockMedio-a[1].stockMedio)
        .map(([categoría,datos])=>({categoría,...datos}));
    }
}

function ordenarPrecio(direcion='asc'){
    const productos = analizarProdutosPorcategoría();
    if(direccion.trim().toLowerCase()==='asc'){
        return Object.entries(productos)
        .sort((a,b)=>a[1].stockMedio-b[1].stockMedio)
        .map(([categoría,datos])=>({categoría,...datos}));
    }else{
        return Object.entries(productos)
        .sort((a,b)=>b[1].stockMedio-a[1].stockMedio)
        .map(([categoría,datos])=>({categoría,...datos}));
    }
}



console.log(analizarProdutosPorcategoría());
console.log('------------------------------------------------------------------');
console.log(filtrarStockBajo());
console.log('------------------------------------------------------------------');
console.log(filtrarValoracionAlta());