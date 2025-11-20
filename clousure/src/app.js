import Database from 'better-sqlite3';

const app = () => {
    //Primera función closure
    // Aquí mostramos cómo funciona un closure: una función interna recuerda
    // las variables de la función externa incluso después de que esta termine.
    const crearClosure = () => {
        let mensajeSecreto = 'Yo soy tu closure'; // Variable privada dentro del closure

        return () => {
            // La función interna sigue accediendo a mensajeSecreto
            console.log("Mensaje:", mensajeSecreto);
        };
    };

    const miClosure = crearClosure(); // Creamos el closure
    miClosure(); // Lo ejecutamos → imprime el mensaje secreto


    //------------------ scope léxico ------------------
    // Aquí demostramos que las funciones pueden acceder a las variables
    // del lugar donde fueron DEFINIDAS y no donde se ejecutan.
    let nivelGlobal = 'Soy Global 🌍';

    const functionExterna = () => {
        let nivelExterno = 'Soy del scope externo';

        const functionInterna = () => {
            let nivelInterno = 'Soy del scope interno';

            // Demostremos...
            // Gracias al scope léxico, functionInterna puede acceder
            // a nivelGlobal y nivelExterno
            console.log('Accediendo a: ', nivelGlobal);
            console.log('Accediendo a: ', nivelExterno);
            console.log('Accediendo a: ', nivelInterno);
        };

        functionInterna();
    };
    functionExterna(); 


    //Ejercicio encapsualción
    /** 
     * Crear un objecto público que tenga las claves saldo y retirar dinero <--- Retirar dinero de ese saldo
     * 
     **/
    // Este es un objeto "público": sus propiedades pueden modificarse desde fuera.
    // No tiene encapsulación real.
    const objetoPublico = {
        saldo: 1000,
        retirarDinero: function(cantidad){
            this.saldo -= cantidad;
        },
    };

    objetoPublico.retirarDinero(100);
    console.log(objetoPublico.saldo); // Cualquiera puede cambiar el saldo → no es privado.


    // Ahora creamos una cuenta bancaria usando CLOSURES.
    // Aquí sí hay encapsulación real gracias a que 'saldo' es privado.
    const crearCuentaBancaria = (saldoInicial = 0) => {
        //Saldo ha de ser private
        let saldo = saldoInicial; // Esta variable NO se puede acceder desde fuera

        return {
            obtenerSaldo: () => saldo, // getter público

            depositar: (cantidad = 0) => {
                if(cantidad > 0){
                    saldo += cantidad; // Manipula la variable privada
                    console.log(`🏅Cantidad ${cantidad} añadida, el nuevo saldo es ${saldo}🏅`);
                    return true;
                } else {
                    return false;
                }
            },

            retirar: (cantidad = 0) => {
                if(cantidad > 0 && cantidad <= saldo){
                    saldo -= cantidad;
                    console.log(`🏅Cantidad ${cantidad} retirada, el nuevo saldo es ${saldo}🏅`);
                    return true;
                } else {
                    return false;
                }
            }
        };
    };

    //Primera Cuenta 
    const cuenta1 = crearCuentaBancaria(1000);
    console.log(cuenta1.obtenerSaldo());
    cuenta1.depositar(100);
    console.log(cuenta1.obtenerSaldo());
    cuenta1.retirar(50);
    console.log(cuenta1.obtenerSaldo());


    //Crear un contador incrementar, decrementar, resetear y obtener el valor del contador.
    /*
    Ejercicio1: Crear dos contadores, uno que empiece en 10 y vaya hasta al 0,
    y otro que empiece en 0 y vaya hasta 10, ejemplificar un temporizador de un segundo.
    */

    // Función para crear contadores usando closures.
    // El valor del contador queda "encapsulado".
    const crearContador = (valorInicial = 0) => {
        let contador = valorInicial;

        return {
            obtenerValor: () => contador,

            incrementar: (valor = 1) => {
                if(valor > 0){
                    contador += valor;
                }
                return contador;
            },

            decrementar: (valor = 1) => {
                if(valor > 0 && valor <= contador){
                    contador -= valor;
                }
                return contador;
            },

            resetear: () => contador = valorInicial,
        };
    };


    //Contadores
    const contador1 = crearContador(10);
    const contador2 = crearContador();

    // 10 → 0 (contador descendente)
    // Se ejecuta cada segundo y va restando 1.
    const idIntervalContador1 = setInterval(() => {
        contador1.decrementar(1);
        console.log(` Contador1: ${contador1.obtenerValor()}`);
    }, 1000);

    // Lo detenemos a los 10 segundos
    setTimeout(() => clearInterval(idIntervalContador1), 10000);


    // 0 → 10 (contador ascendente)
    const idIntervalContador2 = setInterval(() => {
        contador2.incrementar(1);
        console.log(` Contador2: ${contador2.obtenerValor()}`);
    }, 1000);

    // Lo detenemos a los 10 segundos
    setTimeout(() => clearInterval(idIntervalContador2), 10000);


    /*
    Vamos a crear un carrito de la compra persistente utilizando 'closure'
    y estableciendo la persistencia con una base de datos sqlite3,
    debe permitir insertar y eliminar productos, y también calcular el total
    */

    //Paso 1 -- Conectar a la base de datos
    const dataBase = require('better-sqlite3');
    const db = new  Database()
    

};

export default app
