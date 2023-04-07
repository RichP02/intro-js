var cuentas = [
    { nombre: "Mali", saldo: 200, contraseña:"saldo" },
    { nombre: "Gera", saldo: 290, contraseña:"12345" },
    { nombre: "Maui", saldo: 67, contraseña:"banco" }
];

var cliente = "Mali"
const btnSaldo = document.getElementById("saldo");
const btnDeposito = document.getElementById("btnDeposito");
const cantidadDeposito = document.getElementById("Depositar");
const btnRetirar = document.getElementById("btnRetirar");
const cantidadRetirar = document.getElementById("Retirar");

function verificarSaldo() {
    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === cliente) {
            let saldo = cuentas[i].saldo;
            alert("Su saldo es de: " + saldo);
            break;
        }
    }
}
btnSaldo.onclick = () => verificarSaldo()

function desposito(){
    var cantidad = parseFloat(cantidadDeposito.canDespositar.value);
    var final = cuentas[0].saldo + cantidad;
    if (final > 990){
        alert("No se puede, porque no se puede tener mas de $990");
    } else if (final < 10){
        alert("No se puede, porque no se puede tener menos de $10");
    } else {
        alert(`El deposito fue de ${cantidad}, su cuenta final es de ${final}`);
    }
}
btnDeposito.onclick = () => desposito()

function retirar(){
    var cantidad = parseFloat(cantidadRetirar.canRetirar.value);
    var final = cuentas[0].saldo - cantidad;
    if (final > 990){
        alert("No se puede, porque no se puede tener mas de $990");
    } else if (final < 10){
        alert("No se puede, porque no se puede tener menos de $10");
    } else {
        alert(`El retiro fue de ${cantidad}, su cuenta final es de ${final}`);
    }
}
btnRetirar.onclick = () => retirar()