import { productos } from "./data/data";
import { newData } from "./helpers/myFunction";



//-------------INICIO DE LA APLICACÓN ----------------
 export const newDataArray= (arrayProducts) => arrayProducts
    .map(newData());


console.log(newDataArray(productos))

//En helpers crear una funcion que se llame maxRam, que al pasarle un array de productos, esta me de el nombre del producto con mayor ram
