var cuentas = [
    { nombre: "Mali", saldo: 200, contraseña:"saldo" },
    { nombre: "Gera", saldo: 290, contraseña:"12345" },
    { nombre: "Maui", saldo: 67, contraseña:"banco" }
];

const btnSaldo = document.getElementById("saldo");
var cliente = "Mali"

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



// Segunda pagina
/*
Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar.
    Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto,
    debe mostrarle al usuario el monto retirado y el nuevo saldo total.
Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio*/