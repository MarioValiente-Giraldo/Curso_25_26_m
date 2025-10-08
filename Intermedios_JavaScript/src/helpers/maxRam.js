import { newData } from "./myFunction"

export const maxRam = (arrayProducts) => {
    const { nombre } = arrayProducts
        .map(newData)
        .reduce((maximo,producto)=>{
        return producto.ram > maximo.ram ? producto:maximo;
    });
    return nombre;
}