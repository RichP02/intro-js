var cuentas = [
    { nombre: "Mali", saldo: 200, contraseña:"saldo" },
    { nombre: "Gera", saldo: 290, contraseña:"12345" },
    { nombre: "Maui", saldo: 67, contraseña:"banco" }
];

const btnIniciar = document.getElementById("iniciar");
const form_login = document.getElementById("login");

function verificar() {
    var nombreUsuario = form_login.user.value;
    const contraUsuario = form_login.pass.value;
    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === nombreUsuario && cuentas[i].contraseña === contraUsuario) {
            var cliente = cuentas[i].nombre
            break;
        }
    }

    if(cliente === "Mali"){
        location.href = "pageMali.html";
        alert("Aceptad@");
    } else if (cliente === "Gera"){
        location.href = "pageGera.html";
        alert("Aceptad@");
    }else if (cliente === "Maui"){
        location.href = "pageMaui.html";
        alert("Aceptad@");
    } else {
        alert("Usuario no encontrado");
    }
}
btnIniciar.onclick = () => verificar()