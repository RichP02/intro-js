const formLogin = document.getElementById("login")
const post = document.querySelector(".post")
const postTitle = document.querySelector(".post-title")
const btncambiarTexto = document.getElementById("cambiar-texto")
//const cambiarTexto = document.querySelector("#cambiar-texto")

/*btncambiarTexto.onclick = function () {
    cambiarTexto("Hola mundo desde un Evento")
}*/

/*
addEventListener()
1. string con el nommbre del evento
2. callback
3. boolean -> opcional
*/

const temporalText = postTitle.textContent
let controlState = false

function cambiarTexto(sms){
    postTitle.textContent = sms
    controlState = true
}

btncambiarTexto.addEventListener("click", function(){
    if (!controlState){
        cambiarTexto("Hola mundo desde un Evento")
    } else {
        postTitle.textContent = temporalText
        controlState = false
    }
})


function sumar(n1,n2){
    return n1 + n2
}

const operationSuma = sumar(1,3)
console.log(operationSuma);

//const container = document.querySelector(".container input[type='email']")
//const formLogin = document.getElementById("login")

//console.log(container);