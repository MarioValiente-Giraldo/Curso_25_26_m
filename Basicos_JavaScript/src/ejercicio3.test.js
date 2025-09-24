const assert = require('assert');

// Importa las funciones y el array de cuentas del archivo principal
const {
    crearCuenta,
    depositarDinero,
    retirarDinero,
    consultarSaldo,
    transferirDinero,
    buscarCuentaPorTitular,
    mostrarCuentas,
    cuentas
} = require('./ejercicio3.js');

//<--------------Crear una cuenta bancaria-------------->
let cuentaX = crearCuenta("Mario", 1000);
let cuentaY = crearCuenta("Ana", 500);

//<--------------Verificar los datos de la cuenta X-------------->
assert.strictEqual(cuentaX.titular, "Mario");
assert.strictEqual(cuentaX.saldo, 1000);

//<--------------Depositar dinero en la cuenta X-------------->
depositarDinero(cuentaX.numeroCuenta, 500);
let saldoX = consultarSaldo(cuentaX.numeroCuenta);
assert.strictEqual(saldoX, 1500);

//<--------------Retirar dinero de la cuenta X-------------->
retirarDinero(cuentaX.numeroCuenta, 200);
saldoX = consultarSaldo(cuentaX.numeroCuenta);
assert.strictEqual(saldoX, 1300);

//<--------------Consultar el saldo de la cuenta X-------------->
saldoX = consultarSaldo(cuentaX.numeroCuenta);
assert.strictEqual(saldoX, 1300);

//<--------------Transferir dinero de la cuenta X a la cuenta Y-------------->
let mensajeTransferencia = transferirDinero(cuentaX.numeroCuenta, cuentaY.numeroCuenta, 300);
assert.strictEqual(mensajeTransferencia, "Transferencia realizada");
saldoX = consultarSaldo(cuentaX.numeroCuenta);
let saldoY = consultarSaldo(cuentaY.numeroCuenta);
assert.strictEqual(saldoX, 1000);
assert.strictEqual(saldoY, 800);

//<--------------Buscar cuenta por titular-------------->
let cuentaBuscada = buscarCuentaPorTitular("Ana");
assert.strictEqual(cuentaBuscada.numeroCuenta, cuentaY.numeroCuenta);

//<--------------Mostrar todas las cuentas-------------->
let totalCuentas = mostrarCuentas();
assert.strictEqual(totalCuentas.length, 2);


console.log("Todos los tests pasaron correctamente.");