//Crear un función utilizando promesas y otra usando asyncAwait, que de jsonplaceholder traiga los título y las imágenes. 
const API_URL = import.meta.env.VITE_API_URL;
//Función usando promise
const API_WEATHER = import.meta.env.VITE_OPEN_WEATHER;

export function dataJSONPromise (){
    //Creamos nuestra promesa

        //Hacemos la peticón al endpoint
        fetch(API_URL)
        //fetch es otra promesa, por lo cual hay que consumirla
            .then(response=>{
                if(!response.ok){
                    throw new Error("Error al obtener los datos");
                }
                return response.json();
            })
            .then(data=>{
                const resultado = data.map(item=>{
                    return{
                    title:item.title,
                    img:item.thumbnailUrl
                    }
                })
                console.log(resultado);
            })
            .catch(error=>{
                console.log(error);
            })
            .finally(()=>{
                console.log("Finalizado");
                console.log(API_URL);
            });

    
}

//Función usando AsyncAwait

export async function dataJSONAsync(){
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        const dataMap = data
            .map(item=>{
                        return{
                        title:item.title,
                        img:item.thumbnailUrl
                        }
                    });
        console.log(dataMap);
        return dataMap; 

    }catch(error){

    }

}


///Crear una función que se le pase como parámetro una ciudad y automáticamente me devuelva temperatura,humedad y viento actual usando la API  de OpenWeather

export async function getWeatherAsync(city){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_WEATHER}`);
        if(!response.ok){
            throw new Error("Error al obtener los datos");
        }
        
        const data = await response.json();

        const logoTiempo = ['☁️','🌧️','☀️','⛅'];
        const { name: ciudad, weather: [{ main: weatherMain }], main: { temp: temperatura, humidity: humedad }, wind: { speed: viento } } = data;
        
        const dataParse = {
            ciudad,
            tiempo: weatherMain === "Clouds" ? logoTiempo[0] : weatherMain === "Rain" ? logoTiempo[1] : weatherMain === "Clear" ? logoTiempo[2] : logoTiempo[3],
            temperatura,
            humedad,
            viento,
            };
        console.log(dataParse);
        console.log("-----------------------------------------------------------");
        
    }catch(error){
        console.log(error);
    
    }

}

export function getWeatherPromise(city){
    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_WEATHER}`)
            .then(response => {
                if(!response.ok){
                    throw new Error("Error al obtener los datos");
                }
                return response.json();
            })
            .then(data => {
                const logoTiempo = ['☁️','🌧️','☀️','⛅'];
                const { name: ciudad, weather: [{ main: weatherMain }], main: { temp: temperatura, humidity: humedad }, wind: { speed: viento } } = data;
                
                const dataParse = {
                ciudad,
                tiempo: weatherMain === "Clouds" ? logoTiempo[0] : weatherMain === "Rain" ? logoTiempo[1] : weatherMain === "Clear" ? logoTiempo[2] : logoTiempo[3],
                temperatura,
                humedad,
                viento,
                };
                console.log(dataParse);
                resolve(dataParse);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            });
            
    });
};