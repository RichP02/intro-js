// 1. Hacer una funcion que cheque si un número es negativo, positivo o cero
function getNumber(){
    var number = window.prompt("Ingresa un número")
    if(number < 0){
        console.log("Es un número negativo");
    } else if(number > 0){
        console.log("Es un número positivo");
    } else {
        console.log("Es un cero");
    }
}
getNumber()