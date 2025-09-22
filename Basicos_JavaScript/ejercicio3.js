/* 
 - Gestión bancaria Revolut
    El ejercicio consiste en llevar un sistema bancario con JS que permita:
        - Crear una cuenta titular
        - Depositar dinero en una cuenta
        - Retirar dinero en una cuenta (Siempre que la cuenta no se quede en números negativos)
        - Consultar el saldo de una cuenta
        - Transferir dinero entre distintas cuentas
        - Mantener un listado de cuentas y buscar cuentas por titular
    Cuando creemos una cuenta se debe generar un número de longitud 24
*/

//<--------------Declarar variables-------------->
const cuentas = [];

//<--------------Crear un numero de cuenta-------------->
function crearNumeroCuenta() {
    let numeroCuenta = "";
    for (let i = 0; i < 24; i++) {
        numeroCuenta += Math.floor(Math.random() * 10);
    }
    return numeroCuenta;
}
//<--------------Crear Cuenta bancaria-------------->
function crearCuenta(titular, saldo=0){
    const cuenta = {
        titular: titular,
        numeroCuenta: crearNumeroCuenta(),
        saldo: saldo,
    }
    cuentas.push(cuenta);
    return cuenta;
}
//<--------------Depositar dinero en una cuenta-------------->
function depositarDinero(numeroCuenta, cantidad){
    for(const cuenta of cuentas){
        if(cuenta.numeroCuenta === numeroCuenta && cantidad > 0){
            cuenta.saldo += cantidad;
            return cuenta.saldo;
        }
    }
    return "Cuenta no encontrada o cantidad negativa";
}
//<--------------Retirar dinero en una cuenta-------------->
function retirarDinero(numeroCuenta, cantidad){
    for(const cuenta of cuentas){
        if(cuenta.numeroCuenta === numeroCuenta && cantidad > 0 && cuenta.saldo - cantidad >= 0){
            cuenta.saldo -= cantidad;
            return cuenta.saldo;
        }
    }
    return "Cuenta no encontrada, cantidad negativa o saldo insuficiente";
}

//<--------------Consultar el saldo de una cuenta-------------->
function consultarSaldo(numeroCuenta){
    for(const cuenta of cuentas){
        if(cuenta.numeroCuenta === numeroCuenta){
            return cuenta.saldo;
        }
    }
    return "Cuenta no encontrada";
}
//<--------------Transferir dinero entre distintas cuentas-------------->
function transferirDinero(numeroCuentaOrigen, numeroCuentaDestino, cantidad){
    if(cantidad > 0){
        let cuentaOrigen = null;
        let cuentaDestino = null;
        for(const cuenta of cuentas){
            if(cuenta.numeroCuenta === numeroCuentaOrigen){
                cuentaOrigen = cuenta;
            }
            if(cuenta.numeroCuenta === numeroCuentaDestino){
                cuentaDestino = cuenta;
            }
        }
        if(cuentaOrigen && cuentaDestino && cuentaOrigen.saldo - cantidad >= 0){
            cuentaOrigen.saldo -= cantidad;
            cuentaDestino.saldo += cantidad;
            return "Transferencia realizada";
        }
        return "Error en la transferencia";
    }
    return "Cantidad negativa";
}

function buscarCuentaPorTitular(titular){
    for(const cuenta of cuentas){
        if(cuenta.titular === titular){
            return cuenta;
        }
    }
    return "Cuenta no encontrada";
}
//<--------------Mostrar cuentas-------------->
function mostrarCuentas(){
    for(const cuenta of cuentas){
        console.log(cuenta.titular,"----", cuenta.numeroCuenta);
    }
}


