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
function crearNumeroCuenta(){
    let numeroCuenta = Math.random()*100000000000000000000000 +1;
    return Math.floor(numeroCuenta);
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
        if(cuenta.numeroCuenta === numeroCuenta && cantidad>0){
            cuenta.saldo+=cantidad;
            return cuenta.saldo;
        }else{
            return "Cuenta no encontrada o cantidad negativa";
        }
    }
}
//<--------------Retirar dinero en una cuenta-------------->
function retirarDinero(numeroCuenta,cantidad){
    for(const cuenta of cuentas){
        if(cuenta.numeroCuenta === numeroCuenta && cantidad>0 && cuenta.saldo-cantidad>=0){
            cuenta.saldo-=cantidad;
        }else{
            return "Cuenta no encontrada, cantidad negativa o saldo insuficiente";
        }
    }
}

//<--------------Consultar el saldo de una cuenta-------------->
function consultarSaldo(numeroCuenta){
    for(const cuenta of cuentas){
        if(cuenta.numeroCuenta === numeroCuenta){
            return cuenta.saldo;
        }else{
            return "Cuenta no encontrada";
        }               
    }
}
function transferirDinero(numeroCuentaOrigen, numeroCuentaDestino, cantidad){
    
}
