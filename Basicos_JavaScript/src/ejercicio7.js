//OBJETOS EN JAVASCRIPT


const usuario = {

    nombre:"Mario",
    email:"mariovaliente0@gmail.com",
    activo:true,

}

// Para obtener las claves: keys
const claves = Object.keys(usuario);
//[nombre,email,activo]

//Utilizades:
// 1.- Comprobar que todas las claves existen.
function validarCamposRequeridos(objeto,camposRequeridos){
    const clavesObjeto= Object.key(objeto);
    //retorno verdadero o falso
    return camposRequeridos.every((campo)=>{
        return clavesObjeto.includes(campo)
    })
}


//Data:
const datosFormulario = {name:"Carla",active:false};

const valido = validarCamposRequeridos(datosFormulario,["nombre","email","active"]);
//------------------------------------------------------------------------------------------------------------------------



//Para obtener los valores: values

const producto = {
    nombre: "laptop",
    stock: 100,
    precio: 1000,
    destacado: true,
}

//Array de valores del objeto
const valores = Object.values(producto); //------> ["laptop",100,1000,true]


//Verificar si algún valor cumple una condición:


const precipitaciones= {
    enero:110,
    febrero:98,
    marzo:120,
    abril:50,
}

//¿Algún mes la precipitación fue superior a 100 litros?

const mesSuperiorCien = Object.values(precipitaciones)
    .some((precipitacion)=>  precipitacion>100)

//¿Cuántos litros tottales han caido en los meses enero-abril?

const sumaLitros = Object.values(precipitaciones)
    .reduce((acc,precipitacion)=> Number(acc+precipitacion),0);

//Calcular la precipitación máxima
const precipitacionMax = Math.max(...Object.values(precipitaciones));

//--------------------------------------------------------------------------------------------------------------------

//Obtener pares [clvae,valor] <--- entries()

const configuracion ={
    tema:"oscuro",
    idioma:"es",
    notificaciones: true,
    volumen: 75
}

//Obtener array de pares clave-valor:

const entradas = Object.entries(configuracion);

/*
[
    ['tema', 'oscuro']

    ['idioma', 'es']

    ['notificaciones', true]

    ['volumen, 75]
]
*/

const usuarioDb = {

    nombre:"Mario",
    password: "mvgxfs",
    email:"mariovaliente0@gmail.com",
    activo:true,

}

//Filtrar. Eliminar los campos sensibles del objeto usuarioDb

Object.entries(usuarioDb).filter()


//destructuring

const {nonbre,email} = usuarioDb; /* --> nombre= usuarioDb.nombre --- email = usuarioDb.email 
                                     --> Crea dos variables con los datos del usuarioDb    */


const data = [1,2,3,4,5];


const [a,b,c] = data;  // a = 1 --- b= 2 --- c= [ 3, 4, 5 ]


function vData (array){
    const [v1,v2] = array;
    console.log("v1:", v1)
    console.log("v2:", v2);
}

vData([1,2,3,4,5]) // <-------- 


//Crear función llamada mostrarPersona. Obtener el username y las dos primeras redes sociales que el usuario tenga:
const usuario3 ={
    id:1,
    info:{
        username: "marioV",
        redes:["x","github", "linkedin"]
    }
}

const {info:{username,redes:[r1,r2]}} = usuario3;

/*
    username -> marioV
    r1 -> x
    r2 -> github
*/

//Sacar el nombre y la edad, si la edad no tiene valor, será 0

const data4 = {
    id: 101,
    usuario:{
        nombre2: "Mario",
        edad:28,
        direccion:{
            ciudad:"Granada",
            pais:"España"
        },
        activo: true,
    },
};

const {usuario:{perfil:{nombre,edad=0}}}=data4;
/*
    nombre2 --> "Mario"
    edad --> 28 -------------- Si no estuviese edad sería 0
*/

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1000,
    fabricante: {
      nombre: "HP",
      pais: "USA",
      contacto: {
        email: "info@hp.com",
        telefono: 123123123
      },
    },
    especificaciones: {
      ram: "16GB",
      cpu: "Intel i7",
    },
  },
  {
    id: 2,
    nombre: "Smartphone",
    precio: 800,
    fabricante: {
      nombre: "Samsung",
      pais: "Corea del Sur",
      contacto: {
        email: "support@samsung.com",
        telefono: 987654321
      },
    },
    especificaciones: {
      ram: "8GB",
      cpu: "Exynos 2200",
    },
  },
  {
    id: 3,
    nombre: "Tablet",
    precio: 600,
    fabricante: {
      nombre: "Apple",
      pais: "USA",
      contacto: {
        email: "contact@apple.com",
        telefono: 555444333
      },
    },
    especificaciones: {
      ram: "6GB",
      cpu: "Apple M1",
    },
  },
  {
    id: 4,
    nombre: "Monitor",
    precio: 300,
    fabricante: {
      nombre: "LG",
      pais: "Corea del Sur",
      contacto: {
        email: "lg@lg.com",
        telefono: 111222333
      },
    },
    especificaciones: {
      ram: "N/A",
      cpu: "N/A",
    },
  },
  {
    id: 5,
    nombre: "Impresora",
    precio: 200,
    fabricante: {
      nombre: "Canon",
      pais: "Japón",
      contacto: {
        email: "canon@canon.jp",
        telefono: 444555666
      },
    },
    especificaciones: {
      ram: "2GB",
      cpu: "ARM Cortex",
    },
  },
  {
    id: 6,
    nombre: "Consola",
    precio: 500,
    fabricante: {
      nombre: "Sony",
      pais: "Japón",
      contacto: {
        email: "playstation@sony.com",
        telefono: 999888777
      },
    },
    especificaciones: {
      ram: "16GB",
      cpu: "AMD Ryzen",
    },
  },
  {
    id: 7,
    nombre: "Auriculares",
    precio: 150,
    fabricante: {
      nombre: "Bose",
      pais: "USA",
      contacto: {
        email: "bose@bose.com",
        telefono: 121212121
      },
    },
    especificaciones: {
      ram: "N/A",
      cpu: "N/A",
    },
  },
  {
    id: 8,
    nombre: "Reloj Inteligente",
    precio: 250,
    fabricante: {
      nombre: "Xiaomi",
      pais: "China",
      contacto: {
        email: "mi@xiaomi.com",
        telefono: 333444555
      },
    },
    especificaciones: {
      ram: "2GB",
      cpu: "Snapdragon Wear",
    },
  },
  {
    id: 9,
    nombre: "Cámara",
    precio: 1200,
    fabricante: {
      nombre: "Nikon",
      pais: "Japón",
      contacto: {
        email: "nikon@nikon.jp",
        telefono: 888777666
      },
    },
    especificaciones: {
      ram: "4GB",
      cpu: "Expeed",
    },
  },
  {
    id: 10,
    nombre: "Router",
    precio: 180,
    fabricante: {
      nombre: "TP-Link",
      pais: "China",
      contacto: {
        email: "tplink@tplink.com",
        telefono: 555666777
      },
    },
    especificaciones: {
      ram: "512MB",
      cpu: "Dual-Core ARM",
    },
  }
];


//Crear una función que extraiga los datos del objeto y me devuelva la siguiente estructura.
//Nombre, fabricante{nombre, contacto} especificaciones y me devuelva la ram.
//Imaginemos un ARRAY DE PRODUCTOS
//Usando la nueva especificación obtener el nombre del producto con más ram

const newData = (products) => {
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
        fabrincante,
        especificaciones
    }
 };

 const obtenerMaxRam = (arrayProducts) =>{

 };

const newDataArray= (arrayProducts) => arrayProducts
    .map((product) => extraerData(product));

